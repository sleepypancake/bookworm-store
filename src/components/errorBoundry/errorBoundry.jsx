import React, { Component } from 'react'
import { ErrorIndicator } from '../errorIndicator/errorIndicator'

export class ErrorBoundry extends Component {
    
    state = {
        hasError: false
    }
    componentDidCatch() {
        this.setState({ hasError: true })
    }
    
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return this.props.children;
    }
}