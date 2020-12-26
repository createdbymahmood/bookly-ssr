import { Fragment } from 'react';
/* components */
import { UserBox } from 'components/UserBox';
import { Row } from 'components/Row';
import { Col } from 'components/Col';
import { BooksGrid } from 'components/Book';
import { Head } from 'components/Head';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';
/* modules */
import { readPublicUserProfile, usePublicUserProfile } from 'hooks';
/* helpers */
import { mock } from 'helpers/mock';
import { randomDate } from 'helpers/randomDate';
import { generateFakeImageUrl } from 'helpers/generateFakeImageUrl';
/* types */
import { GetServerSideProps, NextPage } from 'next';

type Props = {
    userId: string;
    initialPublicUserProfile: object;
};

const UserProfile: NextPage<Props> = ({ userId, initialPublicUserProfile }) => {
    const { data } = usePublicUserProfile(userId, {
        initialData: initialPublicUserProfile,
    });

    return (
        <Fragment>
            <Head title="پروفایل ">
                <meta name="description" content="پروفایل اختصاصی کاربر" />
            </Head>
            <Row>
                <Col md={5} lg={4}>
                    <UserBox
                        name="محمود باقری"
                        role="admin"
                        biography="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت"
                        profileImage={generateFakeImageUrl()}
                        registerDate={randomDate(new Date('10/10/2010'))}
                    />
                </Col>
                <Col md={7} lg={8}>
                    <BooksGrid books={mock('books', 12)} />
                </Col>
            </Row>
        </Fragment>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const userId = query.userId;
    const profile = await readPublicUserProfile(undefined, userId as string);
    return {
        props: {
            initialProfile: profile,
            userId,
        },
    };
};

export default injectLayoutConfig('publicUserProfile')(UserProfile);
