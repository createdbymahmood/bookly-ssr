/* picks all types of a specific component */
interface ServerError {
    message: object;
}

/* customize the AxiosError object type */
declare module 'axios' {
    interface ApiServiceError extends AxiosError<ServerError> {}
}

export type $ElementProps<T> = T extends React.ComponentType<infer Props>
    ? Props extends object
        ? Props
        : never
    : never;
export type Maybe<T> = T | undefined | null;
export type KeyboardKeys = 'Enter' | 'Escape';
export type ValidationRuleType = Record<string, Rule[]>;

type PathImpl<T, Key extends keyof T> = Key extends string
    ? T[Key] extends Record<string, any>
        ?
              | `${Key}.${PathImpl<T[Key], Exclude<keyof T[Key], keyof any[]>> &
                    string}`
              | `${Key}.${Exclude<keyof T[Key], keyof any[]> & string}`
        : never
    : never;

type PathImpl2<T> = PathImpl<T, keyof T> | keyof T;

export type Path<T> = PathImpl2<T> extends string | keyof T
    ? PathImpl2<T>
    : keyof T;
