import React,{Component} from 'react'
import {connect} from 'react-redux'
import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import LanguageDisplay from '../i18n/languageDisplay'
import If from '../common/operator/if'
import './summary.css'
class Summary extends Component{
    render(){
        const p = this.props.professionalProfile;
        return (
            <If test={this.props.sectionsVisibles.length > 1}>
           
                <div className='summary-panel'>
         
                    <Row>  
                        <Grid cols='12 12 12 12'>

                            <div className='summary'>
                                <LanguageDisplay content={p.summary}/>
                            </div> 
                            
                        </Grid>
                      
                    </Row>
                </div>
            </If>  
              
        
        )
    }
} 
const mapStateToProps = state => ({sectionsVisibles:state.mainMenu.sectionsVisibles,professionalProfile:state.professionalProfile})
export default connect(mapStateToProps,null)(Summary)