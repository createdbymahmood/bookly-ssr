import { useMutation, MutationObserverOptions } from 'react-query';
/* services */
import apiService, { ApiServiceError } from 'services/api/apiService';
/* constants */
import API_URLS from 'constants/apiUrls';
import API_RESPONSE_MESSAGES from 'constants/apiResponseMessages';
import * as notice from 'helpers/notice';

export const likeBook = async (payload: Book.Mutation.Like.Variables) => {
    try {
        const { data } = await apiService.patch(API_URLS.like, payload);
        return data;
    } catch (error) {}
};

export const useLikeBook = (
    options: MutationObserverOptions<
        Book.Mutation.Like.Result,
        ApiServiceError,
        Book.Mutation.Like.Variables
    > = {}
) => {
    return useMutation(likeBook, {
        onSuccess: (_, variables) => {},
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.book.like.error);
        },
        ...options,
    });
};
