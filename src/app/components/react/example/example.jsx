import React, {Component} from 'react'
import { render } from 'react-dom';
import ExampleDirective from './ExampleDirective'

class ExampleComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            title: 'Example React Component'
        }
    }
    render () {
        let myStyle = {
            border: '1px solid red',
            margin: '10px',
            padding: '4px'
        }
        return (
            <div style={myStyle}>
                <h3>{this.state.title}</h3>
                <ExampleDirective />
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default ExampleComponent
