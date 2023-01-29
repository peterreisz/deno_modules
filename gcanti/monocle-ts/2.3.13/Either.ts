/**
 * @since 1.6.0
 */
import { Either, right, left, fold } from 'fp-ts/Either.ts'
import { fromEither, none, some } from 'fp-ts/Option.ts'
import { Prism } from './index.ts'

const r = new Prism<Either<any, any>, any>(fromEither, right)

/**
 * @category constructor
 * @since 1.6.0
 */
export const _right = <E, A>(): Prism<Either<E, A>, A> => r

const l = new Prism<Either<any, any>, any>(
  fold(some, () => none),
  left
)

/**
 * @category constructor
 * @since 1.6.0
 */
export const _left = <E, A>(): Prism<Either<E, A>, E> => l
