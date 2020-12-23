import { ComponentPropsWithoutRef, HTMLProps } from 'react';

export type CommonProps = {
    permission: Path<Permission>;
};

export type EditButtonProps = ComponentPropsWithoutRef<'img'> & CommonProps;
