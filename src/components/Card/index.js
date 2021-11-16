import React from 'react'
import { Card, CardHeader, CardContent } from '@mui/material'

const CustomCard = (props) => {
    const {
        title,
        content,
    } = props
    return (
        <Card sx={{ height: 'max-content', padding: "30px" }}>
            <CardHeader title={title} sx={{ textAlign: 'start', p: 0, mb: 2 }} variant='h2' />
            <CardContent sx={{ textAlign: 'start', p: 0 }}>
                {content}
            </CardContent>
        </Card>
    )
}

export default CustomCard