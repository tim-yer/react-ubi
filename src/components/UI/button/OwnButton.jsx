import React from 'react';
import classes from "./OwnButton.module.css";
const OwnButton = ({children, ...props}) => {
	return (
		<button {...props} className={classes.btn}>
			{children}
		</button>
	);
};

export default OwnButton;