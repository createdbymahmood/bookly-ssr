import React, { FunctionComponent } from 'react';
/* components */
/* modules */
import { Link } from 'components/Link';
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { MenuBarItemComponentProps } from './MenuBarItem.types';
/* styles */
import s from './MenuBarItem.module.scss';

export const MenuBarItem: FunctionComponent<MenuBarItemComponentProps> = props => {
    const {
        className,
        permission,
        title,
        link,
        exact = false,
        ...restProps
    } = props;
    return (
        <Link
            permission={permission}
            activeClassName={s.activeMenuItem}
            href={link}
            className={clsx(s.menuItem, className)}
        >
            <span {...restProps}>{title}</span>
        </Link>
    );
};
