/**
 * @deprecated
 * @since 1.0.0
 */
import { Reporter } from './Reporter.ts'
import { PathReporter } from './PathReporter.ts'
import { isLeft } from 'fp-ts/Either.ts'

/**
 * @category deprecated
 * @since 1.0.0
 * @deprecated
 */
export const ThrowReporter: Reporter<void> = {
  report: (validation) => {
    if (isLeft(validation)) {
      throw new Error(PathReporter.report(validation).join('\n'))
    }
  }
}
