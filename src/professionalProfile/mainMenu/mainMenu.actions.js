export function selectMenu(item){
    console.log(item)
    return {
        type: 'MENUITEM_CHANGED',
        payload:item
    }
}