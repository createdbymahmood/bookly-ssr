import React, { Fragment } from 'react';
/* components */
import { RegisterForm } from 'components/RegisterForm';
import { useRegister } from 'hooks/operations';
import { RegisterFormPicture } from 'components/RegisterFormPicture';
import { Row } from 'components/Row';
import { Col } from 'components/Col';
import { NextPage } from 'next';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';
import { Head } from 'components/Head';

const Register: NextPage = () => {
    const { mutate: register, isLoading: registerLoading } = useRegister();

    return (
        <Fragment>
            <Head title="ثبت نام">
                <meta name="description" content="صفحه ثبت نام در وب سایت :)" />
            </Head>
            <Row className="align-items-center justify-content-between">
                <Col lg={4} className="order-1 order-lg-0">
                    <RegisterForm
                        loading={registerLoading}
                        onSubmit={register}
                    />
                </Col>
                <Col lg={6}>
                    <RegisterFormPicture />
                </Col>
            </Row>
        </Fragment>
    );
};

export default injectLayoutConfig('register')(Register);
