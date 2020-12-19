import React, { FunctionComponent } from "react";
/* components */
import { Form } from "antd";
import { Input } from "components/Input";
import { Button } from "components/Button";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* constants */
import { LOGIN_FORM_VALIDATION_RULES } from "constants/validationRules";
/* types */
import { LoginFormComponentProps } from "./LoginForm.types";
/* styles */
import s from "./LoginForm.module.scss";

export const LoginForm: FunctionComponent<LoginFormComponentProps> = ({
    onSubmit,
    loading = false,
}) => {
    return (
        <Form
            layout="vertical"
            name="basic"
            onFinish={onSubmit}
            style={{ width: "100%" }}
        >
            <Form.Item
                label="نام کاربری"
                name="username"
                rules={LOGIN_FORM_VALIDATION_RULES.username}
            >
                <Input.Text />
            </Form.Item>

            <Form.Item
                label="رمز عبور"
                name="password"
                rules={LOGIN_FORM_VALIDATION_RULES.password}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button
                    loading={loading}
                    size="large"
                    type="primary"
                    htmlType="submit"
                    className="mt-4"
                >
                    ورود
                </Button>
            </Form.Item>
        </Form>
    );
};
