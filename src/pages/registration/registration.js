import { Grid } from '@material-ui/core';
import RegistrationForm from '../../components/Registration/Registration';
import Header from '../../components/Header/Header';

function Registration() {
    return (
        <Grid>
            {/* <Header/> */}
            <Grid className="main-page">
                <RegistrationForm/>
            </Grid>
        </Grid>
    );
}

export default Registration;
