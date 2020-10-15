import React,{Component} from 'react'
import TimeRange from '../timeRange/timeRange'
import Row from '../../common/layout/row'
import Grid from '../../common/layout/grid'
import LanguageDisplay from '../../i18n/languageDisplay'
import If from '../../common/operator/if'
import Project from './project'
import Company from './company'
export default class Experience extends Component{
    render(){
        const exp = this.props.experience
        return (
            <div className='experience-container'>
                <Row>
                    <div className='hidden-xs hidden-sm col-md-2 col-lg-2'>
                        <TimeRange start={exp.start} end={exp.end} date={exp.date}/>
                    </div>
                     <Grid cols='12 12 7 7'>
                        <div className='experience-role'>
                            <LanguageDisplay content={exp.role} />
                        </div>
                        <Row>
                        <div className='col-xs-6 hidden-sm hidden-md hidden-lg respTimeRange'>
                            <TimeRange start={exp.start} end={exp.end} date={exp.date}/>
                        </div>
                        <div className='col-xs-6 hidden-sm hidden-md hidden-lg respCompany'>
                            <Company company={exp.company}/>
                        </div>
                        </Row>
                        <div className='experience-summary'>
                            <LanguageDisplay content={exp.summary}/>
                        </div>
                        <div className='experience-activities'>
                        {
                            exp.activities.map(x =>
                                <div key={x.en} className='experience-activity'>
                                    <i className='fa fa-check-circle'/><LanguageDisplay content={x}/>
                                </div>
                                )
                        }
                       </div>
                    </Grid>
                    <div className='hidden-xs hidden-sm col-md-3 col-lg-3'>
                        <div className='company-content'>
                            <Company company={exp.company}/>
                        </div>
                    </div>
                </Row>
                <Row>
                    <Grid cols='12 12 2 2'/>
                    <Grid cols='12 12 8 8'>
                        <If test={exp.projects.length > 0}>
                            <div className='experience-projects-title'>
                                <LanguageDisplay content={{pt:'Projetos:',en:'Projects:'}}/>
                            </div>
                        
                            <div className='experience-projects'>
                            {
                                exp.projects.map(x =>
                                   <Project key={x.name.en} project={x}/>
                                )
                            }
                            </div>
                        </If>
                        
                    </Grid>
                    <Grid cols='2'/>
                </Row>
            {/*  {exp.company.name} */}
            </div>
        )
    }
}