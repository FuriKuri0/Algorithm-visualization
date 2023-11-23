import './index.scss'
import IMGR from './IMGR';
import VOICER from './VOICER';
import ROBOTR from './ROBOTR';
import { useMemo } from 'react';
import { useRefresh } from '../../../utils/hook';
export default function MainRight({introduce,type}:{[key:string]:string}) {
    const {refresh} = useRefresh()
    const which = useMemo(()=>{
        switch (type) {
            case 'img':
                return <IMGR />
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
        <h1  className={refresh?'slide-in-left':''}>核心能力</h1>
        <p className={refresh?'slide-in-left':''}>{introduce}</p>
       {which}
    </div>
  )
}
