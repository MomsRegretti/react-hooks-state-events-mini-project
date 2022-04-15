import React from 'react'

function Button({value, CATEGORIES, onCategoryChange}) {
    const handleClick= (e) => {
        onCategoryChange(e.target.value)
        e.target.className='selected'

    }
  return (
      <>
      <button onClick={handleClick} className='' value={value}>{value}</button>
      </>
  )
}

export default Button