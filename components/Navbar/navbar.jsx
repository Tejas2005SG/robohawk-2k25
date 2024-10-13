import React, { useState } from 'react';
import './navbar.css'; // Assuming the CSS code is in styles.css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCircleInfo, faHouse, faPeopleGroup, faEye, faTrophy } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [isSidebarClosed, setIsSidebarClosed] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Toggle sidebar open/close state
    const handleToggleSidebar = () => {
        setIsSidebarClosed(!isSidebarClosed);
    };

    // Toggle dark mode state
    // const handleToggleDarkMode = () => {
    //     setIsDarkMode(!isDarkMode);
    // };

    // // Change the body class based on dark mode state
    // React.useEffect(() => {
    //     if (isDarkMode) {
    //         document.body.classList.add('dark');
    //     } else {
    //         document.body.classList.remove('dark');
    //     }
    // }, [isDarkMode]);

    return (
        <nav className={`sidebar ${isSidebarClosed ? 'close' : ''}`}>
            <header>
                {/* <div className="image-text">
                    <span className="image">
                        
                    </span>

                    <div className="text logo-text">
                        <span className="name">Codinglab</span>
                        <span className="profession">Web developer</span>
                    </div>
                </div> */}

                <i className="bx bx-chevron-right toggle" onClick={handleToggleSidebar}></i>
            </header>

            <div className="menu-bar">
                <div className="menu  ">
                    <ul className="menu-links ">
                        <li className="nav-link ">
                            <a href="#" className='text-center'>
                                <FontAwesomeIcon icon={faHouse} size='2x' />

                                <span className="text nav-text">Home</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="#">
                                <FontAwesomeIcon icon={faCircleInfo} size='2x' />
                                <span className="text nav-text">About Us</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="#">
                                <FontAwesomeIcon icon={faCalendar} size='2x' />
                                <span className="text nav-text">Events</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="#">
                                <FontAwesomeIcon icon={faTrophy} size='2x' />
                                <span className="text nav-text">Achievements</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="#" >
                                <FontAwesomeIcon icon={faEye} size='2x' />
                                <span className="text nav-text">Vision</span>
                            </a>
                        </li>

                        <li className="nav-link">
                            <a href="#">
                                <FontAwesomeIcon icon={faPeopleGroup} size='2x' />
                                <span className="text nav-text">Team</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="bottom-content">
                    <li className="">
                        <a href="#">
                            <i className="bx bx-log-out icon"></i>
                            <span className="text nav-text p-none">RoboHawk</span>
                        </a>
                    </li>

                    {/* <li className="mode">
                        <div className="sun-moon" onClick={handleToggleDarkMode}>
                            <i className={`bx ${isDarkMode ? 'bx-sun' : 'bx-moon'} icon`}></i>
                        </div>
                        <span className="mode-text text">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>

                        <div className="toggle-switch" onClick={handleToggleDarkMode}>
                            <span className="switch"></span>
                        </div>
                    </li> */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
