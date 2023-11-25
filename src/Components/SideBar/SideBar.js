import React from 'react'
import './SideBar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TimelineIcon from '@mui/icons-material/Timeline'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

export default function SideBar() {
  return (
    <div>
kiiiir
<div className='SideBar'>
    <div className='SideBarWrapper'>
        <div className='SideBarMenue'>
            <h3 className='SideBarTitle'>dashboard</h3>
            <ul className='SideBarList'>
                <li className='SideBarListItem'>
                    <LineStyleIcon className='SideBarIcon'/>
                Home
                </li>
                <li className='SideBarListItem'>
                    <TimelineIcon className='SideBarIcon'/>
                Analytic
                </li>
                <li className='SideBarListItem'>
                    <TrendingUpIcon className='SideBarIcon'/>
                Sales
                </li>
            </ul>
        </div>
    </div>
</div>


    </div>
  )
}
