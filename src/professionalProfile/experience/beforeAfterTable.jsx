import React from 'react'
import LanguageDisplay from '../../i18n/languageDisplay'


export default props =>{
    return (
        <table className='before-after-table'>
            <thead>
                <tr>
                    <th width='14%'></th>
                    <th width='43%'><LanguageDisplay content={{pt:'Antes',en:'Before'}}/></th>
                    <th width='43%'><LanguageDisplay content={{pt:'Depois',en:'After'}}/></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((x,i)=> 
                        <tr key={`r${i}`} className={(i % 2 === 0)?'':'odd-line'}>
                            <td><LanguageDisplay content={x.description}/></td>
                            <td><LanguageDisplay content={x.before}/></td>
                            <td><LanguageDisplay content={x.after}/></td>
                        </tr>
                    )
                }
               
            </tbody>
        </table>
    )
}