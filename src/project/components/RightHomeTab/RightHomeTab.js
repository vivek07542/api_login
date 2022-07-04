import React from 'react';
import "./RightHomeTab.css";
const RightHomeTab = ({children}) => {
  return (
    <div className="col-10 rightSide-container-partition">
      {children}
    </div>
  )
}

export default RightHomeTab