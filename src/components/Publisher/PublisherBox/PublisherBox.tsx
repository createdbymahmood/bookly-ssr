import React, { FC } from "react";
/* components */
import { Image } from "components/Image";
import { Button } from "components/Button";
import { Text } from "components/Text";
/* modules */
import clsx from "classnames";
import { Link, RouterLinkProps } from "components/Link";
/* helpers */
import { conditionalText } from "helpers/conditionalText";
import { routeTo } from "helpers/routeTo";
/* assets */
import PublisherImage from "assets/images/book.jpg";
/* types */
import { PublisherBoxComponentProps } from "./PublisherBox.types";
/* styles */
import s from "./PublisherBox.module.scss";
import { useFollowPublisher } from "hooks";

const defaultOnFollow = (id: string) => {
    console.log(id);
};

export const PublisherBox: FC<PublisherBoxComponentProps> = props => {
    const {
        id: publisherId,
        className,
        title,
        description,
        initialFollowingState = false,
        imageSrc = PublisherImage,
        onFollow = defaultOnFollow,
        ...restProps
    } = props;

    return (
        <div className={clsx(s.box, `shadow`, className)} {...restProps}>
            <PublisherBoxImage id={publisherId} imageSrc={imageSrc} />

            <PublisherBoxContent
                id={publisherId}
                title={title}
                description={description}
                initialFollowingState={initialFollowingState}
            />
        </div>
    );
};

const PublisherBoxImage = ({
    id: publisherId,
    imageSrc,
}: Pick<PublisherBoxComponentProps, "imageSrc" | "id">) => {
    return (
        <Link<RouterLinkProps>
            permission="routes.publisher"
            to={routeTo("publisher", { publisherId })}
        >
            <div className="p-1">
                <Image className={s.image} src={imageSrc} />
            </div>
        </Link>
    );
};

export const PublisherBoxContent = ({
    title,
    description,
    initialFollowingState = false,
    id: publisherId,
}: Pick<
    PublisherBoxComponentProps,
    "title" | "initialFollowingState" | "description" | "id"
>) => {
    return (
        <div className={s.content}>
            <Text className={s.title}>{title}</Text>
            <Text className={s.description}>{description}</Text>
            <PublisherBoxFollowButton
                id={publisherId}
                initialFollowingState={initialFollowingState}
            />
        </div>
    );
};

const PublisherBoxFollowButton = ({
    id: publisherId,
    initialFollowingState = false,
}: Pick<PublisherBoxComponentProps, "initialFollowingState" | "id">) => {
    const [
        follow,
        { isLoading: followPublisherIsLoading },
    ] = useFollowPublisher();

    const SubscriptionTextButtonText = conditionalText(
        initialFollowingState,
        "لغو سابسکریپشن",
        "دنبال کردن"
    );

    return (
        <Button
            type={initialFollowingState ? "dashed" : "primary"}
            className="mt-4"
            danger={initialFollowingState}
            block
            size="large"
            onClick={() => follow({ publisherId })}
            loading={followPublisherIsLoading}
        >
            {SubscriptionTextButtonText}
        </Button>
    );
};
