import React, { FC } from 'react';
/* components */
import NextImage, { ImageProps } from 'next/image';
/* modules */
import clsx from 'classnames';
/* types */
import { ImageComponentProps } from './Image.types.d';
/* styles */
import s from './Image.module.scss';
import { injectDefaultProps } from 'components/hoc/inject';
import { DEFAULT_IMAGE_ALT } from 'constants/config';

const Image = ({ className, ...restProps }: ImageProps) => {
    return <img className={clsx(s.img, className)} {...restProps} />;
};

export default injectDefaultProps<ImageComponentProps, 'alt'>(Image, {
    alt: DEFAULT_IMAGE_ALT,
});
