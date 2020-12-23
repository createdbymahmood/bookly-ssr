/* modules */
import { useMutation, UseMutationOptions } from 'react-query';
/* constants */
import API_URLS from 'constants/apiUrls';
import API_RESPONSE_MESSAGES from 'constants/apiResponseMessages';
/* service */
import apiService, {
    ApiServiceError,
    AxiosRequestConfig,
} from 'services/api/apiService';
/* helpers */
import * as notice from 'helpers/notice';

export const deleteBook = async ({
    bookId,
}: Book.Mutation.Delete.Variables) => {
    try {
        const requestConfig: AxiosRequestConfig = {
            params: bookId,
        };
        const { data } = await apiService.delete<Book.Mutation.Delete.Result>(
            API_URLS.book,
            requestConfig
        );
        return data;
    } catch (error) {}
};

export const useDeleteBook = (
    options: UseMutationOptions<
        Book.Mutation.Delete.Result,
        ApiServiceError,
        Book.Mutation.Delete.Variables
    > = {}
) => {
    return useMutation(deleteBook, {
        onMutate: deletedBook => {},
        onError: err => {
            notice.error(API_RESPONSE_MESSAGES.book.delete.error);
        },
        onSuccess: newComment => {
            notice.success(API_RESPONSE_MESSAGES.book.delete.success);
        },
        ...options,
    });
};
