import { Input } from 'native-base';

const CustomTextInput = ({ value, type, onChange, name, ...props }) => {
	debugger;
	return <Input {...props} value={value} onChange={value => onChange(name, type, value)} />;
};

export default CustomTextInput;
