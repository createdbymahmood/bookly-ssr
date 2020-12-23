import { QueryObserverOptions, useQuery } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService, { AxiosResponse } from 'services/api/apiService';

export const readBooks = async () => {
    try {
        const { data } = await apiService.get<Book.Query.Result[]>(
            API_URLS.book
        );

        return data;
    } catch (error) {}
};

export const useBooks = (queryOptions: QueryObserverOptions = {}) => {
    return useQuery(API_URLS.book, readBooks, queryOptions);
};
