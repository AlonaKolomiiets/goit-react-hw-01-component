import React from "react";
import PropTypes from "prop-types";
import { CardProfile } from "./Profile.styled";
import { ImgProfile } from "./Profile.styled";
import { SecondFont } from "./Profile.styled";
import { DescriptionDiv } from "./Profile.styled";
import { FirstFont } from "./Profile.styled";
import { Stats } from "./Profile.styled";
import { List } from "./Profile.styled";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <CardProfile>
      <DescriptionDiv>
        <ImgProfile src={avatar} alt="Аватар пользователя" />
        <FirstFont>{name}</FirstFont>
        <SecondFont>@ {tag}</SecondFont>
        <SecondFont>{location}</SecondFont>
      </DescriptionDiv>

      <Stats>
        <List>
          <FirstFont>Followers</FirstFont>
          <SecondFont>{stats.followers}</SecondFont>
        </List>
        <List>
          <FirstFont>Views</FirstFont>
          <SecondFont>{stats.views}</SecondFont>
        </List>
        <List>
          <FirstFont>Likes</FirstFont>
          <SecondFont>{stats.likes}</SecondFont>
        </List>
      </Stats>
    </CardProfile>
  );
};

Profile.defaultProps = {
  img: "https://i.ibb.co/YfKsBj0/8552515751438644-1.jpg",
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
};

export default Profile;
