type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${P extends '' ? '' : '.'}${P}`
    : never
  : never;

type Paths<T> = T extends object
  ? T extends Array<any>
    ? number | Join<number, Paths<T[number]>>
    : {
        [K in keyof T]-?: K extends string | number
          ? T[K] extends object
            ? `${K}` | Join<K, Paths<T[K]>>
            : `${K}`
          : never;
      }[keyof T]
  : never;
