import { Fragment } from 'react';
/* components */
import { Row } from 'components/Row';
import { Col } from 'components/Col';
import { PublisherBox } from 'components/Publisher';
import { BooksGrid } from 'components/Book';
import { DescriptionBox } from 'components/DescriptionBox';
import { uniqueId } from 'helpers/uniqueId';
import { readPublisher, useSinglePublisher } from 'hooks';
import { mock } from 'helpers/mock';
import { generateFakeImageUrl } from 'helpers/generateFakeImageUrl';
import { GetServerSideProps, NextPage } from 'next';
import { Head } from 'components/Head';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';

type Props = {
    publisherId: string;
};
const Publisher: NextPage<Props> = ({ publisherId }) => {
    const { data } = useSinglePublisher(publisherId);

    return (
        <Fragment>
            <Head title="صفحه ناشر">
                <meta name="description" content="صفحه اختصاصی ناشر" />
            </Head>

            <Row className="mb-3">
                <Col md={6} lg={3} className="mb-3 ">
                    <PublisherBox.Component
                        id={uniqueId()}
                        imageSrc={generateFakeImageUrl()}
                        description="توضیحات پابلیشر"
                        title="ققنوس"
                    />
                </Col>
                <Col lg={9}>
                    <DescriptionBox
                        className="mb-3"
                        title="مشخصات ناشر"
                        description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
                    />
                    <BooksGrid books={mock<Book.Base>('books', 4)} />
                </Col>
            </Row>
        </Fragment>
    );
};
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const publisherId = query.publisherId;
    const categories = await readPublisher(undefined, publisherId as string);
    return {
        props: {
            initialCategories: categories,
            publisherId,
        },
    };
};

export default injectLayoutConfig('publisher')(Publisher);
