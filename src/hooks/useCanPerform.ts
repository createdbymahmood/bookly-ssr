import { get } from 'lodash';
import { Permission, usePermissions } from 'services/rbac';
import { Path } from 'types/global';

export const useCanPerform = (permission: Path<Permission>) => {
    const { role, permissions } = usePermissions();
    const canPerform = get(permissions, `${role}.${permission}`);
    if (canPerform === undefined) {
        throw new Error('Permission not found!');
    }
    return canPerform;
};
