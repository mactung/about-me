import React from 'react';
import { Container, Paper, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        height: '300px'
    }
})
export default function InfoCard() {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Paper>
                <Grid container>
                    <Grid item xs={6}>
                        <img alt="anh dai dien" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h3">Hi Everyone, My name is Mac Tran Tung</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}