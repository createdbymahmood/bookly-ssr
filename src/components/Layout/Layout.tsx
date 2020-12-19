import React, { FC, Fragment } from 'react';
/* components */
import { TopBar } from 'components/TopBar';
/* modules */
/* helpers */
/* assets */
/* constants */
/* types */
import { LayoutProps } from './Layout.types';
import Router, { useRouter } from 'next/router';
/* styles */

export const Layout: FC<LayoutProps> = ({ children, withSearchbar }) => {
    const router = useRouter();
    return (
        <Fragment>
            <TopBar
                onSearch={text => router.push({ query: { query: text } })}
                withSearchbar={withSearchbar}
            />
            {children}
        </Fragment>
    );
};
