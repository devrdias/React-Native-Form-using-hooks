import { Input } from 'native-base';

const CustomTextInput = ({ value, type, onChange, name, ...props }) => {
	debugger;
	return <Input {...props} value={value} onChange={event => onChange(name, type, value)} />;
};

export default CustomTextInput;
