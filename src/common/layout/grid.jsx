import React,{Component} from 'react'

export default class Grid extends Component{
toCssClasses(numbers,offsetNumbers,classNames){
    const cols = numbers? numbers.split(' '):[]
    const offset = offsetNumbers? offsetNumbers.split(' '):[]
    let classes= 'grid '
    if(cols[0]) classes += ` col-xs-${cols[0]}`
    if(cols[1]) classes += ` col-sm-${cols[1]}`
    if(cols[2]) classes += ` col-md-${cols[2]}`
    if(cols[3]) classes += ` col-lg-${cols[3]}`
    if(cols[4]) classes += ` col-print-${cols[4]}`
    if(offsetNumbers != ' ')
    {
        if(offset[0]) classes += ` col-xs-offset-${offset[0]}`
        if(offset[1]) classes += ` col-sm-offset-${offset[1]}`
        if(offset[2]) classes += ` col-md-offset-${offset[2]}`
        if(offset[3]) classes += ` col-lg-offset-${offset[3]}`
        if(offset[4]) classes += ` col-print-offset-${offset[4]}`
    }
    if(classNames)
    {
        classes += ' ' + classNames
    }

    return classes
}
    render(){
        const gridClasses = this.toCssClasses(this.props.cols || '12',this.props.offset || ' ',this.props.classes)

        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}