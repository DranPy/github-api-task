import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledLoader } from "./styled";

const Loader = ({ size = "2x", isInline = false, ...rest }) => {
  return (
    <StyledLoader isInline={isInline}>
      <FontAwesomeIcon icon="baseball-ball" spin={true} size={size} {...rest} />
    </StyledLoader>
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf(["1x", "2x", "3x"]),
  isInline: PropTypes.bool,
};

export default Loader;
