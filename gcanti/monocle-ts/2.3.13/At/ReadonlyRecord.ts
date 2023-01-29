/**
 * @since 2.2.0
 */
import { Option } from 'fp-ts/Option.ts'
import { ReadonlyRecord } from 'fp-ts/ReadonlyRecord.ts'
import { At } from '../index.ts'
import * as R from './Record.ts'

/**
 * @category constructor
 * @since 2.2.0
 */
export const atReadonlyRecord: <A = never>() => At<ReadonlyRecord<string, A>, string, Option<A>> = R.atRecord
