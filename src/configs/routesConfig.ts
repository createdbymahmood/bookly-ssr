type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};

export type LayoutConfig = DeepPartial<{
    layout: {
        include: boolean;
        withSearchbar: boolean;
    };
}>;

export const routeConfigs = {
    home: {
        layout: { include: true, withSearchbar: true },
    },
    login: {
        layout: { include: true, withSearchbar: false },
    },
    register: {
        layout: { include: true, withSearchbar: false },
    },
    book: {
        layout: { include: true, withSearchbar: false },
    },
    publisher: {
        layout: { include: true, withSearchbar: false },
    },
    publishers: {
        layout: { include: true, withSearchbar: true },
    },
    publicUserProfile: {
        layout: { include: true, withSearchbar: false },
    },
    profile: {
        layout: { include: true, withSearchbar: false },
    },
    profileLikedBooks: {
        layout: { include: true, withSearchbar: false },
    },
    user: {
        layout: { include: true, withSearchbar: false },
    },
    users: {
        layout: { include: true, withSearchbar: false },
    },
    categories: {
        layout: { include: true, withSearchbar: true },
    },
    category: {
        layout: { include: true, withSearchbar: false },
    },
    submitBook: {
        layout: { include: true, withSearchbar: false },
    },
};
