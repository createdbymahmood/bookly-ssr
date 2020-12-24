import React, { FC, Fragment } from 'react';
import { AclComponentProps, AclProps } from './Acl.types.d';
import { useCanPerform } from 'hooks';

export const AclService: FC<AclProps> = ({ permission, children }) => {
    const canPerform = useCanPerform(permission);
    return <Fragment>{canPerform ? children : false}</Fragment>;
};
