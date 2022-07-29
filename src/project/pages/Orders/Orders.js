import React from "react";

import Header from "../../../common/components/Header/Header";
import Footer from "../../../common/components/Footer/Footer";
import Body from "../../../common/components/Body/Body";
import SideNav from '../../../common/components/SideNav/SideNav';
import Spinner from "../../../common/components/Spinner/Spinner";
const Orders = () => {
  return (
    <div>
    <Header />
    <div className="container-flex d-flex">
      <SideNav/>
      <div className="w-100 ">
        <Body className="row mx-auto" >
          Orders Page
        </Body>
        
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default Orders
