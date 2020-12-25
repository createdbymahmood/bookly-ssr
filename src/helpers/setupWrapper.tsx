import React, { FunctionComponent } from 'react';
/* modules */
import dotenv from 'dotenv';
import { render } from '@testing-library/react';
/* services */
import { RecoilService } from 'services/recoil/recoilService';
import { ReactQueryService } from 'services/react-query/reactQueryService';
import { ConfigProvider } from 'antd';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { NextRouter } from 'next/router';

dotenv.config();

export const mockRouter: NextRouter = {
    basePath: '',
    pathname: '/',
    route: '/',
    asPath: '/',
    query: {},
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined), // This one fixed it for me
    beforePopState: jest.fn(),
    events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
    },
    isFallback: false,
};
/**
 *
 * @param Component component that we want to test
 * @param props props of component that we want to test
 * @description setups the wrappers to prepare for testing
 */
export const setupWrapper = <BaseProps extends {}>(
    Component: FunctionComponent<BaseProps>,
    props: BaseProps
) =>
    render(
        <RecoilService>
            <RouterContext.Provider value={mockRouter}>
                <ReactQueryService>
                    <ConfigProvider direction="rtl">
                        <Component {...(props as BaseProps)} />
                    </ConfigProvider>
                </ReactQueryService>
            </RouterContext.Provider>
        </RecoilService>
    );
