import React from "react";
import PropTypes from "prop-types";

const UserItem = ({ users: { avatar_url, login, html_url } }) => {
  return (
    <div className="card text-center my-1">
      <img
        src={avatar_url}
        alt="imgUrl"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          {" "}
          More{" "}
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  users: PropTypes.object.isRequired
};

export default UserItem;
