import { default as NextHead } from 'next/head';

import { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    title?: string;
};
export const Head: FC<Props> = props => {
    return (
        <NextHead>
            <title> {props.title || 'bookly'} </title>
            {props.children}
        </NextHead>
    );
};
