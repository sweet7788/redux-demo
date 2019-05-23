export default function asyncAction({dispatch}){
    return next=>action=>{
        const {meta={},payload,error} = action;
        const {resolved,rejected} = meta;
        error ? (rejected && rejected(payload)) : (resolved&& resolved(payload));
        next(action);
    }
}