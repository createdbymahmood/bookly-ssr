import { Fragment } from 'react';
/* components */
import { ProfileForm } from 'components/Profile';
import { readProfile, useUpdateProfile } from 'hooks/operations';
import { GetServerSideProps, NextPage } from 'next';
import { Head } from 'components/Head';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';
import { Profile } from 'types/profile';

type Props = {
    initialProfile: Profile.Base;
};

const ProfilePage: NextPage<Props> = ({ initialProfile }) => {
    const { mutate: updateProfile, isLoading } = useUpdateProfile({
        initialData: initialProfile,
    });

    return (
        <Fragment>
            <Head title="پروفایل">
                <meta
                    name="description"
                    content="اطلاعات کاربری مثل نام، نام خانوادگی و بیوگرافی و ..."
                />
            </Head>
            <ProfileForm loading={isLoading} onSubmit={updateProfile} />
        </Fragment>
    );
};

export const getServerSideProps: GetServerSideProps = async ({}) => {
    const profile = await readProfile();
    return {
        props: {
            initialProfile: profile,
        },
    };
};

export default injectLayoutConfig('profile')(ProfilePage);
