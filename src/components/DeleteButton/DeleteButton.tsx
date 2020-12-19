import React, { FC } from 'react';
/* components */
import { PopConfirm } from 'components/PopConfirm';
import { Spinner } from 'components/Spinner';
import { AclService } from 'services/rbac';
/* types */
import { DeleteButtonProps } from './DeleteButton.types';
/* assets */
/* modules */
import clsx from 'classnames';
/* styles */
import s from './DeleteButton.module.scss';
import { Image } from 'components/Image';

export const DeleteButton: FC<DeleteButtonProps> = ({
    className,
    permission,
    loading = false,
    ...restProps
}) => {
    if (loading) {
        return <Spinner />;
    }

    return (
        <AclService permission={permission}>
            <PopConfirm {...restProps}>
                <Image
                    src={'/icons/delete.svg'}
                    className={clsx(className, s.icon)}
                />
            </PopConfirm>
        </AclService>
    );
};
