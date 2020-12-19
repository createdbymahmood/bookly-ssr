import React, { FunctionComponent } from 'react';
import { message } from 'antd';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';

const queryClient = new QueryClient();

export const ReactQueryService: FunctionComponent = props => {
    const { children } = props;

    return <QueryClientProvider client={queryClient}></QueryClientProvider>;
};
