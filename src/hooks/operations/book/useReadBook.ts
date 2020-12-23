import { useQuery } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService, { AxiosRequestConfig } from 'services/api/apiService';

export const readBook = async (_: unknown, bookId: string) => {
    const requestConfig: AxiosRequestConfig = {
        params: { bookId },
    };
    try {
        const { data } = await apiService.get(API_URLS.book, requestConfig);
        return data;
    } catch (error) {}
};

export const useSingleBook = (bookId: string, config) => {
    return useQuery(
        [API_URLS.book, bookId],
        () => readBook(undefined, bookId),
        config
    );
};
