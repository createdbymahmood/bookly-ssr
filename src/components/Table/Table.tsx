import React, { FunctionComponent } from 'react';
/* components */
import { Table as AntDesignTable } from 'antd';
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { TableComponentProps, TableProps } from './Table.types';
/* styles */
import s from './Table.module.scss';
import { Image } from 'components/Image';

export const Table: FunctionComponent<TableComponentProps> = props => {
    const { className, ...restProps } = props;

    const defaultTableProps: TableProps<any> = {
        locale: {
            emptyText: <DefaultEmptyText />,
        },
    };

    return (
        <AntDesignTable
            className={clsx(className)}
            {...defaultTableProps}
            {...restProps}
        />
    );
};

const DefaultEmptyText = () => (
    <div className={s.emptyBox}>
        <Image src={'/icons/data.svg'} />
        <p>هیچ اطلاعاتی یافت نشد!</p>
    </div>
);
