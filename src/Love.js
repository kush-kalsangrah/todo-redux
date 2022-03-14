import React from 'react'
import { DELETE, REMOVE } from './Action/Action'
import {useDispatch,useSelector} from 'react-redux'

function Love() {
     const list = useSelector(state => state.collect.list)
    const dispatch =useDispatch()
    return (
        <div>
            <h1>{list.map((p)=>{
                return(
                    <div key={p.id}>{p.data}
                    <button onClick={()=>dispatch(DELETE(p.id))}>delete</button>
                    </div>
                )
            })}</h1>
           <button onClick={()=>dispatch(REMOVE())}>Remove All</button>
        </div>
    )
}

export default Love
