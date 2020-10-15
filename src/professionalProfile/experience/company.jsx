import React,{Component} from 'react'
import LanguageDisplay from '../../i18n/languageDisplay'
import If from '../../common/operator/if'
export default class Company extends Component{
    constructor(props){
        super(props)
        this.alternate = this.alternate.bind(this)
        this.state = {showingInfo:false}
    }
    alternate(){
        this.setState({showingInfo:!this.state.showingInfo})
    }
    render(){
    return(
        <div>
            <table className='table-company' align='right'>
            <tbody>
                <tr>
                    <td align='right'>
                        <div className='experience-company-name'>
                            {this.props.company.name}
                        </div> 
                    </td>
                    <td rowSpan='2' className='logo-container' align='right' >
                        <img  src={this.props.company.logoUrl} className='experience-logo' alt={this.props.company.name}/>
                    </td>
                </tr>
                <tr>
                    <td className='icon-info'>
                      
                            <i className='fa fa-info-circle' onClick={this.alternate}/>
                              </td>
                </tr>
                <tr>
                    <td colSpan='2'>
                        <If test={this.state.showingInfo}>
                            <div className='company-info'>
                                <LanguageDisplay content={this.props.company.info} />
                            </div>
                        </If>
                       
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
                        
                        
     
    )
}
}