export const compose = (...fns: any[]) =>
    fns.reduceRight(
        (prevFn, nextFn) => (...args) => nextFn(prevFn(...args)),
        value => value
    );
