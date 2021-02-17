import React from 'react'
import { makeStyles, Typography, Toolbar, AppBar, Box, IconButton } from '@material-ui/core'
import CopyrightIcon from '@material-ui/icons/Copyright';

const useStyles = makeStyles(theme => ({
    endBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: '#726f6f',
        flexDirection: 'row-reverse',
        width: `calc(100% - 200px)`,
        marginLeft: '200px'
    },
    copy: {
        color: 'white',
        margin: '0 1.2vh'
    },
    textFooter: {
        fontSize: '1.2vh'
    },
    offset: theme.mixins.toolbar,
}));

const Endbar = () => {
    const classes = useStyles();

    return (
            <div>
                <AppBar position="fixed" className={classes.endBar}>
                    <Toolbar>
                        <Typography variant="body1" className={classes.textFooter}>
                            github.com/aguv
                        </Typography>
                        <CopyrightIcon className={classes.copy}/>
                        <Typography variant="body1" className={classes.textFooter}>
                            2021
                        </Typography>
                    </Toolbar>
                </AppBar>      
            </div>
                  
    )
}

export default Endbar
