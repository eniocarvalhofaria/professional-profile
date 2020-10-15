import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeLanguage} from './i18n.actions'
import './i18n.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from 'react-router-dom'
class LanguageSelector   extends Component{
    render(){

        const langList = this.props.languageList
        return (
            <nav className='languageSelector hidden-print'>    
            <Router> 
            {    
                langList.map(x=> 
                     <span key={`lang-${x.code}`} className={`languageItem ${(x.code === this.props.selectedLanguage)? 'menu-active':''}`}><Link to={`/${x.code}`}><span className='menuText'>{x.name}</span></Link></span>
                    )
            }
             <Switch>
                <Route path="/:id" children={<Child changeLanguage={this.props.changeLanguage}/>} />
            </Switch>
            </Router> 
            </nav>
)
       
}
 
} 
function Child (props) {
    let { id } = useParams()
    props.changeLanguage(id)
   
    return (false)
  } 
const mapStateToProps = state => ({selectedLanguage:state.i18n.selectedLanguage, languageList:state.i18n.languageList})
const mapDispatchToProps = dispatch => bindActionCreators({changeLanguage},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(LanguageSelector)