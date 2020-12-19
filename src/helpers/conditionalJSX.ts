import { ComponentType, Fragment } from "react";

export const conditionalJSX = (
    condition: boolean,
    component: ComponentType,
    placeholder: ComponentType = Fragment
) => {
    return condition ? component : placeholder;
};
