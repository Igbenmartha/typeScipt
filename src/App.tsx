import React from 'react'
import { userData } from './Components/UserProfile'

const App = () => {
  const user :userData={
    userInfo:{
      firstName: "Martha",
      lastName:"Igben",
          dateOfBirth: "6, Nov",
    gender: 'Female'

    },
    address: {
      streetNumber:46,
      streetName: "Tolu Road",
      country:  "Nigeria",
     
  },
  contactInfo:{
    email: "igbenfeji@gmail.com",
    phone:"08109232231",
    emergencyContact: {
      name: "mary",
      relationship: "sister",
      phone: "0908877466",
    }
  }

  }
  return (
    <div>
      <p>FirstName: {user.userInfo.firstName}</p>
      <p>LastName: {user.userInfo.lastName}</p>
      <p>Address: {user.address.streetNumber}, {user.address.streetName},{user.address.country}
        <p>Emergency Contact : {user.contactInfo.emergencyContact.name}</p>
</p>
    </div>
  )
}

export default App