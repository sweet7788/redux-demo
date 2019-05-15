import React , { Component } from 'react'

import { connect } from 'react-redux'

import { users,clearUserList } from '../store/action'

import { Route, Switch, Link, Prompt} from 'react-router-dom'

import  UserDetail  from './UserDetail'

class Asyncpage extends Component{
    constructor(props){
        super(props)

        this.dispatch = props.dispatch

        this._getUserInfo = this._getUserInfo.bind(this)
        this._clearUserInfo = this._clearUserInfo.bind(this)
        this.state = {
            userlist: []
        }
    }
    componentWillReceiveProps(nextProps){
        // console.log(this.props.userlist)
        this.setState({
            userlist : nextProps.userlist
        })
        console.log('asd')
    }
    render(){
        console.log(this.state.userlist)
        return (
            // <div onClick={this._getUserInfo}>
            //     name: {this.props.name}
            // </div>
            <div>
                <div onClick={this._getUserInfo}>users:</div>
                    <Prompt message={location=>{
                        alert('no')
                        return true
                    }}></Prompt>
                    <div>
                        {
                            this.state.userlist.length>0?this.props.userlist.map(function(ele,ind){
                                return (
                                    <Link className="link" key={ind} to={{ pathname: '/detail/'+ind }}>
                                        <span>{ele.title}</span>
                                    </Link>
                                )
                            }):''
                        }
                    </div>
                    {
                        this.state.userlist.length>0?
                        <div onClick={this._clearUserInfo}>
                            清除用户
                        </div>:''
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
    _clearUserInfo(){
        this.dispatch(clearUserList())
    }
}

export default connect(function(state){
    console.log(state)
    return {
        userlist:state.users.userlist
    }
})(Asyncpage)