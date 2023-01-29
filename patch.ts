import { walk } from "https://deno.land/std/fs/mod.ts";

for await (const file of walk(".", {
  exts: [".ts"],
  skip: [/^patch\.ts$/],
})) {
  console.log(file.path);

  const content = await Deno.readTextFile(file.path);

  const newContent = content
    .replaceAll(`from 'fp-ts/lib/`, `from 'fp-ts/`)
    .replaceAll(`module 'fp-ts/lib/`, `module 'fp-ts/`)
    .replaceAll(`from '\.'`, `from './index'`)
    .replaceAll(`from '\.\.'`, `from '../index'`)
    .replace(/^import (.+) from '(.+(?<!\.ts))'$/gm, `import $1 from '$2.ts'`)
    .replace(/^} from '(.+(?<!\.ts))'$/gm, `} from '$1.ts'`)
    .replaceAll(`declare module './HKT' {`, "declare global {")
    .replaceAll(`declare module 'fp-ts/HKT' {`, "declare global {")
    .replaceAll(
      "  readonly unwrap = this.get",
      "  readonly unwrap = (s: S): A => this.get(s)"
    )
    .replaceAll(
      "  readonly to = this.get",
      "  readonly to = (s: S): A => this.get(s)"
    )
    .replaceAll(
      "  readonly wrap = this.reverseGet",
      "  readonly wrap = (a: A): S => this.reverseGet(a)"
    )
    .replaceAll(
      "  readonly from = this.reverseGet",
      "  readonly from = (a: A): S => this.reverseGet(a)"
    )
    .replaceAll(
      "// inj: type-level dictionaries for HKTs: URI -> concrete type",
      "declare global {\n//  inj: type-level dictionaries for HKTs: URI -> concrete type"
    )
    .replaceAll("// unions of URIs", "}\n//  unions of URIs");

  await Deno.writeTextFile(file.path, newContent);
}
