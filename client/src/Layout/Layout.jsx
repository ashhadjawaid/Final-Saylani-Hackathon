import React, { useState } from 'react'
import './layout.css'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'

const Layout = () => {
    const [selectedMenu, setSelectedMenu] = useState(false)
    return (
        <div className='layout'>
            <div className="sidebarwrapper">
                <Sidebar setSelectedMenu={setSelectedMenu} selectedMenu={selectedMenu} />

            </div>
            <div className="mainwrapper">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout