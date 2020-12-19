import React, { FC } from 'react';
/* components */
import { CategoryBox } from 'components/Category';
import { GenericGrid } from 'components/GenericGrid';
import { Col } from 'components/Col';
/* modules */
import { useRouter } from 'next/router';
/* helpers */
import { checkInclusion } from 'helpers/checkInclusion';
import { uniqueId } from 'lodash';
/* assets */
/* types */
import { CategoriesGridProps } from './CategoriesGrid.types.d';
/* styles */

export const CategoriesGrid: FC<CategoriesGridProps> = ({
    categories,
    loading = false,
}) => {
    const { query } = useRouter();

    const filterPublishers = (category: Category.Base) =>
        checkInclusion(category.categoryTitle, String(query.query));

    if (loading) {
        return <CategoryBox.ShimmerGrid />;
    }

    return (
        <GenericGrid<Category.Base>
            withRow
            filter={filterPublishers}
            items={categories}
            renderItem={renderCategories}
        />
    );
};

const renderCategories = (category: Category.Base) => {
    return (
        <Col xl={4} sm={6} className="mb-3" key={uniqueId()}>
            <CategoryBox.Component
                id={category.id}
                categoryTitle={category.categoryTitle}
            />
        </Col>
    );
};
