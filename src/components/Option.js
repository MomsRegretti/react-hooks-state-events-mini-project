import React from 'react'

function Option({value}) {

  return (
    <>
    <option name={value} value={value}>{value}</option>
    </>
  )
}

export default Option