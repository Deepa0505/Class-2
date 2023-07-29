import React, { Component } from 'react'

class Ex7 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: 0
        }
    }

    incNum() {
        // handler in class component
        this.setState({
            num: this.state.num + 1
        })
    }

    addVal(val) {
        this.setState({
            num: this.state.num +val
        })
    }

    render() {
        return (
            <div>
                <h3>State handler in class component</h3>
                <h1>Num = { this.state.num } </h1>
                <hr />
                <button onClick={() => this.incNum()} >Add+1</button>
                <button onClick={() => this.addVal(10)} >Add+10</button>
                <button onClick={() => this.addVal(50)} >Add+50</button>
                <button onClick={() => this.addVal(70)} >Add+70</button>
            </div>
        )
    }
}

export default Ex7