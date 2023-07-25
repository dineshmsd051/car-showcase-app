import { customButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({
  title, 
  containerStyles, 
  handleClick,
  btnType, 
  textStyles,
  rightIcon,
  isDisabled
}: customButtonProps) => {
  return (
    <button
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    disabled={isDisabled}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <Image 
          src={rightIcon}
          alt="button-icon"
          fill
          className="object-contain"
        />
      )
      }
    </button>
  )
}

export default CustomButton