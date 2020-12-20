import React, { Fragment } from 'react';
import { Row } from 'components/Row';
import { isEmptyArray } from 'helpers/isEmptyArray';
import { EmptyGrid } from 'components/EmptyGrid';
import { useRouter } from 'next/router';

type Props<T> = {
    items: T[];
    withRow?: boolean;
    filter?: (item: T, index: number) => boolean;
    renderItem: (item: T, index: number) => React.ReactNode;
};

export function GenericGrid<T>(props: Props<T>) {
    const { items, renderItem, filter = () => true, withRow = false } = props;

    const RowPlaceholder = withRow ? Row : Fragment;
    const filtered = items.filter(filter);
    const { query } = useRouter();

    if (isEmptyArray(filtered)) {
        return <EmptyGrid query={query?.query} />;
    }
    return <RowPlaceholder>{filtered.map(renderItem)}</RowPlaceholder>;
}
