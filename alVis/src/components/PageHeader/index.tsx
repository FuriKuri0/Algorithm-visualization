import {Button} from 'antd'
import './index.scss'
import { usePath } from '../../utils/hook'
import defaultProps from '../../pages/Home/defaultProps'
export default function PageHeader() {
    const {changePath,pathName,current}  = usePath()
  return (
    <div className='PageHeader'>
        <div className="PageHeader-container">
            <h1>{current.name}</h1>
            <p>{current.introduce}</p>
            <div className='PageHeader-container-intro'>
                <Button type="primary" size="large">产品价格</Button>
                <Button type="dashed" size="large">技术文档</Button>
                <Button type="text" size="large">私有化部署</Button>
                <Button type="link" size="large">离线识别SDK</Button>
            </div>
            <div className='PageHeader-container-icon'>{defaultProps.route.routes[current.index]?.icon}
            </div>
        </div>
      <header>
        <h1>功能演示</h1>
      </header>
        <ul className='MyPageContainer-nav'>
            {current?.routes?.map((v)=>{
                return (<li key={v.path} className={pathName.includes(v.path)?'active':''}  onClick={()=>changePath(v.children?v.children[0].path:v.path)}>{v.name}</li>)
            })}
        </ul>
    </div>
  )
}
