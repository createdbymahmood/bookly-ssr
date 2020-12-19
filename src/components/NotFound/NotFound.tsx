import React, { FunctionComponent } from 'react';
/* components */
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { NotFoundComponentProps } from './NotFound.types';
/* styles */
import s from './NotFound.module.scss';
import { Image } from 'components/Image';

export const NotFound: FunctionComponent<NotFoundComponentProps> = ({
    icon: Icon,
    title = 'پیدا نشد :(',
    className,
    ...restProps
}) => {
    return (
        <div className={clsx(s.box, `shadow`, className)} {...restProps}>
            <Image src={'/icons/data.svg'} className={s.icon} />
            <p className={s.title}>{title}</p>
        </div>
    );
};
