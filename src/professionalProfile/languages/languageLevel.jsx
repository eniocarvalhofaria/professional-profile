import React from 'react'
import LanguageDisplay from '../../i18n/languageDisplay'
import './language.css'
export default props =>{

   var levelList =[
        {pt: 'Iniciante' , en: 'Beginner'},
        {pt: 'Intermediário' , en: 'Intermediary'},
        {pt: 'Avançado' , en: 'Advanced'},
        {pt: 'Fluente',en:'Fluent'},
        {pt: 'Nativo',en:'Native'}
    ]

    var levelArray = [];
    var i = 1
    for(i = 1; i <=5;i++)
    {
        if(i > props.level)
        {
            levelArray.push('circle-thin') 
        }else{
            levelArray.push('circle') 
        }
    }

    return(
        <div className='langLevel'>
            <table>
                <tbody>
                <tr>
                <td colSpan='5' className='langLevelName'>
                    <LanguageDisplay content={levelList[props.level-1]}/>
                </td>
                </tr>
                <tr>
                {
                    levelArray.map((x,i)=>
                        <td key={`${i}`} className='langCell'>
                            <i className={`fa fa-${x}`}/>
                        </td>
                    )
                }
                </tr>
                </tbody>
            </table>
        </div>
    )
}