import React from 'react'
import { Card, CardHeader, CardContent } from '@mui/material'

const CustomCard = (props) => {
    const {
        title,
        content,
    } = props
    return (
        <Card sx={{ height: 'max-content', padding: "1rem" }}>
            <CardHeader title={title} sx={{ textAlign: 'start' }} />
            <CardContent sx={{ textAlign: 'start', padding: 0}}>
                {content}
            </CardContent>
        </Card>
    )
}

export default CustomCard