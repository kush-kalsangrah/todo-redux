 export const ADD=(data)=>{
    return {
        type:"add",
        payload:{
        id:new Date().getTime().toString(),
        data:data
    }
    }
}
export const DELETE=(id)=>{
    return{
        type:"delete",
        id:id
    }
}
export const REMOVE=(id)=>{
    return {
        type:"remove",
        id:id
    }

}