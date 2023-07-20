import React from 'react';
import Image from "next/image";
import { customButtonProps } from '@/types';

const CustomButton = ({
  title, 
  containerStyles, 
  handleClick
}: customButtonProps) => {
  return (
    <button
    type={"button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}

export default CustomButton