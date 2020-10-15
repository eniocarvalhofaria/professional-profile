import {combineReducers} from 'redux'
import ProfessionalProfileReducer from '../professionalProfile/professionalProfile.reducer'
import I18nReducer from '../i18n/i18n.reducer'
import MainMenuReducer from '../professionalProfile/mainMenu/mainMenu.reducer'
const rootReducer = combineReducers({
    professionalProfile:ProfessionalProfileReducer,
    i18n:I18nReducer,
    mainMenu:MainMenuReducer
})

export default rootReducer