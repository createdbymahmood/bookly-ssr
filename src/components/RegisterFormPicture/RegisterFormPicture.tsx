import React, { FC } from 'react';
/* components */
import { Image } from 'components/Image';
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */

/* types */
import { RegisterFormPictureProps } from './RegisterFormPicture.types';
/* styles */
import s from './RegisterFormPicture.module.scss';

export const RegisterFormPicture: FC<RegisterFormPictureProps> = ({
    className,
    ...restProps
}) => {
    return (
        <div className="d-flex justify-content-center">
            <Image
                src={'/icons/register.svg'}
                className={clsx(s.picture, className)}
                {...restProps}
            />
        </div>
    );
};
