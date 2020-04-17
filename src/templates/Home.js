import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InfoCard from '../components/InfoCard';
const useStyles = makeStyles({
    root: {
        height: 'calc(100% - 120px)',
        paddingTop: '64px'
    }
})
export default function Home() {
    let classes = useStyles();
    return (
        <div className={classes.root}>
            <InfoCard />
        </div>
    )
}