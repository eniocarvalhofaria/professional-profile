import React,{Component} from 'react'
import {connect} from 'react-redux'
import SectionTitle from '../sectionTitle'
import If from '../../common/operator/if'
import Language from './language'
import Grid from '../../common/layout/grid'
import Row from '../../common/layout/row'
class LanguagesGroup extends Component{

    render(){
        return (
            <If test={this.props.sectionsVisibles.filter(e => e === 'Languages').length > 0}>
                <section>
                    <SectionTitle icon='language' text ={{pt:'Idiomas', en:'Languages'}}/>
                    <div className='group'>
                        <Row>
                            
                                {
                                    this.props.professionalProfile.languages.map((x,i)=>
                                        <Grid  key={`r${i}`} cols='12 12 6 6'>
                                    <Language language={x}/>
                                    </Grid>
                                    )
                                }
                        </Row>
                    </div>
                </section>
            </If>
          
        )
    }
} 
const mapStateToProps = state => ({sectionsVisibles:state.mainMenu.sectionsVisibles,professionalProfile:state.professionalProfile})
export default connect(mapStateToProps,null)(LanguagesGroup)