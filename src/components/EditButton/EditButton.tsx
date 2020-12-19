import React, { FC } from 'react';
/* components */
import { Image } from 'components/Image';
/* modules */
import clsx from 'classnames';
import { AclService } from 'services/rbac';
/* helpers */
/* assets */
/* types */
import { EditButtonProps } from './EditButton.types';
/* styles */
import s from './EditButton.module.scss';

export const EditButton: FC<EditButtonProps> = ({
    className,
    permission,
    ...restProps
}) => {
    return (
        <AclService permission={permission}>
            <Image
                src={'/icons/edit.svg'}
                className={clsx(className, s.icon)}
                {...restProps}
            />
        </AclService>
    );
};
