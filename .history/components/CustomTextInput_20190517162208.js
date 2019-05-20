import { Input } from 'native-base';

const CustomTextInput = () => {
	retutn(
		<Input
			name="username"
			type="text"
			value={values.username || ''}
			onChange={handleOnChangeValue}
		/>
	);
};

export default CustomTextInput;
