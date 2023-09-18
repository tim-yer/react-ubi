import React from 'react';
import classes from "./OwnInput.module.css";
const OwnInput = (props) => {
	return (
		<input {...props} className={classes.myInput}/>
	);
};

export default OwnInput;