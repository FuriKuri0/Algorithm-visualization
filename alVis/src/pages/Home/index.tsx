import type { ProSettings } from '@ant-design/pro-components';
import {
    LogoutOutlined,
  } from '@ant-design/icons';
import {
  ProConfigProvider,
  ProLayout,
  SettingDrawer,
} from '@ant-design/pro-components';
import { Dropdown } from 'antd';
import React, { useState} from 'react';
import defaultProps from './defaultProps';

import MyPageContainer from '../../components/MyPageContainer';
import { useNavigate } from 'react-router-dom';
import { usePath } from '../../utils/hook';
import Welcome from '../Welcome';
import './index.scss'
const Home = () => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    fixSiderbar: true,
    layout: 'mix',
    // splitMenus: true,
  });
  const navigate = useNavigate();

  const {pathName,changePath} = usePath()

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProConfigProvider hashed={false}>
        <ProLayout
          {...settings}
          {...defaultProps}
          prefixCls="my-prefix"
          location={{
            pathname:pathName,
          }}
          //取消展开功能
        //   siderMenuType="group"
          menu={{
            collapsedShowGroupTitle: true,
          }}
          //头像
          avatarProps={{
            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
            size: 'small',
            title: '管理员',
            render: (props, dom) => {
              return (
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: 'logout',
                        icon: <LogoutOutlined />,
                        label: <div onClick={() => { localStorage.clear(); navigate(''); }}>退出登录</div>,
                      },
                    ],
                  }}
                >
                  {dom}
                </Dropdown>
              );
            },
          }}
          //foot
          menuFooterRender={(props) => {
            if (props?.collapsed) return undefined;
            return (
              <div
                style={{
                  textAlign: 'center',
                  paddingBlockStart: 12,
                }}
              >
                <div>© 2023 Made by FuriKuri</div>
              </div>
            );
          }}
          //点击图标
          onMenuHeaderClick={() => changePath('/welcome')}
        //目录item
          menuItemRender={(item, dom) => (
            <div
              onClick={() => {
                changePath(item.path || '/welcome');
              }}
            >
              {dom}
            </div>
          )}
        >
            {/* 封装详细页 */}
            {pathName==='/welcome'?<Welcome/>:<MyPageContainer  />}

              {/* 设置菜单 */}
          <SettingDrawer
            pathname={pathName}
            enableDarkTheme
            getContainer={() => document.getElementById('test-pro-layout')}
            settings={settings}
            onSettingChange={(changeSetting) => {
              setSetting(changeSetting);
            }}
            disableUrlParams={false}
          />
        </ProLayout>
      </ProConfigProvider>
    </div>
  );
};
export default Home