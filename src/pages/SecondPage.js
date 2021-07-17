import React, {useEffect, useContext} from 'react'
import {fetchGetTodoData} from '../apis/index'
import { Store } from '../store/index'
import { GET_TODODATA } from '../actions/index'
import CardSecond from '../components/CardSecond'
 
const SecondPage = () => {
    const {globalState, setGlobalState} = useContext(Store)
    useEffect(() => {
        fetchGetTodoData().then(res => {
            setGlobalState({
            type: GET_TODODATA,
            data: res.data
        })
    })
},[])
console.log(globalState)
return(
<div style={{display: 'flex',flexWrap:'wrap'}}>
{
    globalState.comment_data.map((comment, index) => {
    return (
        <CardSecond comment={comment} key={index} />
        )
    })
    }
</div>

)}

export default SecondPage; 