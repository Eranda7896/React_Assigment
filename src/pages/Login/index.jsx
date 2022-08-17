import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../compenet/common/Button";

class Login extends Component{

    constructor(props) {
        super(props);
    }
    render() {
        const {classes} =this.props;

        return(
            <div className={classes.container}>
                <div className={classes.login_cover}>
                    <div className={classes.title_container}>
                        <h1>
                            Login
                        </h1>
                    </div>

                    <div className={classes.form_container}>
                        <TextField id="outlined-basic" label="UserName" variant="outlined" />
                        <TextField id="outlined-basic" type="password" label="Password" variant="outlined" />
                    </div>
                    <div className={classes.btn_container}>

                        <GDSEButton variant="contained" label="Login"
                                   onClick={() => {
                                       console.log("Login btn clicked!");
                                       this.checkValidity();
                                   }}
                        />
                    </div>

                </div>

            </div>

        )
    }
}

export default  withStyles(styleSheet) (Login)