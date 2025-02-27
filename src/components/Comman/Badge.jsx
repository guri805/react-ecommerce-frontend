import React from 'react'

const Badge = (props) => {
  return (
    <span className={`flex items-center justify-center py-1 px-1 text-[12px] rounded-full capitalize ${props.status === "pending" && 'bg-primary text-white '} ${props.status === "confirm" && 'bg-yellow-500 text-white '}${props.status === "deliverd" && 'bg-gren-500 text-white '}`}>{props.status} </span>
  )
}

export default Badge
