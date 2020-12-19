/* services */
import apiService from "services/api/apiService";
/* constants */
import API_RESPONSE_MESSAGES from "constants/apiResponseMessages";
import API_URLS from "constants/apiUrls";
/* react query */
import { useMutation } from "react-query";
/* helpers */
import * as notice from "helpers/notice";

export type DeleteCommentMutationVariables = {
    commentId: string;
};
export const deleteComment = ({
    commentId,
}: DeleteCommentMutationVariables) => {
    return apiService.delete(API_URLS.comments, { params: { commentId } });
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
