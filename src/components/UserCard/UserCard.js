import React from "react";
import PropTypes from "prop-types";

import defaultPhoto from "AssetsRoot/svg/defaultPhoto.svg";
import { Tooltip } from "ComponentsRoot";

const UserCard = ({ user }) => {
  return (
    <article className="userCard">
      <img className="userCard__img"  src={user?.photo || defaultPhoto} alt='userImg' loading="lazy" />
      <Tooltip text={user?.name} style={{marginBottom: '20px'}}> 
        <h3 className="userCard__name">{user?.name}</h3>
      </Tooltip>
      <Tooltip text={user?.position}> 
        <h3 className="userCard__position">{user?.position}</h3>
      </Tooltip>
      <Tooltip text={user?.email}> 
        <h3 className="userCard__email">{user?.email}</h3>
      </Tooltip>
      <Tooltip text={user?.phone}> 
        <h3 className="userCard__phone">{user?.phone}</h3>
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
