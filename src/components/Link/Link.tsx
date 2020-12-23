import * as React from 'react';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';
import { omit } from 'lodash';
import { AclService, Permission } from 'services/rbac';
import { Path } from 'types/global';

type LinkProps = NextLinkProps & {
    permission: Path<Permission>;
    activeClassName?: string;
    className?: string;
};

export const Link: React.FC<LinkProps> = props => {
    const restProps = omit(props, ['permission']);
    return (
        <AclService permission={props.permission}>
            <NextLink {...omit(restProps, ['children', 'className'])}>
                <a className={props.className}>{restProps.children}</a>
            </NextLink>
        </AclService>
    );
};
