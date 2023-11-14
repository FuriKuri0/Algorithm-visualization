import React from 'react'
import './index.scss'
import WelSearch from '../../components/WelSearch'
import WelMain from '../../components/WelMain'
export default function Welcome() {
  return (
    <div className='Welcome'>
        <WelSearch/>
        <WelMain/>
    </div>
  )
}
