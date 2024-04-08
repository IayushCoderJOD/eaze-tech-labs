import React from 'react'
import Image from 'next/image';


const BiggerCards = ({ name }) => {
    return (
        <>
            <Image height={290} width={350} className='shadow-xl rounded-2xl' src={require(`../assets/${name}.png`).default} />
        </>
    )
}

export default BiggerCards