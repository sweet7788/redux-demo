import React, { Component } from 'react'

import { connect } from 'react-redux'

import { fruitBuy } from '../store/action'

class Fruit extends Component {
    componentDidMount(){
        console.log(this.props)
        this.buyFruit.bind(this)
    }
    render() {
        const { dispatch,num} = this.props
        
        return (
            <div onClick={this.buyFruit.bind(this,dispatch,num)}>
                购买水果 {num}
            </div>
        )
    }
    buyFruit(dispatch,num){
        console.log(this.props)
        dispatch(fruitBuy(++num))
    }
}

export default connect(function(state){
    console.log(state.fruitbuy)
    return {
        num :state.fruitbuy.num
    }
})(Fruit)