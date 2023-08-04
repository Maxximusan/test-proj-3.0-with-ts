import React from 'react'
import { CardItem } from "../CardItem/CardItem";

import { List } from "./cardList.styled";
import { IUser } from '../../types/types'

interface IUsersListProps {
  users: IUser[]
}

export const CardList = ({users}: IUsersListProps) => {
  // const { users } = props;

  return (
    <section>
      <List>
        {users.map((user) => (
          <CardItem key={user.id} card={user} />
        ))}
      </List>
    </section>
  );
};
