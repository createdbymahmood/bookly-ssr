/* services */
import apiService, { AxiosRequestConfig } from 'services/api/apiService';
/* constants */
import API_URLS from 'constants/apiUrls';
import API_RESPONSE_MESSAGES from 'constants/apiResponseMessages';
/* modules */
import { useMutation } from 'react-query';
/* helpers */
import * as notice from 'helpers/notice';

export const deleteUser = async ({
    userId,
}: User.Mutation.Delete.Variables) => {
    const requestConfig: AxiosRequestConfig = {
        params: { userId },
    };
    try {
        const { data } = await apiService.delete(API_URLS.user, requestConfig);
        return data;
    } catch (error) {}
};

export const useDeleteUser = (options: object) => {
    return useMutation(deleteUser, {
        onSuccess: () => {
            notice.success(API_RESPONSE_MESSAGES.user.delete.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.user.delete.error);
        },
        ...options,
    });
};
