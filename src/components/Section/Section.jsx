import PropTypes from "prop-types";
import { Wrapper, Title } from "./Section.styles";
import { ImBubbles3, ImStatsBars } from "react-icons/im";

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      {title && (
        <Title>
          {title}
          {title === "Please leave feedback" && <ImBubbles3 />}
          {title === "Statistics" && <ImStatsBars />}
        </Title>
      )}

      {children}
    </Wrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
