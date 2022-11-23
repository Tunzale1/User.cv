import Contacts from '../Contacts/Contacts'
import Info from '../Info/Info'
import Experience from '../Experience/Experience'


import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
        <>
    <h1>User</h1>
    <Info/>
    <Experience/>
    <Contacts/>
  </>
    )
  }
}
export default User