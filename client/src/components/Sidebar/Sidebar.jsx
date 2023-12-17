import React, { useEffect, useState } from 'react'
import './sidebar.css'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { PiNotePencilBold } from "react-icons/pi";
import { IoMdPersonAdd } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";





const Sidebar = ({ selectedMenu, setSelectedMenu }) => {


    const menuItems = [
        {
            name: "Students",
            url: '/',
        },
        {
            name: "Add Students",
            url: 'addstudents'
        },
        {
            name: "Attendence",
            url: 'attendence'
        }
    ]



    return (
        <div className='sidebar-container'>


            <div id="logo">
                <h1>Attendence</h1>
                {/* <img src={LogoImage} alt="" id="logo-img" /> */}
            </div>

            <div className="side-menu">

                <div className="menu-items">
                    {
                        menuItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.url}
                                onClick={() => setSelectedMenu(item.name)}
                                className={selectedMenu === item.name ? 'selected' : "menu-item"}>
                                <div className='menu-icon'>
                                    {item.name === 'Students' ? (
                                        <FaUsers size='1.4em' color={selectedMenu === item.name ? '#fff' : '#7300F1'} />
                                    ) : item.name === 'Attendence' ? (

                                        <PiNotePencilBold size='1.4em' color={selectedMenu === item.name ? '#fff' : '#7300F1'} />
                                    ) :
                                        <IoMdPersonAdd size='1.4em' color={selectedMenu === item.name ? '#fff' : '#7300F1'} />
                                    }
                                </div>
                                <p className="menu-title"  >{item.name}</p>
                            </Link>
                        ))
                    }

                </div>
                <div className="logout">
                    <Link to='/' className='menu-item'>
                        <IoLogOut size='1.4em' color='#7300F1' />
                        <p className="menu-title">
                            Logout
                        </p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Sidebar