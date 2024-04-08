import React from 'react'
import CustomButton from './CustomButton'
import HeaderCards from './HeaderCards'
import BiggerCards from './BiggerCards'
import Table from './Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faChartArea, faComment, faUser } from '@fortawesome/free-solid-svg-icons'

const Headers = () => {
    return (
        <>
            <div className='mt-5 flex justify-evenly '>
                <div className=' mt-4 w-[40%]'>
                    <input type="text" placeholder='Search by profile, setting, artifact etc..' className='border-2 border-gray-300 w-full p-1' />
                </div>
                <div className=' mt-3 text-black'>
                    <div className='flex justify-evenly'>
                        <button className='m-1 bg-white border border-black rounded-xl p-2  '>
                            <span className='pr-1'>
                                <FontAwesomeIcon icon={faBell} className="fas fa-check" style={{ color: "black" }}
                                ></FontAwesomeIcon>
                            </span>
                        </button >
                        <button className='m-1 bg-white border border-black rounded-xl p-2  '>
                            <span className='pr-1'>
                                <FontAwesomeIcon icon={faComment} className="fas fa-check" style={{ color: "black" }}
                                ></FontAwesomeIcon>
                            </span>
                        </button >
                        <button className='m-1 bg-white border border-black rounded-xl p-2  '>
                            <span className='pr-1'>
                                <FontAwesomeIcon icon={faBell} className="fas fa-check" style={{ color: "black" }}
                                ></FontAwesomeIcon>
                            </span>
                        </button >
                        <button className='m-1 bg-white text-white p-2 rounded-3xl m-1 bg-white border border-black rounded-xl p-2 '>
                            <span className='pr-1'>
                                <FontAwesomeIcon icon={faUser} className="fas fa-check" style={{ color: "black" }}
                                ></FontAwesomeIcon>
                            </span>
                        </button >
                    </div>
                </div>
                {/* bg-[#1d6b84] */}
            </div>
            <div className='flex justify-evenly mt-7'>
                <CustomButton title={"Create Report"} color={"bg-[#1d6b84]"} text={"text-white"} />
                <CustomButton title={"Share this dashboard"} color={"bg-white"} text={"text-gray-400"} />
                <CustomButton title={"Select duration"} color={"bg-white"} text={"text-gray-400"} />
                <CustomButton title={"Compare with duration"} color={"bg-white"} text={"text-gray-400"} />
            </div>
            <div className='mt-3 flex flex-wrap justify-evenly '>
                <HeaderCards name={"1"} />
                <HeaderCards name={"2"} />
                <HeaderCards name={"3"} />
                <HeaderCards name={"4"} />
            </div>
            <div className='mt-4 flex justify-around'>
                <BiggerCards name={"big1"} />
                <BiggerCards name={"big2"} />
                <BiggerCards name={"big3"} />
            </div>
            <div className='mt-4'>
                <Table />
            </div>
        </>
    )
}

export default Headers