import { ParsedQuery } from 'query-string';

export const checkInclusion = (
    textWeWantToCheckInclusion: string,
    text: string
) => {
    if (!text) {
        return true;
    }
    if (Array.isArray(text)) {
        return true;
    }
    return textWeWantToCheckInclusion
        .toLowerCase()
        .trim()
        .includes(text.trim().toLowerCase());
};
