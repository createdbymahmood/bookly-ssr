/* constants */
import API_URLS from 'constants/apiUrls';
import API_RESPONSE_MESSAGES from 'constants/apiResponseMessages';
/* modules */
import { QueryObserverOptions, useMutation } from 'react-query';
/* helpers */
import * as notice from 'helpers/notice';
import { transformObjectToFormData } from 'helpers/transformObjectToFormData';
/* services */
import apiService from 'services/api/apiService';

export const submitBook = async (data: Book.Mutation.Submit.Variables) => {
    try {
        const payload = transformObjectToFormData(data);
        const { data: response } = await apiService.post(
            API_URLS.book,
            payload
        );
        return response;
    } catch (error) {}
};

export const useSubmitBook = (options: QueryObserverOptions = {}) => {
    return useMutation(submitBook, {
        onSuccess: (_, newBook) => {
            /* update cache and push new data to books */
            notice.success(API_RESPONSE_MESSAGES.book.submit.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.book.submit.error);
        },
        ...options,
    });
};
