import React, { useEffect, useMemo, useState, } from 'react'
import { Input, theme, Button, Upload, message, Form, Modal, Spin } from 'antd';
import {
  SearchOutlined, UploadOutlined
} from '@ant-design/icons';
import {
  PageContainer,
  ProCard,
} from '@ant-design/pro-components';
import SearchInputList from './SearchInputList';
import MyModel from '../MyModel';
import AuList from '../AuList';
import UserList from '../UserList'
import UserInfo from '../UserInfo';
import { useModel } from '../../utils';
const MyPageContainer = ({ pathname }:{[key:string]:string}) => {
  const [searchValue, setSearchValue] = useState('')
  const {setType} = useModel()
  const which = useMemo(()=>{
    return pathname.split('/')[1]
  },[pathname])
  // eslint-disable-next-line @typescript-eslint/ban-types
  const Operate = ({ which,  setSearchValue }:{which:string,setSearchValue:Function,}) => {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
        }}
      >
        <SearchInput placeholder={SearchInputList[which]} setSearchValue={setSearchValue} />
        {which === 'auList' ?
            <Button onClick={() => setType(0)}>激活授权</Button>:
          which === 'userList' ?
            <Button onClick={() => setType(1)}>添加用户</Button>
            :''
        }

      </div>
    );
  };
  // eslint-disable-next-line @typescript-eslint/ban-types
  const SearchInput = ({ placeholder, setSearchValue }:{placeholder:string,setSearchValue:Function}) => {
    const { token } = theme.useToken();
    return (
      <div
        key="SearchOutlined"
        aria-hidden
        style={{
          display: 'flex',
          alignItems: 'center',
          marginInlineEnd: 24,
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <Input
          style={{
            borderRadius: 4,
            marginInlineEnd: 12,
            backgroundColor: token.colorBgTextHover,
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') { setSearchValue(e.target.value) }
          }}
          onChange={(e) => {
            if (!e.target.value) { setSearchValue('') }
          }}
          prefix={
            <SearchOutlined
              style={{
                color: token.colorTextLightSolid,
              }}
            />
          }
          placeholder={placeholder}
          bordered={false}
        />
      </div>
    );
  };
  return (
    <div
      style={{
        width: '100%',
      }}
    >
        <MyModel />
      <PageContainer
        token={{
          paddingInlinePageContainerContent: 40,
        }}
        
        extra={which === 'userMsg'?'':<Operate which={which} setSearchValue={setSearchValue}  />}
      >
        <ProCard
          style={{
            height: '100%',
            minHeight: 800,
            overflow: 'auto'
          }}
        >
            {which === 'auList' ? <AuList searchValue={searchValue} /> :
          which === 'userList' ? <UserList searchValue={searchValue} /> :<UserInfo/>}
          <div />
        </ProCard>
      </PageContainer>
    </div>
  );
};
export default MyPageContainer