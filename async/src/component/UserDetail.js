import React,{ Component } from 'react'
import { Link, Route} from 'react-router-dom'

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
                <Link to={this.props.match.url + '/again'}>再次进入detial</Link>
                <Route exact path={this.props.match.url + '/again'} render={(props)=>{
                    return (
                        <div>again</div>
                    )
                }}></Route>
            </div>
        )
    }
}
export default UserDetail