import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        height: '60px',
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop: '16px'
    },
    rightSection: {
        display: 'flex',
        justifyContent: 'space-around'
    }
})
const MyLink = styled(Link)({
    textDecoration: 'none',
})
export default function Header() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={9} className={classes.leftSection} ></Grid>
            <Grid item xs={3} className={classes.rightSection} >
                <MyLink to="/" ><Typography variant="h6" >Home</Typography></MyLink>
                <MyLink to="/images"> <Typography variant="h6" >Images</Typography></MyLink>
                <MyLink to="/about-me"><Typography variant="h6" >About me</Typography></MyLink>
            </Grid>
        </Grid>
    )
}