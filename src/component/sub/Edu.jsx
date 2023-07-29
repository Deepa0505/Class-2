import React from 'react'

function Edu(props) {
    return (
        <div>
            <h3>Education</h3>    
            <h4> Type = { props.fType } </h4>
            <h4> Title = { props.fTitle } </h4>
            <h4> Year = { props.fYear } </h4> 
        </div>
    )
}

export default Edu