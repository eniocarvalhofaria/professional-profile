import React from 'react'
import LanguageDisplay from '../../i18n/languageDisplay'
import './skill.css'
export default props =>{
    var levelArray = [];
    var i = 1
    for(i = 1; i <=4;i++)
    {
        if(i > props.skill.level)
        {
            levelArray.push('circle-thin') 
        }else{
            levelArray.push('circle') 
        }
    }

    return(
        <div className='skill'>
            <span className='skill-name'><LanguageDisplay content={props.skill.name}/></span>
            <span className='skill-level'>
            {
                levelArray.map((x,i)=>
                    <i key={`r${i}`} className={`fa fa-${x}`}/>
                )
            }
            </span>
        </div>
    )
}