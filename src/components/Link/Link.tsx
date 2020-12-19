import * as React from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';
import { omit } from 'lodash';
import { AclService } from 'services/rbac';

type LinkProps = NextLinkProps & {
    permission: string;
};
export const Link: React.FC<LinkProps> = props => {
    const restProps = omit(props, ['permission']);
    return (
        <AclService permission={props.permission}>
            <NextLink {...restProps}></NextLink>
        </AclService>
    );
};
