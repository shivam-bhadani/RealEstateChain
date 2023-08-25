import { Box, Container, styled, Typography, Grid } from "@mui/material";
import React from "react";
import house1 from "../media/house1.jpg";
import house2 from "../media/houseCard.jpg";
import house3 from "../media/houseCard.jpg";
import PropertyCard from "./PropertyCard";

const Properties = () => {

	const properties = [
		{
			id: "1",
			img: house1,
			price: "35",
			address: "8502 Preston Rd. Inglewood, Maine 98280",
			bedrooms: 2,
			bathrooms: 2,
			space: 2000,
		},

		{
			id: "2",
			img: house2,
			price: "20",
			address: "Wailuku, HI 96793",
			bedrooms: 3,
			bathrooms: 2,
			space: 2300,
		},

		{
			id: "3",
			img: house3,
			price: "30",
			address: "2917 23rd St",
			bedrooms: 4,
			bathrooms: 3,
			space: 3000,
		},
	];

	const PropertiesTextBox = styled(Box)(({ theme }) => ({
		marginBottom: theme.spacing(4),
		[theme.breakpoints.down("md")]: {
			textAlign: "center",
		},
	}));

	return (
		<Box sx={{ mt: 5, backgroundColor: "#F5FAFE", py: 10 }}>
			<Container>
				<PropertiesTextBox>
					<Typography
						sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
					>
						Featured Properties
					</Typography>
					<Typography sx={{ color: "#5A6473", fontSize: "16px", mt: 1 }}>
						Everything you need to know when looking for a new home!
					</Typography>
				</PropertiesTextBox>

				<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ m: "auto" }}>
					{properties.map((property) => (
						<Grid item xs={2} sm={4} md={4} key={property.id}>
							<PropertyCard
								key={property.id}
								img={property.img}
								price={property.price}
								address={property.address}
								bedrooms={property.bedrooms}
								bathrooms={property.bathrooms}
								space={property.space}
							/>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Properties;