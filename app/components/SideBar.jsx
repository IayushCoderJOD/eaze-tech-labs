import { faBars, faBook, faClock, faGear, faHome, faRightFromBracket, faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SideBar = () => {
    return (
        <div className='h-[590px] m-4 bg-[#1d6b84] text-white rounded-2xl p-5'>
            <ul className='ml-4 mr-4'>
                <li className='mb-9 mt-6 text-4xl font-semibold'>Catalix</li>
                <li className='mb-6 font-light text-base'>
                    <span className='pr-1'>
                        <FontAwesomeIcon icon={faHome} className="fas fa-check" style={{ color: "white" }}
                        ></FontAwesomeIcon>
                    </span>
                    Home</li>
                <li className='mb-6 font-light text-base'>
                    <span className='pr-2'>
                        <FontAwesomeIcon icon={faClock} className="fas fa-check" style={{ color: "white" }}
                        ></FontAwesomeIcon>
                    </span>
                    Activities</li>
                <li className='bg-[#44bae2] rounded-xl p-3 pl-4  mb-6 font-light text-base'>
                    <span className='pr-1'>
                        <FontAwesomeIcon icon={faBars} className="fas fa-check" style={{ color: "white" }}
                        ></FontAwesomeIcon>
                    </span>
                    Analytics</li>
                <li className='mb-6 font-light text-base'>
                    <span className='pr-1'>
                        <FontAwesomeIcon icon={faRocket} className="fas fa-check" style={{ color: "white" }}
                        ></FontAwesomeIcon>
                    </span>Transformation</li>
                <li className='mb-6 font-light text-base'>
                    <span className='pr-1'>
                        <FontAwesomeIcon icon={faBook} className="fas fa-check" style={{ color: "white" }}
                        ></FontAwesomeIcon>
                    </span>Library</li>
            </ul>
            <hr className='mt-14' />
            <ul className='ml-4 mt-6 mr-4'>
                <li className='mb-4 font-light text-base'> <span className='pr-1'>
                    <FontAwesomeIcon icon={faGear} className="fas fa-check" style={{ color: "white" }}
                    ></FontAwesomeIcon>
                </span>Settings</li>
                <li className='mb-4 font-light text-base'>
                    <span className='pr-1'>
                        <FontAwesomeIcon icon={faRightFromBracket} className="fas fa-check" style={{ color: "white" }}
                        ></FontAwesomeIcon>
                    </span>Logout</li>
            </ul>
        </div>
    )
}

export default SideBar