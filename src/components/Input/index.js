import { useField } from "formik";
import { StyledInput } from "./styled";

const Input = (props) => {
  const { name, id, isInline = true, type = "text", ...rest } = props;
  const [field, meta] = useField({ id, name, type, ...rest });

  return (
    <StyledInput
      type={type}
      id={id || name}
      name={name}
      isInline={isInline}
      isInvalid={meta.touched && meta.error != null}
      {...field}
      {...rest}
    />
  );
};

export default Input;
