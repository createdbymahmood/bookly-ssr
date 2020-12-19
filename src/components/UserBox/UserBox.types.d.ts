import { HTMLProps } from "react";
import { RoleUnionType } from "services/recoil/user/atoms";

export type UserBoxTypes = {
    name: string;
    role: RoleUnionType;
    biography: string;
    profileImage: string;
    loading?: boolean;
    registerDate: Date;
};

export type UserBoxProps = HTMLProps<HTMLDivElement> & UserBoxTypes;
export type { RoleUnionType };
