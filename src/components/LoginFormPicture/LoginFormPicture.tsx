import React, { FC } from 'react';
/* components */
import { Image } from 'components/Image';
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { LoginFormPictureProps } from './LoginFormPicture.types';
/* styles */
import s from './LoginFormPicture.module.scss';

export const LoginFormPicture: FC<LoginFormPictureProps> = ({
    className,
    ...restProps
}) => {
    return (
        <div className="d-flex justify-content-center">
            <Image
                src={'/icons/login.svg'}
                className={clsx(s.picture, className)}
                {...restProps}
            />
        </div>
    );
};
