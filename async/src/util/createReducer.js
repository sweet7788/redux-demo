export default function(initState,actionHandle){
    return (state=initState,action)=>{
        const reduceFn = actionHandle[action.type]   //传统reducer的 switch 部分
        if(!reduceFn) return state 

        return {...state,...reduceFn(state,action)}   //传统reducer的 Object.assign({},state,{ payload })部分

    }
}