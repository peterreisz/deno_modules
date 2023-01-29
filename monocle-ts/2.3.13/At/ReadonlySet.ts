/**
 * @since 2.2.0
 */
import { Eq } from 'fp-ts/Eq.ts'
import { At } from '../index.ts'
import * as S from './Set.ts'

/**
 * @category constructor
 * @since 2.2.0
 */
export const atReadonlySet: <A = never>(E: Eq<A>) => At<ReadonlySet<A>, A, boolean> = S.atSet as any
