import React from 'react';

import { Container, Grid } from '@material-ui/core';
import AppCard from '../components/AppCard'
export default function Apps() {
    return (
        <Container>
            <Grid container justify="space-between" spacing={3}>
                <Grid item>
                    <AppCard />
                </Grid>
                <Grid>
                    <AppCard />
                </Grid>
                <Grid>
                    <AppCard />
                </Grid>

            </Grid>
        </Container>
    )
}

