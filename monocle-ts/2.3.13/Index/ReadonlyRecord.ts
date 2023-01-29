/**
 * @since 2.2.0
 */
import { ReadonlyRecord } from 'fp-ts/ReadonlyRecord.ts'
import { Index } from '../index.ts'
import * as R from './Record.ts'

/**
 * @category constructor
 * @since 2.2.0
 */
export const indexReadonlyRecord: <A = never>() => Index<ReadonlyRecord<string, A>, string, A> = R.indexRecord
