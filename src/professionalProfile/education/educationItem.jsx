import React from 'react'
import LanguageDisplay from '../../i18n/languageDisplay'
import TimeRange from '../timeRange/timeRange'
export default props => {

    return(
        <div className='educationItem'>
            <div className='education-title'>
                <span><i className={`fa fa-${props.item.icon} educationItemIcon`}/>
                <LanguageDisplay content={props.item.class}/></span>
            </div> 

            <table className='educationTable'>
            <tbody>
                <tr>
                    <td colSpan='2'>
                        <div className='educationItemSummary'>
                        {<LanguageDisplay content={props.item.summary}/>}
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='educationItemInstituition'>  
                            {props.item.instituition}
                        </div>
                    </td>
                    <td>
                        <div className='educationItemDate'>
                            <TimeRange start={props.item.start} end={props.item.end} date={props.item.date}/>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>

         
            </div>

    )
}