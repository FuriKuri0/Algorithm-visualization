import React, { useEffect, useState } from 'react'
import {  Space, Tag } from 'antd';
import './index.scss'
import MyTable from '../MyTable';
import { getAll } from '../../api/Api';
import { useModel } from '../../utils';
const data2 = [{'ID':1,'username':'测试用户','gongsi':'公司名称','people':'杨成栋',
'phone':'123123123123','email':'222424@qq.com','all':5,'had':1},{'ID':1,'username':'测试用户','gongsi':'公司名称','people':'杨成栋',
'phone':'123123123123','email':'222424@qq.com','all':5,'had':1},{'ID':1,'username':'测试用户','gongsi':'公司名称','people':'杨成栋',
'phone':'123123123123','email':'222424@qq.com','all':5,'had':1},{'ID':1,'username':'测试用户','gongsi':'公司名称','people':'杨成栋',
'phone':'123123123123','email':'222424@qq.com','all':5,'had':1},{'ID':1,'username':'测试用户','gongsi':'公司名称','people':'杨成栋',
'phone':'123123123123','email':'222424@qq.com','all':5,'had':1},{'ID':1,'username':'测试用户','gongsi':'公司名称','people':'杨成栋',
'phone':'123123123123','email':'222424@qq.com','all':5,'had':1},{'ID':1,'username':'测试用户','gongsi':'公司名称','people':'杨成栋',
'phone':'123123123123','email':'222424@qq.com','all':5,'had':1},{'ID':1,'username':'测试用户','gongsi':'公司名称','people':'杨成栋',
'phone':'123123123123','email':'222424@qq.com','all':5,'had':1},{'ID':1,'username':'测试用户','gongsi':'公司名称','people':'杨成栋',
'phone':'123123123123','email':'222424@qq.com','all':5,'had':1},{'ID':1,'username':'测试用户','gongsi':'公司名称','people':'杨成栋',
'phone':'123123123123','email':'222424@qq.com','all':5,'had':1},{'ID':1,'username':'测试用户','gongsi':'公司名称','people':'杨成栋',
'phone':'123123123123','email':'222424@qq.com','all':5,'had':1},{'ID':1,'username':'测试用户','gongsi':'公司名称','people':'杨成栋',
'phone':'123123123123','email':'222424@qq.com','all':5,'had':1},{'ID':1,'username':'测试用户','gongsi':'公司名称','people':'杨成栋',
'phone':'123123123123','email':'222424@qq.com','all':5,'had':1},{'ID':1,'username':'测试用户','gongsi':'公司名称','people':'杨成栋',
'phone':'123123123123','email':'222424@qq.com','all':5,'had':1},{'ID':1,'username':'测试用户','gongsi':'公司名称','people':'杨成栋',
'phone':'123123123123','email':'222424@qq.com','all':5,'had':1}]
export default function UserList({ searchValue }) {
    const [data, setData] = useState(data2)
    const [loading, setLoading] = useState(false)
    const {setType} = useModel()
    useEffect( () => {
        getData(searchValue)
    }, [searchValue])
    const getData = async (searchValue = '') => { 
        setLoading(true)
        const Data = await getAll()
        setLoading(false)
        console.log(Data)
        setData(Data)
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: 'ID',
        },
        {
            title: '账号',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: '所属公司',
            dataIndex: 'gongsi',
            key: 'gongsi',
        },
        {
            title: '联系人',
            dataIndex: 'people',
            key: 'people',
        },
        {
            title: '联系人号码',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '联系人邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '授权总台数',
            dataIndex: 'all',
            key: 'all',
        },
        {
            title: '已授权台数',
            dataIndex: 'had',
            key: 'had',
        },
        {
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => setType(2)}>修改信息</a>
                </Space>
            ),
        },
    ];



    return (
        <MyTable loading={loading} columns={columns} data={data} />

    )
}
