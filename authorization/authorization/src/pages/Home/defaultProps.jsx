import { UserOutlined,  OrderedListOutlined,InfoOutlined,AuditOutlined ,UserAddOutlined} from '@ant-design/icons';
import React from 'react';
const defaultProps = {
    title: '输入法授权平台',
    logo: 'http://10.252.40.1:8888/static/img/logo.ico',
    route: {
        path: '/',
        routes: [
            {
                path: '/userMsg',
                name: '用户信息',
                icon: <InfoOutlined />,
                access: 'canAdmin',
            },
            {
                name: '授权列表',
                icon: <OrderedListOutlined />,
                path: '/auList',
            },    {
                name: '用户列表',
                icon: <UserOutlined />,
                path: '/userList',
            }, 
        ],
    },
    location: {
        pathname: '/',
    },
};
export default defaultProps;