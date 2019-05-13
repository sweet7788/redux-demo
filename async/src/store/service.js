import request from '../util/request'

export function todos(){
    return request.get('/todos',{

    })
}