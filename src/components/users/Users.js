import React from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const Users = ({ users, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem key={user.id} users={user} />
      ))}
    </div>
  );
  // if(loading){
  //   return <Spinner/>
  // }else{
  //   return (
  //     <div style={userStyle}>
  //       {users.map(user => (
  //         <UserItem key={user.id} users={user} />
  //       ))}
  //     </div>
  //   );
  // }
};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};
export default Users;
