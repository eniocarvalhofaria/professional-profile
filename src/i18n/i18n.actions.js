export function changeLanguage(language){
    console.log(language)
    return {
        type: 'LANGUAGE_CHANGED',
        payload:language
    }
}