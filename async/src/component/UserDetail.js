import React,{ Component } from 'react'


class UserDetail extends Component{
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(props){
        console.log(props)
    }
    render(){
        console.log(this.props.match.params.id)
        return (
            <div>
                asd
            </div>
        )
    }
}
export default UserDetail