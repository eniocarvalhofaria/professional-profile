import React,{Component} from 'react'
import {connect} from 'react-redux'
import SectionTitle from '../sectionTitle'
import If from '../../common/operator/if'
import Skill from './skill'
import LanguageDisplay from '../../i18n/languageDisplay'
import Grid from '../../common/layout/grid'
import Row from '../../common/layout/row'
import ProgrammingSkillsGroup from './programmingSkillsGroup'
class SkillsGroup extends Component{

    render(){
        return (
            <If test={this.props.sectionsVisibles.filter(e => e === 'Skills').length > 0}>
                <section>
                    <SectionTitle icon='cogs' text ={{pt:'Competências', en:'Skills'}}/>
                    <div className='group'>
                    <Row>
                        <Grid cols='12 12 6 6'>
                            <div className='skill-container skill-subtitle'>
                            <div className='skills-inner'>
                                <div className='skills-title'>
                                    <LanguageDisplay content={{pt:'Legenda:',en:'Subtitle:'}}/>
                                </div>
                                <Skill skill={{name:{pt: 'Iniciante' , en: 'Beginner'}, level:1}}/>
                                <Skill skill={{name:{pt: 'Intermediário' , en: 'Intermediary'}, level:2}}/>
                                <Skill skill={{name:{pt: 'Avançado' , en: 'Advanced'}, level:3}}/>
                                <Skill skill={{name:{pt: 'Especialista' , en: 'Expert'}, level:4}}/>
                            </div>
                            </div>
                            <div className='skill-container'>
                                <div className='skills-inner'>
                                    <div className='skills-title'>
                                        <LanguageDisplay content={{pt:'Competências funcionais',en:'Functional skills'}}/>
                                    </div>
                                    <div className='skill-itens-container'>
                                    {
                                        this.props.professionalProfile.skills.functional.map((x,i)=>
                                            <Skill key={`r${i}`} skill={x}/>
                                        )
                                    }
                                </div>
                                </div>
                            </div>
                            <div className='skill-container'>
                                <div className='skills-inner'>
                                    <div className='skills-title'>
                                        <LanguageDisplay content={{pt:'Ferramentas',en:'Tools'}}/>
                                    </div>
                                    <div className='skill-itens-container'>
                                    <Row>
                                    {
                                        this.props.professionalProfile.skills.tools.map((x,i) => 
                                            <Grid key={`r${i}`} cols='6'>
                                                {x}
                                            </Grid>
                                        )
                                    }
                                    </Row>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid cols='12 12 6 6'>
                        <div className='skill-container'>
                                <div className='skills-inner'>
                                    <div className='skills-title'>
                                        <LanguageDisplay content={{pt:'Programação',en:'Programming'}}/>
                                    </div>
                                    <Row> 
                                   
                                        {
                                            this.props.professionalProfile.skills.programming.map((x,j)=>
                                                
                                               <ProgrammingSkillsGroup key={`p${j}`} group={x.group}>
                                                   {
                                                    x.list.map((y,i)=>
                                                    
                                                    <Grid key={`r${i}`} cols='12 12 6 6'>
                                                        <Skill skill={y}/>
                                                    </Grid>
                                                    )
                                                   }
                                               </ProgrammingSkillsGroup>
                                            )
                                        }
                                    
                                     </Row>
                                </div>
                            </div>
                        </Grid>
                        
                    </Row>
                    <Row>
                        <Grid cols='12 12 6 6'>
                            
                        </Grid>
                        <Grid cols='12 12 6 6'>
                          
                        </Grid>
                        
                    </Row>   
                        
                    </div>
                </section>
            </If>
          
        )
    }
} 
const mapStateToProps = state => ({sectionsVisibles:state.mainMenu.sectionsVisibles,professionalProfile:state.professionalProfile})
export default connect(mapStateToProps,null)(SkillsGroup)