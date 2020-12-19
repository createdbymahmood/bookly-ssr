import React, { FC } from "react";
/* components */
import { Text } from "components/Text";
import { Link, RouterLinkProps } from "components/Link";
/* modules */
import clsx from "classnames";
/* helpers */
import { routeTo } from "helpers/routeTo";
/* assets */
import { ReactComponent as EmptyGridPicture } from "assets/icons/empty.svg";
/* types */
import { EmptyGridProps } from "./EmptyGrid.types";
/* styles */
import s from "./EmptyGrid.module.scss";

export const EmptyGrid: FC<EmptyGridProps> = ({ className, query }) => {
    return (
        <div className={clsx(s.box, className)}>
            <EmptyGridPicture />
            <Text className={clsx(s.title, "mt-3")}>
                متاسفیم! جست و جوی کلمه ی "{query}" نتیجه ای نداشت! 😁
            </Text>{" "}
            <Text className={clsx(s.description, "mt-2")}>
                برای بازگشت به خانه <Home /> {"  "}
                کلیک کنید
            </Text>
        </div>
    );
};

const Home = () => (
    <Link<RouterLinkProps>
        permission="routes.home"
        to={routeTo("home")}
        className={s.here}
    >
        اینجا
    </Link>
);
