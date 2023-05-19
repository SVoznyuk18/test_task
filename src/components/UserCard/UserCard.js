import React from "react";
import PropTypes from "prop-types";

import defaultPhoto from "AssetsRoot/svg/defaultPhoto.svg";
import { Tooltip } from "ComponentsRoot";


const UserCard = ({ user }) => {
  return (
    <article className="userCard">
      <img className="userCard__img" src={user?.photo || defaultPhoto} />
      <div className="userCard__name">
        <Tooltip text={user?.name}>{user?.name}</Tooltip>
      </div>
      <div className="userCard__name">
        <Tooltip text={user?.position}>{user?.position}</Tooltip>
      </div>
      <div className="userCard__name">
        <Tooltip text={user?.email}>{user?.email}</Tooltip>
      </div>
      <div className="userCard__name">
        <Tooltip text={user?.phone}>{user?.phone}</Tooltip>
      </div>
    </article>
  );
};

UserCard.propTypes = {
  user: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]))
}

UserCard.defaultProps = {
  user: {}
}

export default UserCard;
