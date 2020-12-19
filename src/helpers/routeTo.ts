import { createRoute } from 'next-typed-routes';
import { ROUTES } from 'constants/routes';

export const routeTo = {
    /* main routes */
    home: createRoute(ROUTES.home),
    users: createRoute(ROUTES.users),
    login: createRoute(ROUTES.login),
    register: createRoute(ROUTES.register),
    /* publisher routes */
    publishers: createRoute(ROUTES.publishers),
    publisher: (publisherId: string) =>
        createRoute(ROUTES.publisher, { publisherId }),
    /* profile routes */
    profile: createRoute(ROUTES.profile),
    profileLikedBooks: createRoute(ROUTES.profileLikedBooks),
    publicUserProfile: (userId: string) =>
        createRoute(ROUTES.publicUserProfile, { userId }),
    /* category routes */
    categories: createRoute(ROUTES.categories),
    category: (categoryId: string) =>
        createRoute(ROUTES.category, { categoryId }),
    /* bookd routes */
    book: (bookId: string) => createRoute(ROUTES.book, { bookId }),
    submitBook: createRoute(ROUTES.submitBook),
    updateBook: (bookId: string) => createRoute(ROUTES.updateBook, { bookId }),
};
