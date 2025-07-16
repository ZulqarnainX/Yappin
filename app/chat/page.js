"use client"


import { useRef } from 'react';
import React from 'react'
import VariableProximity from '@/Reactbits/VariableProximity/VariableProximity';

const Chat = () => {
  const containerRef = useRef(null);
  return (


    <div
      className="min-h-screen bg-gradient-to-b from-[#CDF5FD] via-[#89CFF3] to-[#00A9FF] font-inter text-gray-800 antialiased pt-[100px]"
      ref={containerRef}
      style={{ position: 'relative' }}
    >
      <VariableProximity
        label={'Hover me! And then star React Bits on GitHub, or else...'}
        className={'variable-proximity-demo'}
        fromFontVariationSettings="'wght' 400, 'opsz' 9"
        toFontVariationSettings="'wght' 1000, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff='linear'
      />
    </div>
  )
}

export default Chat
