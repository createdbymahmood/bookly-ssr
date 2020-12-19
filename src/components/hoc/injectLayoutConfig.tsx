import React from 'react';
import _ from 'lodash';
/* components */
import { conditionalJSX } from 'helpers/conditionalJSX';
import { Layout } from 'components/Layout';
import { routeConfigs } from 'configs/routesConfig';

export function injectLayoutConfig(key: keyof typeof routeConfigs) {
    return function <T>(Component: React.ComponentType<T>) {
        return function (props: T): JSX.Element {
            const config = _.get(routeConfigs, key);
            const { layout } = config;
            const LayoutTag = conditionalJSX(layout?.include, Layout);
            const lyProps = {
                withSearchbar: layout.withSearchbar,
            };
            return (
                <LayoutTag {...lyProps}>
                    <Component {...props} />
                </LayoutTag>
            );
        };
    };
}
