export const checkInclusion = (
    textWeWantToCheckInclusion: string,
    text: string | string[]
) => {
    if (!text?.length) {
        return true;
    }
    return textWeWantToCheckInclusion
        .toLowerCase()
        .trim()
        .includes(String(text).trim().toLowerCase());
};
