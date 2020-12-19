import React, { FunctionComponent } from 'react';
/* components */
import { Publisher, PublisherBox } from 'components/Publisher';
import { GenericGrid } from 'components/GenericGrid';
/* modules */
/* helpers */
import { checkInclusion } from 'helpers/checkInclusion';
/* types */
import { PublishersGridComponentProps } from './PublishersGrid.types';
/* styles */
import s from './PublishersGrid.module.scss';
import { Col } from 'components/Col';
import { useRouter } from 'next/router';

export const PublishersGrid: FunctionComponent<PublishersGridComponentProps> = ({
    loading,
    publishers,
}) => {
    const { query } = useRouter();

    const filterPublishers = (publisher: Publisher) =>
        checkInclusion(publisher.title, String(query.query));

    if (loading) {
        return <PublisherBox.ShimmerGrid />;
    }
    return (
        <GenericGrid<Publisher>
            withRow
            items={publishers}
            filter={filterPublishers}
            renderItem={renderPublisher}
        />
    );
};

const renderPublisher = (publisher: Publisher) => (
    <Col xl={4} lg={4} md={6} className="mb-3">
        <PublisherBox.Component
            key={publisher.id}
            id={publisher.id}
            title={publisher.title}
            description={publisher.description}
            imageSrc={publisher.imageSrc}
            initialFollowingState={false}
            onFollow={publisherId => console.log(publisherId)}
        />
    </Col>
);
