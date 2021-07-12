import React from "react";
import PropTypes from "prop-types";
import { ImHappy, ImNeutral, ImAngry, ImCool, ImGrin } from "react-icons/im";
import { List, Item, Text } from "./Statistics.styles";

const Statistics = ({ good, neutral, bad, total, positivePercentage = 0 }) => {
  return (
    <List>
      <Item>
        <Text good>
          <ImHappy /> Good: {good}
        </Text>
      </Item>
      <Item>
        <Text neutral>
          <ImNeutral /> Neutral: {neutral}
        </Text>
      </Item>
      <Item>
        <Text bad>
          <ImAngry /> Bad: {bad}
        </Text>
      </Item>
      <Item>
        <Text total>
          <ImCool /> Total: {total}
        </Text>
      </Item>
      <Item>
        <Text percentage>
          <ImGrin />
          Positive: {positivePercentage} %
        </Text>
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
