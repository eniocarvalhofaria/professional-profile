import React from 'react'
import LanguageDisplay from '../../i18n/languageDisplay'
import Grid from '../../common/layout/grid'
export default props =>{

    return (
        <div>
           
                <Grid cols='12'>
                <div className='skills-group'>
                    <LanguageDisplay content={props.group}/>
                    </div> 
                </Grid>
          
            {props.children}
        </div>

    )

}