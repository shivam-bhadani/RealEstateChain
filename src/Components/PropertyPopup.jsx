import * as React from 'react';
import { Height } from "@mui/icons-material";
import { styled, Dialog, DialogContent, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from '@mui/icons-material/Close';
import ActionButton from "./controls/ActionButton";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(
	props,
	ref,
) {
	return <Slide direction="down" ref={ref} {...props} />;
});

const PropertyPopup = ({ openPopup, setOpenPopup, propertyImg, price, address, bedrooms, bathrooms, space }) => {

	const DialogBox = styled(Dialog)(({ theme }) => ({
		padding: theme.spacing(2),
		[theme.breakpoints.down("md")]: {
			padding: theme.spacing(0),
		},
	}));

	const DialogContentBox = styled(DialogContent)(({ theme }) => ({
		display: "flex",
		justifyContent: "space-between",
		gap: theme.spacing(5),
		[theme.breakpoints.down("md")]: {
			gap: theme.spacing(0),
		},
	}))

	const ImgContainer = styled(Box)(({ theme }) => ({
		// padding: theme.spacing(10, 0),
		maxWidth: "50%",
		height: "300px",
		display: "flex",
		padding: theme.spacing(4, 0),
		[theme.breakpoints.down("md")]: {
			width: "100%",
			height: "auto",
			padding: theme.spacing(0, 0),
			maxWidth: "100%",
		},
	}));

	const ContractContent = styled(Box)(({ theme }) => ({
		display: "flex",
		justifyContent: "space-between",
		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
			alignItems: "center",
		},
	}));

	return (
		<DialogBox
			open={openPopup}
			TransitionComponent={Transition}
			keepMounted
			aria-describedby="alert-dialog-slide-description"
			maxWidth="lg"
		>
			<DialogContentBox>
				<ContractContent>
					<ImgContainer>
						<img src={propertyImg} alt="housePhoto" style={{ width: "500px", height: "100%", maxWidth: "100%" }} />
					</ImgContainer>
					<Box>
						<Typography
							variant="body2"
							sx={{ fontSize: "24px", my: 2, fontWeight: 700 }}
						>
							Luxury NYC Penthouse
						</Typography>
						<Typography
							variant="body2"
							sx={{ fontSize: "14px", fontWeight: 600 }}
						>
							{bedrooms} bds | {bathrooms} ba | {space} sqft
						</Typography>
						<Typography
							variant="body2"
							sx={{ fontSize: "14px" }}
						>
							{address}
						</Typography>
						<Typography
							variant="body2"
							sx={{ fontSize: "24px", my: 2, fontWeight: 700 }}
						>
							{price} ETH
						</Typography>
						<Box
							display="flex"
							gap={2}
							mb={3}
						>
							<Button
								sx={{
									width: "150px",
									maxWidth: "100%"
								}}
								variant="contained">Buy</Button>
							<Button
								sx={{
									width: "200px",
									maxWidth: "100%",
								}}
								variant="outlined">Contact Agent</Button>
						</Box>
						<hr style={{ height: "2.5px", background: "grey" }} />
						<Box my={2}>
							<Typography
								variant="body2"
								sx={{ fontSize: "24px", fontWeight: 700 }}
							>
								Overview
							</Typography>
							<Typography
								variant="body2"
								sx={{ fontSize: "14px", mb: 3 }}
							>
								Luxary Penthouse located in the heart of NYC
							</Typography>
							<hr style={{ height: "2.5px", background: "grey" }} />
						</Box>
						<Box my={2}>
							<Typography
								variant="body2"
								sx={{ fontSize: "24px", fontWeight: 700 }}
							>
								Facts and Features
							</Typography>
							<Typography
								variant="body2"
								sx={{ fontSize: "14px", mb: 3 }}
							>
								<ul style={{ marginLeft: "30px" }}>
									<li>Purchace Price: 20</li>
									<li>Type of Residence: Condo</li>
									<li>Bedrooms: 2</li>
									<li>Bathrooms: 3</li>
									<li>Square Feet: 2200</li>
									<li>Year Built: 2010</li>
								</ul>
							</Typography>
						</Box>
					</Box>
				</ContractContent>
				<ActionButton
					color="#000"
					onClick={() => { setOpenPopup(false) }}
				>
					<CloseIcon />
				</ActionButton>
			</DialogContentBox>
		</DialogBox>
	)
}

export default PropertyPopup