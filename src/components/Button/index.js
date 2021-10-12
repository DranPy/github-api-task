import Loader from "../Loader";
import PropTypes from "prop-types";
import { StyledButton } from "./styled";

const Button = (props) => {
  const { children, isLoading, ...rest } = props;

  return (
    <StyledButton {...rest}>
      {isLoading ? (
        <Loader isInline={true} color="#ffffff" size="1x" />
      ) : (
        children
      )}
    </StyledButton>
  );
};

Button.propTypes = {
  isLoading: PropTypes.bool,
};

export default Button;
