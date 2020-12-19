import React from "react";
import { routeTo } from "helpers/routeTo";
import { Link, RouterLinkProps } from "components/Link";
import { PopConfirm } from "components/PopConfirm";
import { Button } from "components/Button";
import { BaseUsersTableComponentProps } from "./UsersTable.types";

type RenderColumnNameProps<T> = {
    name: any;
    record: T & { id: string };
    index: number;
};

export function RenderColumnName<T>({
    name,
    record,
}: RenderColumnNameProps<T>): JSX.Element {
    return (
        <Link<RouterLinkProps>
            permission="routes.user"
            to={routeTo("publicUserProfile", {
                userId: record.id || 0,
            })}
        >
            {name}
        </Link>
    );
}

type RenderActionsColumnProps<T> = RenderColumnNameProps<T> & {
    onDeleteUser: BaseUsersTableComponentProps["onDeleteUser"];
};

export function RenderActionsColumn<T>({
    record,
    name,
    onDeleteUser,
}: RenderActionsColumnProps<T>): JSX.Element {
    return (
        <PopConfirm
            title="برای حذف این کاربر مطمئن هستید ؟ "
            onConfirm={() => onDeleteUser({ userId: record.id })}
        >
            <Button danger>حذف کاربر</Button>
        </PopConfirm>
    );
}
