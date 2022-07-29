import React from "react";

import Header from "../../../common/components/Header/Header";
import Footer from "../../../common/components/Footer/Footer";
import Body from "../../../common/components/Body/Body";
import SideNav from '../../../common/components/SideNav/SideNav';

const Reports = () => {
  return (
    <div>
    <Header />
    <div className="container-flex d-flex">
      <SideNav/>
      <div className="w-100 ">
        <Body className="row mx-auto" >
          Reports Page
        </Body>
        
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default Reports
