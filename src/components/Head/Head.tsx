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
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta
                name="keywords"
                content="کتاب، به اشتراک گذاری کتاب، کتاب آنلاین، دانلود کتاب PDF"
            />
            {props.children}
        </NextHead>
    );
};
