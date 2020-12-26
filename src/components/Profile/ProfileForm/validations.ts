import { ValidationRuleType } from 'types/global';

export const PROFILE_FORM_RULES: ValidationRuleType = {
    name: [{ required: true }],
    profileImage: [{ len: 2000 }],
    biography: [],
};
