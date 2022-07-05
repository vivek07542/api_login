import React from 'react'

const CustomerDetail = ({detail}) => {
  return (
    <div className="customer-detail-container">
    <p> <span className="bold">ID: </span> {detail.id}</p>
    <p><span className="bold">Name : </span>{detail.Name}</p>
    <p><span className="bold">First Name : </span>{detail.firstName}</p>
    <p><span className="bold">Last Name : </span>{detail.lastName}</p>
    <p><span className="bold">Address : </span>{detail.address}</p>
    <p><span className="bold">Email : </span>{detail.email}</p>
    <p><span className="bold">Phone Number: </span>{detail.Phone}</p>
  </div>
  )
}

export default CustomerDetail