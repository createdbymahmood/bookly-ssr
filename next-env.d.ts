/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg';

declare module '*.jpg';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            API_URL: string;
            WEBSITE_TITLE: string;
            PORT?: string;
        }
    }
}
/* customize the AxiosError object type */
declare module 'axios' {
    interface ApiServiceError extends AxiosError<ServerError> {}
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
