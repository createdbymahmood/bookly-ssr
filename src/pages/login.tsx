import { Fragment } from 'react';
/* components */
import { LoginForm } from 'components/LoginForm';
import { LoginFormPicture } from 'components/LoginFormPicture';
import { Row } from 'components/Row';
import { Col } from 'components/Col';
import { Head } from 'components/Head';
/* types */
import { NextPage } from 'next';
/* modules */
import { useLogin } from 'hooks/operations';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';

function Login() {
    const { mutate: login, isLoading: loginIsLoading } = useLogin();

    return (
        <Fragment>
            <Head title="ورود">
                <meta name="description" content="صفحه ورود" />
            </Head>
            <Row className="align-items-center justify-content-between">
                <Col lg={4} className="order-1 order-lg-0">
                    <LoginForm loading={loginIsLoading} onSubmit={login} />
                </Col>
                <Col lg={6}>
                    <LoginFormPicture />
                </Col>
            </Row>
        </Fragment>
    );
}

export default injectLayoutConfig('login')(Login);
// export default Login;
