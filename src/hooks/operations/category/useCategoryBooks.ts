import { QueryOptions, useQuery } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService, { AxiosRequestConfig } from 'services/api/apiService';

export const readCategoryBooks = async (_: unknown, categoryId: string) => {
    const requestConfig: AxiosRequestConfig = {
        params: { categoryId },
    };
    try {
        const { data } = await apiService.get(API_URLS.category, requestConfig);
        return data;
    } catch (error) {}
};

export const useCategoryBooks = (categoryId: string, options: QueryOptions) => {
    return useQuery(
        [API_URLS.category, categoryId],
        () => readCategoryBooks(undefined, categoryId),
        options
    );
};
