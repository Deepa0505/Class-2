import React from 'react'

function Address(props) {
    return (
        <div>
            <h3>Address</h3>
            <h4>City = { props.fCity } </h4>
            <h4>zip = { props.fZip } </h4>
        </div>
    )
}

export default Address