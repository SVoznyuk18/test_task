import React from "react";
import PropTypes from "prop-types";

import defaultPhoto from "AssetsRoot/svg/defaultPhoto.svg";
import { Tooltip } from "ComponentsRoot";

const UserCard = ({ user }) => {
  return (
    <article className="userCard">
      <img className="userCard__img"  src={user?.photo || defaultPhoto} alt='userImg' loading="lazy" />
      <Tooltip text={user?.name} style={{marginBottom: '20px'}}> 
        <p className="userCard__name">{user?.name}</p>
      </Tooltip>
      <Tooltip text={user?.position}> 
        <p className="userCard__position">{user?.position}</p>
      </Tooltip>
      <Tooltip text={user?.email}> 
        <p className="userCard__email">{user?.email}</p>
      </Tooltip>
      <Tooltip text={user?.phone}> 
        <p className="userCard__phone">{user?.phone}</p>
      </Tooltip>
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
