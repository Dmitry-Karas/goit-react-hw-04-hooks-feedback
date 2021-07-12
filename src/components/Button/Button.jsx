import PropTypes from "prop-types";
import { Btn } from "./Button.styles";
import { ImHappy, ImNeutral, ImAngry } from "react-icons/im";

const Button = ({ feedback, onClick }) => {
  return (
    <Btn type="button" data-feedback={feedback} onClick={onClick}>
      {feedback === "good" && (
        <ImHappy size="100" color="limegreen" style={{ marginBottom: 10 }} />
      )}
      {feedback === "neutral" && (
        <ImNeutral size="100" color="darkgrey" style={{ marginBottom: 10 }} />
      )}
      {feedback === "bad" && (
        <ImAngry size="100" color="tomato" style={{ marginBottom: 10 }} />
      )}
      {feedback}
    </Btn>
  );
};

Button.propTypes = {
  feedback: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
