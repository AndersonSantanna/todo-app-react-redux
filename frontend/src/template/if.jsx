import React from 'react'

export default props =>{
    if(props.name){
        return props.children
    }else{
        return false
    }
}