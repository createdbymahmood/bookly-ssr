import { useQuery, UseQueryOptions } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService, { ApiServiceError } from 'services/api/apiService';

export const readBooks = async () => {
    try {
        const { data } = await apiService.get<Book.Query.Result[]>(
            API_URLS.book
        );
        return data;
    } catch (error) {}
};

export const useBooks = (
    queryOptions: UseQueryOptions<
        Book.Query.Result[],
        ApiServiceError,
        Book.Query.Result[]
    >
) => {
    return useQuery<Book.Query.Result[], ApiServiceError>(
        API_URLS.book,
        readBooks,
        queryOptions
    );
};
