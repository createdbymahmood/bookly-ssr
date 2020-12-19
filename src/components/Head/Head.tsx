import { default as NextHead } from 'next/head';
/* types */
import { FC, ReactNode } from 'react';
/* constants */
import { APP_TITLE } from 'constants/config';

type Props = {
    children: ReactNode;
    title?: string;
};
export const Head: FC<Props> = props => {
    return (
        <NextHead>
            <title>
                {props.title} | {APP_TITLE}
            </title>
            {props.children}
        </NextHead>
    );
};
