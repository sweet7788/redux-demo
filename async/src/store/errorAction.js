export default function errorAction({dispatch}){
    return next=>action=>{
        const {meta = {} , payload ,error} = action;
        next(action);
    }
}