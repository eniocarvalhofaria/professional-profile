import React from 'react'
import LanguageDisplay from '../../i18n/languageDisplay'
import If from '../../common/operator/if'
import BeforeAfterTable from './beforeAfterTable'
export default props =>{
    const project = props.project
return(
    <div className='experience-project'>
    <div className='project-name'>
    <i className='fa fa-lightbulb-o'/> <LanguageDisplay content={project.name}/>:
    </div>
    <div className='project-summary'>
        <LanguageDisplay content={project.summary}/>
    </div>
    <strong>
        <If test={project.activities.length === 1}>
            <span><LanguageDisplay content={{pt:'Atividade: ',en:'Activity:'}}/></span>
        </If> 
        <If test={project.activities.length > 1}>
            <span><LanguageDisplay content={{pt:'Atividades: ',en:'Activities:'}}/></span>
        </If> 
    </strong>

    <div className='project-activities'>
        {
            project.activities.map(a => 
                <div key={a.en} className='project-activity'>
                    <i className='fa fa-check-circle'/><LanguageDisplay content={a}/>
                    
                </div> 
            )
        }
    </div>
    <If test={project.hasOwnProperty('results') && project.results != null}>
        <If test={project.results.length > 0}>
            <strong><LanguageDisplay content={{pt:'Resultados: ',en:'Results:'}}/></strong>
            {  project.results.map((x,i)=> 
                <If key={`if${i}`} test={x.type === 'before-after-table'}>
                    <BeforeAfterTable key={`r${i}`} data={x.data}/>
                </If>
           )
        }
            
        </If>

    </If>
    <div className='project-techs'>
        <strong>
        <span><LanguageDisplay content={
            (project.technologies.length === 1)?
            {pt:'Tecnologia: ',en:'Technology: '}:
            {pt:'Tecnologias: ',en:'Technologies: '}}/></span>
        </strong>
        { 
            
             project.technologies.map((a,i) => 
                <span key={a} className='project-tech'>
                    {a} 
                    <If test={i < project.technologies.length - 1 }>
                        &nbsp;|&nbsp;
                    </If> 
                </span> 
               
            )
        }
    </div>
</div>
)
}