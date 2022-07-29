import React from 'react';
import "./RightHomeTab.css";
const RightHomeTab = ({children,layout}) => {
  return (
    <div className= {`col-${layout} rightSide-container-partition`} >
      {children}
    </div>
  )
}

export default RightHomeTab