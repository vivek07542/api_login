import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../../common/components/Header/Header";
import Footer from "../../../common/components/Footer/Footer";
import Body from "../../../common/components/Body/Body";
import LeftHomeTab from "../../components/LeftHomeTab/LeftHomeTab";
import RightHomeTab from "../../components/RightHomeTab/RightHomeTab";
import CustomerDetail from "../../components/RightHomeTab/CustomerDetail";
import * as action from "../../reduers/IgniteRedux/IgniteRedux";

import Tables from "../../../common/components/Table/Tables";

import Spinner from "../../../common/components/Spinner/Spinner";
// import Heading from "../../../common/components/Heading/Heading";
import Jumbotron from "../../../common/components/Jumbotron/Jumbotron";
import { coloumnConfig } from "./Config";

const Home = () => {
  const [state] = useState({
    pageNumber: 1,
    searchQuery: "",
    sortDirection: "desc",
    sortExpression: "",
    limit: 5,
  });
  const dispatch = useDispatch();

  const tableData = useSelector((state) => state.Ignite.tableData);
  const editObject = useSelector((state) => state.Ignite.editObject);
  const editObjectMode = useSelector((state) => state.Ignite.editMode);
  const loading = useSelector((state) => state.Ignite.loading);
 
  const getAllHandler = () => {
    dispatch(action.initilizeIgniteInit(state));
  };

  const onIdSelectHandler = (id) => {
    dispatch(action.getByIdIgniteInit(id, true));
  };
  let customerDetails = editObject.map((e,i) => {
    return(
      <CustomerDetail detail={e} key={i}/>
    )
  })
  return (
    <div>
      <Header />
      <div className="container-flex d-flex">
        <div className="w-100">
          <Body className="row mx-auto">
            <LeftHomeTab getAllHandler={() => getAllHandler()} />
            <RightHomeTab>
              {tableData.length !== 0 && !editObjectMode && (
                <>
                 <Jumbotron title="Customers List" children = {<Tables
                    tableData={tableData}
                    coloumnConfig={coloumnConfig}
                    breakOn={"large"}
                    onIdSelectHandler={(id) => onIdSelectHandler(id)}
                  />}/>
                </>
              )}
              {editObjectMode && (
                <>
                  <Jumbotron title="Customer Detail" children = {customerDetails}/>
                </>
              )}
            </RightHomeTab>
          </Body>
          {loading && <Spinner loading={true} />}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
