import React, { FC, Fragment } from 'react';
/* components */
import { UsersTable } from 'components/UsersTable';
import { useDeleteUser } from 'hooks';
import { Head } from 'components/Head';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';

const Users: FC = props => {
    const { mutate: deleteUser } = useDeleteUser();

    return (
        <Fragment>
            <Head title="لیست کاربران">
                <meta name="description" content="صفحه اختصاصی دسته بندی" />
            </Head>
            <UsersTable onDeleteUser={deleteUser} />
        </Fragment>
    );
};
export default injectLayoutConfig('users')(Users);
