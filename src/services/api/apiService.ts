import axios from 'axios';

import { applyAuthInterceptor } from './interceptors/auth';
import { applyAccessTokenRevalidator } from './interceptors/tokenRevalidator';
import { applyErrorHandler } from './interceptors/errorHandler';
import { applyResponseNormalizer } from './interceptors/responseNormalizer';
// import { applyNprogress } from './interceptors/nprogress';
import { applyLogger } from './interceptors/logger';
import { appleFormDataHeaderTransformer } from './interceptors/formDataHeaderTransformer';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const apiService = axios.create({
    baseURL: publicRuntimeConfig.API_URL,
});

applyAuthInterceptor(apiService);
applyAccessTokenRevalidator(apiService);
applyErrorHandler(apiService);
applyResponseNormalizer(apiService);
// applyNprogress(apiService);
applyLogger(apiService);
appleFormDataHeaderTransformer(apiService);

export * from 'axios';
export default apiService;
