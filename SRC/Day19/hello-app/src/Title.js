import React from 'react'

function Title(props) {
    console.log("---->",props)

   let  style_a ={
        // "background-color":"red"
        "padding":"5px",
        "border":"solid 2px black",
        "margin": "2px"
    }
    return (
        <div style={style_a}>
        <div>This is a Title Component</div>
        <div>{props.title_name}</div>
        </div>
    )
}

export default Title
