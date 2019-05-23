export default function createAction(type,createHandle,metaHandle){
    let action = {
        type,
        payload:{},
        meta: ({resolved=()=>{},rejected=()=>{}})=>{
            return {
                resolved,
                rejected
            }
        }
    }
    return (...arg)=>{
        if(typeof(createAction) === "function"){
            action.payload = createHandle(...arg)
        }
        if(typeof(metaHandle) === "function"){
            action.meta = metaHandle(...arg)
        }
        return action;
    }
}