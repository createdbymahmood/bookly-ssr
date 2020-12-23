import { ValidationRuleType } from 'types/global';

export const LOGIN_FORM_VALIDATION_RULES: ValidationRuleType = {
    username: [
        {
            required: true,
            message: 'نام کاربری را وارد کنید',
        },
    ],
    password: [
        {
            required: true,
            message: 'رمز عبور را وارد کنید',
        },
    ],
};
