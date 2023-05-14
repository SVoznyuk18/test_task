import React from "react";

import defaultPhoto from "AssetsRoot/svg/defaultPhoto.svg";

const UserCard = ({ user }) => {
  return (
    <article className="userCard">
      <img className="userCard__img" src={user?.photo || defaultPhoto} />
      <p className="userCard__name">{user?.name}</p>
      <p className="userCard__position">{user?.position}</p>
      <p className="userCard__email">{user?.email}</p>
      <p className="userCard__phone">{user?.phone}</p>
    </article>
  );
};

export default UserCard;
