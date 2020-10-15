import React,{Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeLanguage} from '../i18n/i18n.actions'
import '../main/dependencies'
import Header from '../professionalProfile/header'
import Summary  from '../professionalProfile/summary'
import LanguageSelector from '../i18n/languageSelector'
import MainMenu from '../professionalProfile/mainMenu/mainMenu'
import ExperienceGroup from '../professionalProfile/experience/experienceGroup'
import SkillsGroup from '../professionalProfile/skills/skillsGroup'
import LanguagesGroup from '../professionalProfile/languages/languagesGroup'
import EducationGroup from '../professionalProfile/education/educationGroup'
import LanguageDisplay from '../i18n/languageDisplay'
import Footer from '../common/template/footer'
import {Helmet} from 'react-helmet'
import './app.css'
class App extends Component{
  render(){

    document.title = 
    document.description =  this.props.professionalProfile.summary[this.props.selectedLanguage]
    document.getElementById("app").lang = this.props.selectedLanguage
    return (
      <div className="app">
        <Helmet>
          <title>{this.props.professionalProfile.name + ' | ' + this.props.professionalProfile.role[this.props.selectedLanguage]}</title>
          <meta name="description" content={this.props.professionalProfile.summary[this.props.selectedLanguage]} />
          <meta property="og:image" content="www.eniofaria.com.br/enio-faria.jpg"></meta>
          <meta property="og:description" content={this.props.professionalProfile.summary[this.props.selectedLanguage]}/>
        </Helmet>
        <LanguageSelector/>
        <Header/>
        <MainMenu/>
        <Summary/>
        <ExperienceGroup/>
        <SkillsGroup/>
        <EducationGroup/>
        <LanguagesGroup/>
        <Footer/>
      </div>
    );
  }
}
const mapStateToProps = state => ({selectedLanguage:state.i18n.selectedLanguage,professionalProfile:state.professionalProfile})
const mapDispatchToProps = dispatch => bindActionCreators({changeLanguage},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(App)