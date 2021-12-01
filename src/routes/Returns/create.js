import React, { useEffect } from 'react'
import Card from "../../components/Card"
import ReturnForm from "../../components/forms/return"
import { single_return } from '../../constants/mockupData'

export const CreateReturn = () => {

    const [_return, setReturn] = React.useState(null)

    const getReturn = () => {
        setReturn(single_return)
    }

    useEffect(()=>{
        getReturn()
    },[])

    const Form = <ReturnForm data={_return} />
    return (
        <Card
            title='Registrar Devolución'
            content={Form}
        />
    )
}

export default CreateReturn
