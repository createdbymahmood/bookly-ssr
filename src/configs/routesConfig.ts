type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};

export type LayoutConfig = DeepPartial<{
    layout: {
        include: boolean;
        withSearchbar: boolean;
    };
    accessKey: string;
}>;

export const routeConfigs = {
    home: {
        layout: { include: true, withSearchbar: true },
        accessKey: 'home',
    },
    login: {
        layout: { include: true, withSearchbar: false },
        accessKey: 'routes.home',
    },
    register: {
        layout: { include: true, withSearchbar: false },
        accessKey: 'routes.register',
    },
    book: {
        layout: { include: true, withSearchbar: false },
        accessKey: 'routes.book',
    },
    publisher: {
        layout: { include: true, withSearchbar: false },
        accessKey: 'routes.publisher',
    },
    publishers: {
        layout: { include: true, withSearchbar: true },
        accessKey: 'routes.publishers',
    },
    publicUserProfile: {
        layout: { include: true, withSearchbar: false },
        accessKey: 'routes.publicUserProfile',
    },
    profile: {
        layout: { include: true, withSearchbar: false },
        accessKey: 'routes.home',
    },
    profileLikedBooks: {
        layout: { include: true, withSearchbar: false },
        accessKey: 'routes.profileLikedBooks',
    },
    user: {
        layout: { include: true, withSearchbar: false },
        accessKey: 'routes.user',
    },
    users: {
        layout: { include: true, withSearchbar: false },
        accessKey: 'routes.users',
    },
    categories: {
        layout: { include: true, withSearchbar: true },
        accessKey: 'routes.categories',
    },
    category: {
        layout: { include: true, withSearchbar: false },
        accessKey: 'routes.category',
    },
    submitBook: {
        layout: { include: true, withSearchbar: false },
        accessKey: 'routes.submitBook',
    },
};
