import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
const useStyles = makeStyles({
  root: {
    minWidth: 400,
    margin: "20px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    width: 350,
    margin: "10px",
  },
});

export default function Details() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Stack
            sx={{
              width: { lg: "500px", md: "500px", sm: "500px", xs: "90vw" },
            }}
            gap="20px"
          >
            <TextField
              type="text"
              id="Name"
              name="Name"
              label="Name"
              placeholder="Name"
              variant="outlined"
              InputLabelProps={{ className: "TextFieldLable" }}
              inputProps={{ className: "TextFieldInput" }}
              required
            />
            <TextField
              type="email"
              id="Email"
              name="Email"
              label="Email"
              placeholder="Email"
              variant="outlined"
              InputLabelProps={{ className: "TextFieldLable" }}
              inputProps={{ className: "TextFieldInput" }}
              required
            />
            <TextField
              type="text"
              id="Address"
              name="Address"
              label="Address"
              placeholder="Address"
              variant="outlined"
              InputLabelProps={{ className: "TextFieldLable" }}
              inputProps={{ className: "TextFieldInput" }}
              required
            />
            <TextField
              type="pincode"
              id="Pin Code"
              name="Pin Code"
              label="Pin Code"
              placeholder="Pin Code"
              variant="outlined"
              InputLabelProps={{ className: "TextFieldLable" }}
              inputProps={{ className: "TextFieldInput" }}
              required
            />
            </Stack>
      </CardContent>
    </Card>
  );
}
