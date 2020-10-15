import {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {changeLanguage} from './i18n.actions'
class LanguageDisplay extends Component{
    render(){
          try{
            const txt = this.props.content[this.props.selectedLanguage]
            if(txt)
            {
                return txt
            }else{
                return false
            }
        }catch(err){
            console.log('content: ' + this.props.content + ' err: '+ err)
            return false
        }
      
    }
} 
const mapStateToProps = state => ({selectedLanguage:state.i18n.selectedLanguage})
const mapDispatchToProps = dispatch => bindActionCreators({changeLanguage},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(LanguageDisplay)