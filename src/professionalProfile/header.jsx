import React,{Component} from 'react'
import {connect} from 'react-redux'
import Grid from '../common/layout/grid'
import Row from '../common/layout/row'
import ProfileImage from './profileImage'
import LanguageDisplay from '../i18n/languageDisplay'
import Contact from './contact'
import If from '../common/operator/if'
import './header.css'
class Header extends Component{
    render(){
        const p = this.props.professionalProfile;
        return (
       
                <div className='header'>
         
                    <Row>  
                        <Grid cols='12 12 7 7 8' offset='0 0 1 1'>
                            <div className='header-text'>
                            <div className='profile-name'>
                                {p.name}
                            </div>
                            <div className='profile-role'>
                                <LanguageDisplay content={p.role}/>
                            </div> 
                            <div className='profile-locationTarget'>
                                <LanguageDisplay content={p.locationTarget}/>
                            </div> 
                            <div className='contact-container container'>
                                <Row>
                                    <Grid cols='12 12 12 12 6' classes='contact-grid'>
                                        <If test={p.contact.phoneNumber}>
                                            <Contact icon='phone' text={p.contact.phoneNumber} link={`tel:${p.contact.phoneNumber.replace(/ /g,'')}`}/>
                                        </If>
                                    </Grid>
                                    <Grid cols='12 12 12 12 6' classes='contact-grid'>
                                        <If test={p.contact.whatsApp}>
                                            <Contact icon='whatsapp' text={p.contact.whatsApp} link={`https://wa.me/${p.contact.whatsApp.replace('+','').replace(/ /g,'')}`}/>
                                        </If>
                                    </Grid>
                                    <Grid cols='12 12 12 12 6' classes='contact-grid'>
                                        <If test={p.contact.emailAddress}>
                                            <Contact icon='envelope' text={p.contact.emailAddress} link={`mailto:${p.contact.emailAddress}`}/>
                                        </If>
                                    </Grid>
                                    <Grid cols='12 12 12 12 6' classes='contact-grid'>
                                        <If test={p.contact.skypeId}>
                                            <Contact icon='skype' text={p.contact.skypeId} link={`skype:${p.contact.skypeId}?chat`}/>
                                        </If>
                                    </Grid>
                                </Row>
                             </div>
                            {/* <div className='contact-container'>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>
                                        <If test={p.contact.phoneNumber}>
                                            <Contact icon='phone' text={p.contact.phoneNumber} link={`tel:${p.contact.phoneNumber.replace(/ /g,'')}`}/>
                                        </If>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <If test={p.contact.whatsApp}>
                                            <Contact icon='whatsapp' text={p.contact.whatsApp} link={`https://wa.me/${p.contact.whatsApp.replace('+','').replace(/ /g,'')}`}/>
                                        </If>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <If test={p.contact.emailAddress}>
                                            <Contact icon='envelope' text={p.contact.emailAddress} link={`mailto:${p.contact.emailAddress}`}/>
                                        </If>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                        <If test={p.contact.skypeId}>
                                            <Contact icon='skype' text={p.contact.skypeId} link={`skype:${p.contact.skypeId}?chat`}/>
                                        </If>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                             </div> */}
                            </div>
                           
                           
                            
                        </Grid>
                        <Grid cols='12 12 4 4 4'>
                            <ProfileImage src={p.profileImageUrl} alt={p.name}/>
                        </Grid> 
                       
                    </Row>
                  
                </div>
                
              
        
        )
    }
} 
const mapStateToProps = state => ({professionalProfile:state.professionalProfile})
export default connect(mapStateToProps,null)(Header)