import React from 'react';
import Image from 'next/image';

const HeaderCards = ({ name }) => {
    return (
        <>
            <Image height={190} width={250} className='shadow-xl rounded-2xl' src={require(`../assets/${name}.png`).default} />
        </>
    );
};

export default HeaderCards;
