import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Month() {
  const details = [
    {
      name: "FREE",
      price: "0",
      feature: [
        "Single User",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Dedicated Phone Support",
        "Free Sub Domain",
        "Unlimited Private Project",
        "Monthly Status Report",
      ],
      button: "BUTTON",
    },
    {
      name: "PRO",
      price: "9",
      feature: [
        "Single User",
        "50GB Storage",
        "Unlimited Public Projects",
        "Community Access",
        "Unlimited Private Project",
        "Monthly Status Report",
        "Dedicated Phone Support",
        "Free Sub Domain",
      ],
      button: "BUTTON",
    },
    {
      name: "PLUS",
      price: "49",
      feature: [
        "Single User",
        "50GB Storage",
        "Unlimited Public Projects",
        "Monthly Status Report",
        "Community Access",
        "Dedicated Phone Support",
        "Free Sub Domain",
      ],
      button: "BUTTON",
    },
  ];

  return (
    <Grid container xs={12} sx={{ bgcolor: "blue" ,height:"100vh",alignItems:"center"}}>
      <Grid container item xs={12} justifyContent="center" >
        {details.map((item) => (
          <Price
            name={item.name}
            price={item.price}
            feature={item.feature}
            button={item.button}
          />
        ))}
      </Grid>
    </Grid>
  );
}

function Price(Props) {
  return (
      <Grid
        item
        xs={3}
        sx={{
          border: "5px solid black",
          lineHeight: "1.5",
          marginTop: "60px",
          marginBottom: "60px",
          paddingTop: "20px",
          paddingBottom: "20px",
          borderRadius: "20px",
          width: "5000px",
          marginRight: "20px",
          marginLeft: "20px",
          paddingRight: "2px",
          bgcolor: "white",
        }}
      >
        <Typography variant="h5" component="h2">
          {Props.name}
        </Typography>
        <Typography variant="h4" component="h2">
          ${Props.price}/month
        </Typography>

        <ul>
          {Props.feature.map((item) => (
            <li> {item}</li>
          ))}
        </ul>

        <Button
          variant="contained"
          sx={{ width: "350px", height: "50px", borderRadius: "10px" }}
        >
          {Props.button}
        </Button>
      </Grid>
  );
}

export default Month;
