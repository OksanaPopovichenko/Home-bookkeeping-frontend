import { Grid } from '@material-ui/core';
import LoginForm from '../../components/Login/Login';
import Header from '../../components/Header/Header';

function Login() {
    return (
        <Grid>
            {/* <Header/> */}
            <Grid className="main-page">
                <LoginForm/>
            </Grid>
        </Grid>
    );
}

export default Login;
