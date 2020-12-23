import { HTMLProps, SVGProps } from 'react';

export type BaseLikeButtonProps = {
    initialLikeState: boolean;
    loading: boolean;
    permission: Path<Permission>;
    onChange: (likeState: boolean) => void;
};

export type LikeButtonComponentProps = Omit<
    JSX.IntrinsicElements['img'],
    keyof BaseLikeButtonProps
> &
    BaseLikeButtonProps;
