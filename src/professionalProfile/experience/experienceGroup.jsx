import React,{Component} from 'react'
import {connect} from 'react-redux'
import SectionTitle from '../sectionTitle'
import If from '../../common/operator/if'
import Experience from '../experience/experience'
import './experience.css'
class ExperienceGroup extends Component{

    render(){
        return (
            <If test={this.props.sectionsVisibles.filter(e => e === 'Experience').length > 0}>
                <section>
                    <SectionTitle icon='building' text ={{pt:'Experiência Profissional', en:'Professional Experience'}}/>
                    <div className='group'>
                    {
                        this.props.professionalProfile.professionalExperience.map(x=>
                            <Experience key={x.role.en}  experience={x}/>
                        )
                    }
                    </div>
                </section>
            </If>
          
        )
    }
} 
const mapStateToProps = state => ({sectionsVisibles:state.mainMenu.sectionsVisibles,professionalProfile:state.professionalProfile})
export default connect(mapStateToProps,null)(ExperienceGroup)