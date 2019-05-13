import React , { Component } from 'react'

import { connect } from 'react-redux'

import { users } from './store/action'

class Asyncpage extends Component{
    constructor(props){
        super(props)
        this.dispatch = props.dispatch
        this._getUserInfo = this._getUserInfo.bind(this)
    }
    componentDidMount(){

    }
    render(){
        return (
            <div onClick={this._getUserInfo}>
                name: {this.props.name}
            </div>
        )
    }
    _getUserInfo(){
        this.dispatch(users())
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => response.json())
        // .then(json => console.log(json))
    }
}

export default connect(function(state){
    return {
        name:state.users.name
    }
})(Asyncpage)