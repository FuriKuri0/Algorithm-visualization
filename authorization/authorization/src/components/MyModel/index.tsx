import React from 'react'
import { Input,  Button, Upload, message, Form, Modal, Spin } from 'antd';
import {useModel} from '../../utils/index';
// eslint-disable-next-line @typescript-eslint/ban-types
export default function MyModel() {
  const {open,setOpen,titleMap,type} = useModel()
    const onFinish = (values) => {
      };
  return (
    <div>    <Modal
    title={titleMap[type]}
    open={open}
    onCancel={() => setOpen(false)}
    footer={null}
  >
    <Form
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="on"
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
          {
            pattern: "^[\\u4e00-\\u9fa5a-zA-Z0-9]{4,12}$",
            message: '用户名必须为4-12位字母/数字/中文'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
          {
            pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$",
            message: '密码必须包含6-20个大小写字母、数字'

          }
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="email"
        label="邮箱"
        rules={[
          {
            type: 'email',
            message: '邮箱格式错误!',
          },
          {
            required: true,
            message: '请输入您的邮箱!',
          },
        ]}
      >
        <Input />

      </Form.Item>
      <Form.Item
        name="phone"
        label="手机号码"
        rules={[
          {
            required: true,
            message: '请输入手机号码!',
          },
          {
            pattern: "^((13[0-9])|(14[0|5|6|7|9])|(15[0-3])|(15[5-9])|(16[6|7])|(17[2|3|5|6|7|8])|(18[0-9])|(19[1|8|9]))\\d{8}$",
            message: '手机号应为11位数字'
          }
        ]}
      >
        <Input
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
        name="roleId"
        label="roleId"
        rules={[
          {
            required: true,
            message: '请输入roleId!',
          },
        ]}
      >
        <Input
          style={{
            width: '100%',
          }}
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 10,
          span: 2,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </Modal></div>
  )
}
