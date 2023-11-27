import React from 'react';
import { Card } from 'antd';

const gridStyle: React.CSSProperties = {
  width: '25%',
  textAlign: 'center',
};

const UserInfo: React.FC = () => (
  <Card title="个人基本信息">
    <Card.Grid style={gridStyle} className='B'>用户名：</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle} >
      专项组
    </Card.Grid>
    <Card.Grid className='B' style={gridStyle}>公司：</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>广电运通算法开发部专项组</Card.Grid>
    <Card.Grid className='B' style={gridStyle}>联系人</Card.Grid>
    <Card.Grid  hoverable={false} style={gridStyle}>杨成栋</Card.Grid>
    <Card.Grid className='B' style={gridStyle}>联系电话</Card.Grid>
    <Card.Grid  hoverable={false} style={gridStyle}>15692008457</Card.Grid>
    <Card.Grid className='B' style={gridStyle}>邮箱</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>2277541105@qq.com</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}></Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}></Card.Grid>
    <Card.Grid className='B' style={gridStyle}>授权额度数量</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>0</Card.Grid>
    <Card.Grid className='B' style={gridStyle}>已授权数量</Card.Grid>
    <Card.Grid hoverable={false} style={gridStyle}>0</Card.Grid>
  </Card>
);

export default UserInfo;