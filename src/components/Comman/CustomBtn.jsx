import { Button } from '@mui/material'
import React from 'react'

const CustomBtn = ({type="text" , className = "", btnName="",onClick=""}) => {
  return (
    <Button type={type} className={className} onClick={onclick}>{btnName}</Button>
  )
}

export default CustomBtn
