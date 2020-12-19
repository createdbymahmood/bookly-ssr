type Maybe<T> = T | undefined | null;

export const isNullOrEmptyString = (arg: Maybe<string>) =>
    arg.length === 0 || arg === '';
