import React from 'react'

export default function DatabindingFunction() {
    const title = 'cybersoft'

    const renderTitle = () => {
        return
        <p>Ahihi</p>
    }
    

  return (
    <div className='container'>        
        <h3>{title}</h3>
        <p>{renderTitle()}</p>
        </div>
  )
}
