import { FAKE_IMAGE_API_CONFIG } from 'constants/config';
const { size, apiUrl, key } = FAKE_IMAGE_API_CONFIG;
import { uniqueId } from './uniqueId';

export const generateFakeImageUrl = (
    keyword: string = key,
    imageSize: string = size
): string => {
    return `${apiUrl}/${size}?random=${uniqueId()}`;
};
