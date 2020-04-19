import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { makeStyles, styled, useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        height: '60px',
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: '16px'
    },
    rightSection: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    selected: {
        background: theme.palette.action.selected
    }
}))
const MyLink = styled(NavLink)({
    textAlign: 'center',
    textDecoration: 'none',
})
const MyButton = styled(Button)({
    height: '60px',
    width: '110px',
})
export default function Header() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={9} className={classes.leftSection} ></Grid>
            <Grid item xs={3} className={classes.rightSection} >
                <MyLink exact activeClassName={classes.selected} to="/" ><MyButton variant="h6" >Home</MyButton></MyLink>
                <MyLink to="/apps" activeClassName={classes.selected}> <MyButton variant="h6" >Apps</MyButton></MyLink>
                <MyLink to="/about-me" activeClassName={classes.selected}><MyButton variant="h6" >About me</MyButton></MyLink>
            </Grid>
        </Grid>
    )
}