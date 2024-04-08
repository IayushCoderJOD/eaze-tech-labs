'use client'
import React, { useState } from 'react'

const CustomButton = ({ title, color, text }) => {
    return (
        <>
            <div onClick={() => {
                alert("hii")
            }} className={`${color} pl-8 cursor-pointer pr-8 border border-gray-400 p-2 rounded-2xl font-medium shadow-xl ${text}`} >{title}</div>
        </>
    )
}

export default CustomButton