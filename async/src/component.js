import React , { Component } from 'react'

import { connect } from 'react-redux'

import { users } from './store/action'

class Asyncpage extends Component{
    constructor(props){
        super(props)

        this.dispatch = props.dispatch

        this._getUserInfo = this._getUserInfo.bind(this)
    }
    componentWillMount(){
        // console.log(this.props.userlist)
        // this.userlist = this.props.userlist
        console.log('asd')
    }
    render(){
        console.log(this.props)
        return (
            // <div onClick={this._getUserInfo}>
            //     name: {this.props.name}
            // </div>
            <div>
                <div onClick={this._getUserInfo}>users:</div>
                {
                    this.props.userlist.length>0?this.props.userlist.map(function(ele,ind){
                        return (
                            <div key={ind}>
                                {ele.title}
                            </div>
                        )
                    }):''
                }
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
    console.log(state)
    return {
        userlist:state.users.userlist
    }
})(Asyncpage)