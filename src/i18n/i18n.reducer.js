const INITIAL_STATE = {
    selectedLanguage:'pt', 
    languageList:[
        {code:'pt',name:'Português'},
        {code:'en',name:'English'}
    ]
}
export default (state = INITIAL_STATE,action)=>{
    const ret =  {...state}
    switch (action.type){
    case 'LANGUAGE_CHANGED':
            ret.selectedLanguage =action.payload
        return ret
    default:
        return state
    }
}