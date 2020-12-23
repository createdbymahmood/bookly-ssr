import { Fragment } from 'react';
/* components */
import { ProfileForm } from 'components/Profile';
import { readProfile, useUpdateProfile } from 'hooks';
import { GetServerSideProps } from 'next';
import { Head } from 'components/Head';
import { injectLayoutConfig } from 'components/hoc/injectLayoutConfig';
import { Profile } from 'types/profile';

type PageProps = { initialProfile: Profile.Base };

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
    const profile = await readProfile();
    return {
        props: {
            initialProfile: profile,
        },
    };
};

function ProfilePage({ initialProfile }: PageProps) {
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
}

export default injectLayoutConfig('profile')(ProfilePage);
