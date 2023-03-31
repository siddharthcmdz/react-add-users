import React from 'react'
import Card from '../ui/Card'
import classes from './UserList.module.css'

const UserList = props => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => <li key={Math.random().toString()}>{user.name}  ({user.age}  years old)</li>)}
            </ul>
        </Card>
    )
}

export default UserList