import { FAKE_IMAGE_API_CONFIG } from 'constants/config';
const { size, apiUrl, key } = FAKE_IMAGE_API_CONFIG;

export const generateFakeImageUrl = (
    keyword: string = key,
    imageSize: string = size
): string => {
    return require('assets/images/book.jpg');
};

console.log(Image);
