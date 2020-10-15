import React from 'react'
import LanguageDisplay from '../../i18n/languageDisplay'
import LanguageLevel from './languageLevel'
import Grid from '../../common/layout/grid'
import Row from '../../common/layout/row'
import './language.css'
export default props =>{

    return (
        <div className='langItem'>
            <Row>
                <Grid cols='4'>
                    <div className='langGrid'>
                        <img src={props.language.imageUrl} alt={props.language.name.pt} className='langImg'/>
                    </div>
                </Grid>
                <Grid cols='4'>
                    <div className='langName'>
                        <LanguageDisplay content={props.language.name}/>
                    </div>
                </Grid>
                <Grid cols='4'>
                    <div className='langGrid'>
                        <LanguageLevel level={props.language.level}/>
                    </div>
                    
                </Grid>
            </Row>
           
        </div>
    )
}