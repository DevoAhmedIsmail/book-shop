import React from 'react'

const HeaderContent = ({text}) => {
  return (
    <div className="content-header bg-cyan-600 py-16">
    <p className="text-center uppercase text-white text-3xl font-semibold tracking-wider">
      {text}
    </p>
  </div>
  )
}

export default HeaderContent
