import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Apps from '../pages/Apps';
import About from '../pages/About';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        minHeight: 'calc(100vh - 120px)',
    }
})
export default function Content() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Switch>
                <Route path="/apps">
                    <Apps />
                </Route>
                <Route path="/about-me">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}