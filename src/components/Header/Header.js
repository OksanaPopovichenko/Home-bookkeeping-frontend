import { Grid } from '@material-ui/core';
import "./Header.scss";
import logo from '../../images/bookkeeping.png';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Header() {
    const [show, setShow] = useState(false);


    useEffect(() => {
        let url = window.location.href

        if(url == "http://localhost:8081/" || url == "http://localhost:8081/history" || url == "http://localhost:8081/setup-budget" ){
            setShow(true);
        } else {
            setShow(false);
        }
    })

    return (
        <Grid className="header" container justify="space-between" wrap="nowrap" alignItems="center">
            <Grid>
                <Link to={'/'}><img src={logo} width={50}/></Link>
            </Grid>
            <Grid className="menu">
                <ul>
                    {show ? <li onClick={() => setShow(true)}><Link to={'/login'} style={{ paddingRight: '30px'}}>Hello, Oksana</Link></li> : null }
                    {show ? <li><Link to={'/history'} >History</Link></li> : null }
                    {show ? <li><Link to={'/setup-budget'} >Settings</Link></li> : null }
                    {show ?<li onClick={() => setShow(false)}><Link to={'/login'} >Logout</Link></li> : null }


                    {!show ? <li onClick={() => setShow(true)}><Link to={'/login'}>Login</Link></li> :null}
                    {!show ? <li><Link to={'/registration'}>Sign up</Link></li> :null}
                </ul>
            </Grid>
        </Grid>
    );
}

export default Header;
