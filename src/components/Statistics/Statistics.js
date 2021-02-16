import React from "react";
import PropTypes from "prop-types";
import { SectionStatistics } from "./Statistics.styled";
import { FirstFont } from "./Statistics.styled";
import { List } from "./Statistics.styled";
import { ListItem } from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      <h2>{title}</h2>

      <List>
        {stats.map((el) => (
          <ListItem key={el.id}>
            <FirstFont>{el.label}</FirstFont>
            <FirstFont>{el.percentage}</FirstFont>
          </ListItem>
        ))}
      </List>
    </SectionStatistics>
  );
};

Statistics.defaultProps = {
  title: "Upload stats",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;
