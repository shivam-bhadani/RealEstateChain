import { Box, Card, CardContent, CardMedia, styled, Typography } from "@mui/material";
import { useState } from "react";
import bedroomsIcon from "../media/bedroomsIcon.png";
import bathroomsIcon from "../media/bathroomsIcon.png";
import spaceIcon from "../media/spaceIcon.png";
import PropertyPopup from "./PropertyPopup";

const PropertyCard = ({ img, price, address, bedrooms, bathrooms, space }) => {
	const [openPopup, setOpenPopup] = useState(false);

	const HouseBox = styled(Card)(({ theme }) => ({
		borderTopLeftRadius: "10px",
		borderTopRightRadius: "10px",
		width: 300,
		height: 450,
		maxWidth: "100%",
		backgroundColor: "#fff",
		margin: theme.spacing(1, 2, 1, 2),
		cursor: "pointer",
		boxShadow: "0px 4px 8px -2px rgba(9, 30, 66, 0.25), 0px 0px 0px 1px rgba(9, 30, 66, 0.08)",
		[theme.breakpoints.down("lg")]: {
			margin: theme.spacing(2, 0, 2, 0),
		},
	}));

	const InfoBox = styled(Box)(() => ({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	}));

	return (
		<div>
			<HouseBox onClick={() => setOpenPopup(true)}>
				<CardMedia
					sx={{ height: 250 }}
					image={img}
					title="house1"
				/>

				<CardContent sx={{ padding: "1rem" }}>
					<Typography variant="body2" sx={{ fontWeight: "700", fontSize: "20px" }}>
						{price} ETH
					</Typography>
					<Typography variant="body2" sx={{ my: 2 }}>
						{address}
					</Typography>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<InfoBox>
							<img src={bedroomsIcon} alt="bedroomsIcon" />
							<Typography variant="body2" sx={{ mt: 1 }}>
								{bedrooms}
							</Typography>
						</InfoBox>

						<InfoBox>
							<img src={bathroomsIcon} alt="bathroomsIcon" />
							<Typography variant="body2" sx={{ mt: 1 }}>
								{bathrooms}
							</Typography>
						</InfoBox>

						<InfoBox>
							<img src={spaceIcon} alt="spaceIcon" />
							<Typography variant="body2" sx={{ mt: 1 }}>
								{space}
							</Typography>
						</InfoBox>
					</Box>
				</CardContent>
			</HouseBox>
			<PropertyPopup
				openPopup={openPopup}
				setOpenPopup={setOpenPopup}
				propertyImg={img}
				price={price}
				address={address}
				bedrooms={bedrooms}
				bathrooms={bathrooms}
				space={space}
			/>
		</div>
	);
};

export default PropertyCard;