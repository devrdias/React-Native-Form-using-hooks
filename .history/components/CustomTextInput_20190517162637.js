import { Input } from 'native-base';

const CustomTextInput = ({ value, type, onChange, name, ...props }) => {
	retutn(
		<Input {...props} type={type} value={value} onChange={value => onChange(name, type, value)} />
	);
};

export default CustomTextInput;
