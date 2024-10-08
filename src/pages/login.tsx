import { Fragment } from 'react';
/* components */
import { LoginForm } from 'components/LoginForm';
import { LoginFormPicture } from 'components/LoginFormPicture';
import { Row } from 'components/Row';
import { Col } from 'components/Col';
import { Head } from 'components/Head';
import { injectAuthConfig } from 'components/hoc/injectAuthConfig';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';
/* types */
/* modules */
import { useLogin } from 'hooks';
import { compose } from 'helpers/compose';

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

export default compose(
    injectLayoutConfig('login'),
    injectAuthConfig('login')
)(Login);
