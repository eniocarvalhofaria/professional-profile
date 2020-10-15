import React,{Component} from 'react'
import {connect} from 'react-redux'
import SectionTitle from '../sectionTitle'
import If from '../../common/operator/if'
import Grid from '../../common/layout/grid'
import Row from '../../common/layout/row'
import EducationItem from './educationItem'
import './education.css'
class EducationGroup extends Component{

    render(){
        return (
            <If test={this.props.sectionsVisibles.filter(e => e === 'Education').length > 0}>
                <section>
                    <SectionTitle icon='book' text ={{pt:'Formação', en:'Education'}}/>
                    <div className='group'>
                <Row>
                    
                   
                    {
                        this.props.professionalProfile.education.map((x,i)=>
                            <Grid key={`r${i}`} cols='12 12 4 4'>
                                <EducationItem item={x}/>
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
export default connect(mapStateToProps,null)(EducationGroup)