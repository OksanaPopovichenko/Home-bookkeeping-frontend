import { Grid, Button } from '@material-ui/core';
import "./Login.scss";
import CheckboxCustom from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import { Link } from "react-router-dom";

function LoginForm() {
    return (
        <Grid className="form-wrap">
            <form id="form" className="form">
                <Input inputProps={{
                    placeholder: "Email",
                    type: "text"
                }}

                />
                <Input inputProps={{
                    placeholder: "Password",
                    type: "password"
                }}
                />
                <CheckboxCustom containerStyle={{ display: 'flex' }} label={'Remember me'} />
{/* 
                <Link to={'/'} style={{textDecoration: 'none'}}><Button variant="contained" type="submit" className="btn">
                    Login
                </Button>
                </Link> */}

                <Link to={'/'} style={{textDecoration: 'none'}}>
                    <Button variant="contained" type="submit" className="btn">
                        Login
                    </Button>
                </Link>

                <div className="form-footer">
                    <span className="txt-bottom">Don’t have an account?
                        <Link to={'/registration'} className="login-txt">Sign Up Now</Link>
                    </span>
                </div>
            </form>
        </Grid>
    );
}

export default LoginForm;
