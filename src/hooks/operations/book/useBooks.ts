import { QueryConfig, useQuery } from "react-query";
import API_URLS from "constants/apiUrls";
import apiService, { ApiServiceError } from "services/api/apiService";

export const readBooks = async () => {
    const { data } = await apiService.get(API_URLS.book);
    return data;
};

export const useBooks = (
    queryConfig?: QueryConfig<Book.Query.Result, ApiServiceError>
) => {
    return useQuery<Book.Query.Result, ApiServiceError>(
        API_URLS.book,
        readBooks,
        queryConfig
    );
};
