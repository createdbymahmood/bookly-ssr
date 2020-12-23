import { QueryOptions, useMutation } from 'react-query';
import apiService from 'services/api/apiService';
import API_URLS from 'constants/apiUrls';
import API_RESPONSE_MESSAGES from 'constants/apiResponseMessages';
/* helpers */
import * as notice from 'helpers/notice';

export const createComment = async (payload: Comment.Create.Variables) => {
    try {
        const { data } = await apiService.post<Comment.Base>(
            API_URLS.comments,
            payload
        );
        return data;
    } catch (error) {}
};

export const useCreateComment = (config?: QueryOptions) =>
    useMutation(createComment, {
        onSuccess: () => {
            notice.success(API_RESPONSE_MESSAGES.comment.create.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.comment.create.error);
        },
        ...config,
    });
