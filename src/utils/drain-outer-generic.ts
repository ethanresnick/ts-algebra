/**
 * See type of the same name in kysely.
 */
export type DrainOuterGeneric<T> = [T] extends [unknown] ? T : never;
