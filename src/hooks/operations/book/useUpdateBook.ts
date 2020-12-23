import { QueryObserverOptions, useMutation } from 'react-query';
import API_URLS from 'constants/apiUrls';
import apiService from 'services/api/apiService';

export const updateBook = async (book: Book.Mutation.Update.Variables) => {
    try {
        const { data } = await apiService.patch(API_URLS.book, book);
        return data;
    } catch (error) {}
};

export const useUpdateBook = (options: QueryObserverOptions = {}) => {
    return useMutation(updateBook, options);
};
