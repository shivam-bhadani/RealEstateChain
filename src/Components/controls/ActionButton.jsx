import { Button, styled } from '@mui/material';

const ActionButton = (props) => {

	const { color, children, onClick } = props;

	const CustomButton = styled(Button)(({ theme }) => ({
		color: color,
		minWidth: 0,
		height: "fit-content",
		margin: theme.spacing(0)

	}));

	return (
		<CustomButton
			onClick={onClick}>
			{children}
		</CustomButton>
	)
}

export default ActionButton;