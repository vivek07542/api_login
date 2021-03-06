import React from "react";
import "./LeftHomeTab.css";
import Button from "../../../common/components/Button/Button";
const LeftHomeTab = ({getAllHandler}) => {
  return (
    <div className="col-2 leftSide-container-partition">
      <div className="form-button-container">
        <Button type="button" className="getDetailButton" onClick={getAllHandler}>
          Get Customer
        </Button>
      </div>
    </div>
  );
};

export default LeftHomeTab;
