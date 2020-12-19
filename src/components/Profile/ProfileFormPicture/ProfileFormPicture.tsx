import React, { FC } from 'react';
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { ProfileFormPictureProps } from './ProfileFormPicture.types';
/* styles */
import s from './ProfileFormPicture.module.scss';
import { Image } from 'components/Image';

export const ProfileFormPicture: FC<ProfileFormPictureProps> = ({
    className,
    ...restProps
}) => {
    return (
        <Image
            src={'/icons/profile.svg'}
            className={clsx(s.picture, className)}
            {...restProps}
        />
    );
};
