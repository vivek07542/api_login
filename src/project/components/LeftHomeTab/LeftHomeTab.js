import React from "react";
import "./LeftHomeTab.css";
import Button from "../../../common/components/Button/Button";
const LeftHomeTab = ({getAllHandler}) => {
  return (
    <div className="col-2 leftSide-container-partition">
      <div className="form-button-container">
        <Button type="button" className="draft-blue-homeForm draft-homeForm" onClick={getAllHandler}>
          get All
        </Button>
        <Button type="button" className="draft-homeForm">
          By Clients
        </Button>
        <Button type="button" className="draft-green-homeForm draft-homeForm">
          By Data
        </Button>
      </div>
    </div>
  );
};

export default LeftHomeTab;
