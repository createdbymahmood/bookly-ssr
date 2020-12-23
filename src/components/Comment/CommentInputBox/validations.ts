import { ValidationRuleType } from 'types/global';

export const BOOK_COMMENT_VALIDATION_RULES: ValidationRuleType = {
    comment: [
        {
            required: true,
            message: 'متن نظر نمی تواند خالی باشد :(',
        },
    ],
};
