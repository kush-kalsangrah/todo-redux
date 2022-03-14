const  iniialData = {
    list:[]
}
const collect=(state=iniialData,action)=>{
    switch(action.type){
        case "add":
            const{data,id}=action.payload
            return {
                ...state,
                list:[...state.list,{
                    id:id,
                    data:data
                }]
            }
            case "delete":
                const newlist=state.list.filter((p)=>p.id!==action.id)
                return{
                    ...state,
                    list:newlist
                }

                case "remove" :
                    return{
                        list:[]
                    }
                    default:return state

    }
    

}
export default collect