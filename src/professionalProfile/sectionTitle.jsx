import React from 'react'
import LanguageDisplay from '../i18n/languageDisplay'
export default props => (
    <div className='sectionTitle'>
       <i className={`fa fa-${props.icon}`}></i><LanguageDisplay content={props.text}/>   
    </div>   
)