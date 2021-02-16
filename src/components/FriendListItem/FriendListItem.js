import React from "react";
import PropTypes from "prop-types";
import { Status } from "./FriendListItem.styled";
import { Item } from "./FriendListItem.styled";
import { Img } from "./FriendListItem.styled";
import { Name } from "./FriendListItem.styled";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Img src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
FriendListItem.defaultProps = {
  avatar: "https://i.ibb.co/YfKsBj0/8552515751438644-1.jpg",
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
