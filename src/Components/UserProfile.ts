export interface userData{
    userInfo: {
    firstName: string,
    lastName: string,
        dateOfBirth: string,
    gender: 'Male' | 'Female' | 'Other'

    
},
address: {
    streetNumber:number,
    streetName: string,
    country:  string,
}
contactInfo:{
    email: string,
    phone: string,
    emergencyContact: {
      name: string,
      relationship: string,
      phone: string,
    }
}

} 