import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch, useSelector} from 'react-redux'
import {current} from '../JS/Actions/user'
const Profile = () => {
  const user = useSelector(state=>state.userReducer.user)
  const dispatch = useDispatch()
// console.log(user)
useEffect(() => {
  dispatch(current())
}, [dispatch])

  return (
    <div>
        <h1>Profile</h1>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user && user.image} />
      <Card.Body>
        <Card.Title>{user && user.name}</Card.Title>
        <Card.Text>
         {user && user.email}
         {user && user.phone}
        </Card.Text>
        <Button variant="primary">OK</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile