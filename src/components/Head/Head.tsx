import { default as NextHead } from 'next/head';
/* types */
import { FC, ReactNode } from 'react';
/* constants */
import SEO from 'configs/seo';

type Props = {
    children: ReactNode;
    title?: string;
};
export const Head: FC<Props> = props => {
    return (
        <NextHead>
            <title>
                {props.title} | {SEO.title}
            </title>
            <meta http-equiv="Content-Type" content={SEO.contentType} />
            <meta name="keywords" content={SEO.keywords} />
            <meta name="author" content={SEO.author} />
            {props.children}
        </NextHead>
    );
};
