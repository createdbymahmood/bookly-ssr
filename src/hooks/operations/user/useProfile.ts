import { QueryObserverOptions, useQuery } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService from 'services/api/apiService';

export const readProfile = async () => {
    try {
        const { data } = await apiService.get(API_URLS.profile);
        return data;
    } catch (error) {
        return {};
    }
};

export const useProfile = (options: QueryObserverOptions = {}) => {
    return useQuery(API_URLS.profile, readProfile, options);
};
