import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ClassicButton, UserCard } from "ComponentsRoot";
import {getOffsetUsers} from "ActionsRoot";

const Users = ({}) => {

  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const {totalPages} = useSelector(state => state.users); 
  const {users} = useSelector(state => state.users); 

  useEffect(() => {
    if(page > 1) {
      dispatch(getOffsetUsers({page}))
    }
  }, [page])

  return (
    <section className="users">
      <h2 className="users__title">Working with GET request</h2>
      <div className="users__list">
        {users.length > 0 &&
          users.map((user) => <UserCard key={user?.id} user={user} />)}
      </div>
      <ClassicButton onClick={() => setPage(page + 1)} disabled={page === totalPages}>Show more</ClassicButton>
    </section>
  );
};

export default Users;
