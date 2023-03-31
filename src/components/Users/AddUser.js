import React from 'react'
import { useState } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'
import ErrorModel from '../ui/ErrorModel'
import classes from './AddUser.module.css'

const AddUser = props => {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = event => {
        event.preventDefault()
        if (username.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'please enter a valid non empty name and age'
            });
            return
        }
        if (+age < 1) {
            setError({
                title: 'invalid age',
                message: 'please enter a valid age > 0'
            })
            return
        }

        props.onAddUser(username, age)
        console.log(username, age)
        setUsername('')
        setAge('')
    }

    const usernameChangeHandler = event => {
        setUsername(event.target.value)
    }

    const ageChangeHandler = event => {
        setAge(event.target.value)
    }

    const fieldsReset = () => {
        console.log('button clicked')
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>

            {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' value={username} type="text" onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" value={age} onChange={ageChangeHandler} />
                    <Button type="submit" onClick={fieldsReset}>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser