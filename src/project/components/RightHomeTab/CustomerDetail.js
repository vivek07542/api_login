import React from 'react';
import user from "../../../assets/Images/user-icons.png";
import UserIcon from '../../../common/components/UserIcon/UserIcon';
const CustomerDetail = ({detail}) => {
  return (
    <div className="customer-detail-container">
        <div class="card" style={{width: "18rem"}}>
        <div className="card-img-container">
          <div className='card-id-top'>{detail.id}</div>
          <img className='card-img-top' src={user} alt="user"/>
          {/* <UserIcon className="card-img-top">{detail.FirstName}</UserIcon> */}
        </div>
            <div className="card-body">
              <h5 className="card-title">{`${detail.FirstName} ${detail.LastName}`}</h5>
              <p className="card-text text-center">{detail.Address}</p>
              <a href="/#" className="card-link">{detail.Email}</a>
              <a href="/#" className="card-link">{detail.Phone}</a>
            </div>
        </div>

  </div>
  )
}

export default CustomerDetail