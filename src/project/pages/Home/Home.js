import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../../../common/components/Header/Header";
import Footer from "../../../common/components/Footer/Footer";
import Body from "../../../common/components/Body/Body";
// import SideNav from '../../../common/components/SideNav/SideNav';
import LeftHomeTab from "../../components/LeftHomeTab/LeftHomeTab";
import RightHomeTab from "../../components/RightHomeTab/RightHomeTab";

import * as action from "../../reduers/IgniteRedux/IgniteRedux";

import Tables from "../../../common/components/Table/Tables";
// import Pagination from '../../../common/components/Pagination/Pagination';

import Spinner from "../../../common/components/Spinner/Spinner";
import Heading from "../../../common/components/Heading/Heading";

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
                  <Heading>All Details</Heading>
                  <Tables
                    tableData={tableData}
                    coloumnConfig={coloumnConfig}
                    breakOn={"large"}
                    onIdSelectHandler={(id) => onIdSelectHandler(id)}
                  />
                </>
              )}
              {editObjectMode && (
                <>
                  <Heading>By ID</Heading>
                  <Tables
                    tableData={editObject}
                    coloumnConfig={coloumnConfig}
                    breakOn={"large"}
                  />
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
