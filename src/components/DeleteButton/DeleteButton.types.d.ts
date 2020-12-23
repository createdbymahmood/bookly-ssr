import { PopconfirmProps } from 'antd/lib/popconfirm';
import { Path } from 'types/global';

export type DeleteButtonProps = PopconfirmProps & {
    permission: Path<Permission>;
    loading?: boolean;
};
