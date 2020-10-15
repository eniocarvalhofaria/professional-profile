const INITIAL_STATE = {
    selectedMenuItem:'Full content', 
    menuItemList:[
        {pt:'Conteúdo completo',en:'Full content'},
        {pt:'Experiência',en:'Experience'},
        {pt:'Competências',en:'Skills'},
        {pt:'Formação',en:'Education'},
        {pt:'Idiomas',en:'Languages'}
    ],
    sectionsVisibles:[
        'Experience',
        'Skills',
        'Languages',
        'Education',
    ]
}
export default (state = INITIAL_STATE,action)=>{
    const ret =  {...state}
    switch (action.type){
    case 'MENUITEM_CHANGED':
            ret.selectedMenuItem =action.payload 
            if( ret.selectedMenuItem === 'Full content')
            {
              ret.sectionsVisibles = [
                'Experience',
                'Skills',
                'Languages',
                'Education',
            ]  
            } else{
                ret.sectionsVisibles = [
                    action.payload 
                ]   
            }
        return ret
    default:
        return state
    }
}