import { ComponentType } from 'react';
import { useRouter } from 'next/router';
import { useIsomorphicLayoutEffect } from 'react-use';
import get from 'lodash/get';
import { permissions, Permission } from 'services/rbac';
import { Path } from 'types/global';

export function injectAuthConfig(accessKey: Path<Permission>) {
    return function <T>(Component: ComponentType<T>) {
        return function (props: T): JSX.Element {
            const hasAccess = get(permissions.guest, accessKey);
            if (hasAccess === undefined) {
                throw new Error(`Permission key didn't correctly provided`);
            }
            const router = useRouter();

            useIsomorphicLayoutEffect(() => {
                if (!hasAccess) {
                    router.push('/');
                }
            });
            return <Component {...props} />;
        };
    };
}
