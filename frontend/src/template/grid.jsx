import React, {Component} from 'react'

export default class Grid extends Component{
    toCssClasses(numbers){
        const cols = numbers? numbers.split(' ') : []
        
        let classes = cols[0]?`col-xs-${cols[0]} `: ''
        classes += cols[1] ? `col-sm-${cols[1]} `: '' 
        classes += cols[2] ? `col-md-${cols[2]} `: ''
        classes += cols[3] ? `col-lg-${cols[3]} `: ''

        return classes
    }
    render(){
        const gridClasses = this.toCssClasses(this.props.cols || 12)
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}