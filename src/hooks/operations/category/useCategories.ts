import { QueryObserverOptions, useQuery } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService from 'services/api/apiService';

export const readCategories = async () => {
    try {
        const { data } = await apiService.get(API_URLS.categories);
        return data;
    } catch (error) {}
};

export const useCategories = (options: QueryObserverOptions = {}) => {
    return useQuery(API_URLS.categories, readCategories, options);
};
