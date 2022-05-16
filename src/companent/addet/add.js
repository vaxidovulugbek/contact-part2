
import React from 'react'

export default function Add(props) {
  // console.log(props.qiymat.state);
  let propertyValues = Object.values(props.qiymat.state);
  let newmap = propertyValues.map(item => {
    return `${ item }`
  })
  console.log(newmap);
  return (
    <li>{newmap}</li>
  )
}
