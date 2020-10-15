import React from 'react'

export default props => (
    <div className='contact'>
        <a href={props.link} className='contact'><i className={`fa fa-${props.icon}`}></i>{props.text}</a>
    </div>
     
)