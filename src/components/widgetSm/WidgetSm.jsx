import React from 'react'
import './widgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm(){
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Membaer</span>
      <ul className="widgetSmList">
        <li className='widgetSmListItem'>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
          <div className='widgetSmUser'>
            <span className="widgetSmUsername">Anno</span>
            <span className="widgetSmUserTitel">Software Engigneer</span>
          </div>
          <button className="widgetSmButton">
          <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
          <div className='widgetSmUser'>
            <span className="widgetSmUsername">Anno</span>
            <span className="widgetSmUserTitel">Software Engigneer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
          <div className='widgetSmUser'>
            <span className="widgetSmUsername">Anno</span>
            <span className="widgetSmUserTitel">Software Engigneer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
          <div className='widgetSmUser'>
            <span className="widgetSmUsername">Anno</span>
            <span className="widgetSmUserTitel">Software Engigneer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className='widgetSmListItem'>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
          <div className='widgetSmUser'>
            <span className="widgetSmUsername">Anno</span>
            <span className="widgetSmUserTitel">Software Engigneer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon  className="widgetSmIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

