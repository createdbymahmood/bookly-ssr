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
