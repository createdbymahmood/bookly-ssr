import { QueryOptions, useMutation } from 'react-query';
import apiService from 'services/api/apiService';
import API_URLS from 'constants/apiUrls';
import API_RESPONSE_MESSAGES from 'constants/apiResponseMessages';
/* helpers */
import * as notice from 'helpers/notice';

export const createComment = (data: Comment.Create.Variables) => {
    return apiService.post<unknown, Comment.Base>(API_URLS.comments, data);
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
