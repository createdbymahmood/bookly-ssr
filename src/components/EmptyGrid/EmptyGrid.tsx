import React, { FC } from 'react';
/* components */
import { Text } from 'components/Text';
import { Link } from 'components/Link';
/* modules */
import clsx from 'classnames';
/* helpers */
import { routeTo } from 'helpers/routeTo';
/* assets */
/* types */
import { EmptyGridProps } from './EmptyGrid.types';
/* styles */
import s from './EmptyGrid.module.scss';
import { Image } from 'components/Image';

export const EmptyGrid: FC<EmptyGridProps> = ({ className, query }) => {
    return (
        <div className={clsx(s.box, className)}>
            <Image src={require('assets/icons/empty.svg')} />
            <Text className={clsx(s.title, 'mt-3')}>
                متاسفیم! جست و جوی کلمه ی "{query}" نتیجه ای نداشت! 😁
            </Text>{' '}
            <Text className={clsx(s.description, 'mt-2')}>
                برای بازگشت به خانه <Home /> {'  '}
                کلیک کنید
            </Text>
        </div>
    );
};

const Home = () => (
    <Link permission="routes.home" {...routeTo.home}>
        <span className={s.here}>اینجا</span>
    </Link>
);
