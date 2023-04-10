import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import succlogo from "../Payments/animat-checkmark.gif";
import axios from "axios";
import { useSelector,useDispatch } from 'react-redux';
import { newProductAdded } from "../../Redux/Cart/actions";
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
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    width: 350,
    margin: "10px",
  },
  img: { width: "200px" },
  con: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Success() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  let dispatch = useDispatch()

  let token = JSON.parse(localStorage.getItem('rentifyToken'))
  
    axios.delete('https://tender-lime-pike.cyclic.app/cart/success',{
      headers:{
        token
      }
    }).then((res)=>{
      console.log(res.data)
      dispatch(newProductAdded(true))
    }).catch((err)=>{
      console.log(err)
    })


  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.con}>
          <img src={succlogo} alt="loading..." className={classes.img} />
        </div>
        <Typography
          className={classes.title}
          variant="h2"
          color="success"
          gutterBottom
        >
          <b> Order Confirmed </b>
        </Typography>
      </CardContent>
    </Card>
  );
}
