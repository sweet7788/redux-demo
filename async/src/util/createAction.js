export default function createAction(type,createHandle,metaHandle){
    let action = {
        type,
        payload:{},
        // meta: ({resolved=()=>{},rejected=()=>{}})=>{
        //     return {
        //         resolved,
        //         rejected
        //     }
        // }
        meta: {
            resolved:()=>{},
            rejected:()=>{}
        }
    }
    return (...arg)=>{
        if(typeof(createHandle) === "function"){
            action.payload = createHandle(...arg)
        }
        if(typeof(metaHandle) === "function"){
            action.meta = metaHandle(...arg)
        }
        return action;
    }
}