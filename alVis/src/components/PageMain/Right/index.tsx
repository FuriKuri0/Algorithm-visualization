import './index.scss'
import IMGR from './IMGR';
import VOICER from './VOICER';
import ROBOTR from './ROBOTR';
import { useMemo } from 'react';
export default function MainRight({introduce,type}:{[key:string]:string}) {
    const which = useMemo(()=>{
        switch (type) {
            case 'img':
                return <IMGR/>
            case 'voice':
                return <VOICER/>
            case 'robot':
                return <ROBOTR/>
            default:
                break;
        }
    },[type])
  return (
    <div className='PageMain-Right'>
        <h1>核心能力</h1>
        <p >{introduce}</p>
       {which}
    </div>
  )
}
