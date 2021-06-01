import './App.scss';
import { Grid } from '@material-ui/core';
import { Redirect, Route, Switch, Router } from "react-router";
import Main from './pages/main/main';
import Login from './pages/login/login';
import Registration from './components/Registration/Registration';
import Header from './components/Header/Header';
import SetupBudget from './pages/setup-budget/setup-budget';
import History from './pages/history/history';

import { createBrowserHistory as createHistory } from 'history';

export const history = createHistory();

function App() {
    return (
        <Grid className="App">
            <Router history={history}>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/registration' component={Registration}/>
                    <Route path='/setup-budget' component={SetupBudget}/>
                    <Route path='/history' component={History}/>
                    
                    {/* <Redirect to="/"/> */}
                </Switch>
            </Router>
        </Grid>
    );
}

export default App;
