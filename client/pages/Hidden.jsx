import React from "react";
import { Navigate } from "react-router-dom";

const Hidden = ({ user }) => {
  // if (!user) {
  //   return (
  //     <Navigate to='/login' replace/>
  //   );
  // }

  return (
    <div>
      <h1>You Found My Secret!</h1>
    </div>
  );
}

export default Hidden;