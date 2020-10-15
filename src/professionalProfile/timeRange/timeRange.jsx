import React from 'react'
import LanguageDisplay from '../../i18n/languageDisplay'
import If from '../../common/operator/if'
import './timeRange.css'
export default props => {

        const months = [
            {pt:'jan',en:'jan'},
            {pt:'fev',en:'feb'},
            {pt:'mar',en:'mar'},
            {pt:'abr',en:'apr'},
            {pt:'mai',en:'may'},
            {pt:'jun',en:'jun'},
            {pt:'jul',en:'jul'},
            {pt:'ago',en:'aug'},
            {pt:'set',en:'sep'},
            {pt:'out',en:'oct'},
            {pt:'nov',en:'nov'},
            {pt:'dez',en:'dec'}
        ]
        var firstDate = props.start
        if(props.date)
        {
            firstDate = props.date
        } 
        if(firstDate.month){

        }
        const hasFisrtDateMonth = (firstDate.hasOwnProperty('month') && firstDate.month > 0)?true:false
        const hasEndDate = (props.hasOwnProperty('start') && props.start != null)?true:false
        const hasFiniteEndDate = (props.hasOwnProperty('end') && props.end != null)?true:false
        const hasEndMonth = (props.end && props.end.hasOwnProperty('month') && props.end.month >0)?true:false
        const hasEndYear = (props.end && props.end.hasOwnProperty('year') && props.end.year >0)?true:false 
        var endMonth= false;
        var endyear = '';
        if(hasEndMonth)
        {  
            console.log('props.end.month: '+props.end.month)
            console.log('props.end.month object: '+ JSON.stringify(months[props.end.month - 1]))
            endMonth = months[props.end.month - 1]
        } 
        if(hasEndYear)
        {
            endyear=props.end.year 
        }
        console.log('hasEndMonth: ' + hasEndMonth)
        console.log(props.end)
        return (
            <div className='timeRange'>
                <table>
                    <tbody>
                    <tr>
                        <td className='dateCell calendar' rowSpan='2'><i className={`fa fa-calendar`}></i><LanguageDisplay content={props.text}/></td>
                        <td className='dateCell'>
                            <If test={hasFisrtDateMonth}>
                                <LanguageDisplay content={months[firstDate.month - 1]}/>
                            </If>
                        </td>
                        
                        <If test={hasEndDate}>
                            <td className='endDateCell dateCell' rowSpan={`${(hasFiniteEndDate)?'1':'2'}`}>
                                <If test={hasEndDate && !hasFiniteEndDate}>
                                    <LanguageDisplay content={{pt:'presente', en:'present'}}/>
                                </If>
                                <If test={hasEndMonth}>
                                    <LanguageDisplay content={endMonth}/>
                                </If> 
                            </td>
                        </If>
                    </tr>
                    <tr>
                        <td className='dateCell'>{firstDate.year}</td>
                        <If test={hasEndYear}>
                            <td className='endDateCell dateCell'>{endyear}</td>
                        </If>

                    </tr>
                    </tbody>
                </table>
                   
            </div>
        )
    }
