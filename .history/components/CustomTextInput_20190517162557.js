import { Input } from 'native-base';

const CustomTextInput = ({ value, type, onChange, name, ...props }) => {
	retutn(<Input {...props} type={type} value={value} onChange={handleOnChangeValue} />);
};

export default CustomTextInput;
