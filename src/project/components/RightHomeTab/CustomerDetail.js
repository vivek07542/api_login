import React from 'react'

const CustomerDetail = ({detail}) => {
  return (
    <div className="customer-detail-container">
    <p> <span className="bold">ID: </span> {detail.id}</p>
    <p><span className="bold">First Name : </span>{detail.FirstName}</p>
    <p><span className="bold">Last Name : </span>{detail.LastName}</p>
    <p><span className="bold">Address : </span>{detail.Address}</p>
    <p><span className="bold">Email : </span>{detail.Email}</p>
    <p><span className="bold">Phone Number: </span>{detail.Phone}</p>
  </div>
  )
}

export default CustomerDetail