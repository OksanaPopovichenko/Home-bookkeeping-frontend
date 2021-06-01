import { Grid, Button } from '@material-ui/core';
import Input from '../Input/Input';
import {PhoneNumber} from '../PhoneNumber/PhoneNumber';
import "./Registration.scss";
import { Link } from "react-router-dom";


function RegistrationForm() {
    return (
        <Grid className="form-wrap">
            <form id="form" className="form">
                <Input inputProps={{
                    placeholder: "Name",
                    type: "text"
                }}/>

                <Input inputProps={{
                    placeholder: "Email",
                    type: "text"
                }}/>

                <PhoneNumber 
                    inputProps={{
                        placeholder: "Phone number",
                        type: "text"
                    }}
                />

                <Input inputProps={{
                    placeholder: "Password",
                    type: "password"
                }}/>

                <Input inputProps={{
                    placeholder: "Confirm password",
                    type: "password"
                }}/>


                <Link to={'/login'} style={{textDecoration: 'none'}} onClick={() => alert("Registered successful!")}>
                    <Button variant="contained" type="submit" className="btn">
                        Sign up
                    </Button>
                </Link>

                <div className="form-footer">
                    <span className="txt-bottom">Already have an account?
                        <Link to={'/login'} className="login-txt">Sign In Now</Link>
                    </span>
                </div>
            </form>
        </Grid>
    );
}

export default RegistrationForm;
