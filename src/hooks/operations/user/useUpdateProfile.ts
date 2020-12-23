/* modules */
import { QueryObserverOptions, useMutation } from 'react-query';
/* services */
import apiService from 'services/api/apiService';
/* helpers */
import * as notice from 'helpers/notice';
/* constants */
import API_URLS from 'constants/apiUrls';
import API_RESPONSE_MESSAGES from 'constants/apiResponseMessages';

export const updateProfile = async profile => {
    try {
        const { data } = await apiService.patch(API_URLS.profile, profile);
        return data;
    } catch (error) {}
};

export const useUpdateProfile = () => {
    return useMutation(updateProfile, {
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.profile.update.error);
        },
        onSuccess: () => {
            notice.success(API_RESPONSE_MESSAGES.profile.update.success);
        },
    });
};
