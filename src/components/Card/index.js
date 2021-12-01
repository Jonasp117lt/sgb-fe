import React from 'react'
import { Card, CardHeader, CardContent, Button, Divider } from '@mui/material'
import { Link } from 'react-router-dom'



const CustomCard = (props) => {
    const {
        title,
        content,
        link,
        divider,
        withoutHeader
    } = props

    const CardTitle = () => (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>
                {title}
            </span>
            <Button variant="contained" component={Link} to={`${link}`} > + Nuevo</Button>
        </div >
    )
    const Wrapper = withoutHeader ? props => <div {...props}>{props.children}</div> : Card
    return (
        <Wrapper sx={{ height: 'max-content', padding: "30px" }}>
            {!withoutHeader && <CardHeader title={link ? <CardTitle /> : title} sx={{ textAlign: 'start', p: 0, mb: divider ? 1.5 : 2 }} />}
            {divider && <Divider sx={{ mb: 1 }} />}
            <CardContent sx={{ textAlign: 'start', p: 0 }}>
                {content}
            </CardContent>
        </Wrapper>
    )
}

export default CustomCard