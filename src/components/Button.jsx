import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`rounded-[10px] py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}>
Empieza ya
    </button>
  )
}

export default Button