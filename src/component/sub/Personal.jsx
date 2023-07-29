import React from 'react'

function Personal(props) {
    return (
        <div>
            <h3>Personal</h3>
            <h4> name = { props.fName } </h4>
            <h4> email = { props.fEmail } </h4>
            <h4> mobile = { props.fMobile } </h4>
        </div>
    )
}

export default Personal