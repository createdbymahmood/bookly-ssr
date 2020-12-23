/* services */
import apiService from 'services/api/apiService';
/* constants */
import API_RESPONSE_MESSAGES from 'constants/apiResponseMessages';
import API_URLS from 'constants/apiUrls';
/* react query */
import { MutationObserverOptions, useMutation } from 'react-query';
/* helpers */
import * as notice from 'helpers/notice';

export const deleteComment = async (
    payload: Comment.Mutation.Delete.Variables
) => {
    try {
        const { data } = await apiService.delete(API_URLS.comments, {
            params: payload,
        });
        return data;
    } catch (error) {}
};

export const useDeleteComment = () => {
    return useMutation(deleteComment, {
        onSuccess: () => {
            notice.success(API_RESPONSE_MESSAGES.comment.delete.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.comment.delete.error);
        },
    });
};
