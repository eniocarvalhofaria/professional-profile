import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {selectMenu} from './mainMenu.actions'
import LanguageDisplay from '../../i18n/languageDisplay'
import './mainMenu.css'
class MainMenu   extends Component{
    render(){

        const menuItemList = this.props.menuItemList
        return (
            <nav className='mainMenu'>     
                <div className='mainMenuTextContainer'>  
            {    
                menuItemList.map(x=> 
                    <span key={x.en} className={`menuItem ${(x.en === this.props.selectedMenuItem)? 'menu-active':''}`} onClick={()=>{this.props.selectMenu(x.en)}}><div className='menuText'><LanguageDisplay content={x}/></div></span>
                )
            }
                </div>
            </nav>
)  
       
    }
} 
const mapStateToProps = state => ({selectedMenuItem:state.mainMenu.selectedMenuItem, menuItemList:state.mainMenu.menuItemList})
const mapDispatchToProps = dispatch => bindActionCreators({selectMenu},dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(MainMenu)