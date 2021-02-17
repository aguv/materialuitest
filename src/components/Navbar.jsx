import React from 'react'
import { makeStyles, Typography, Toolbar, AppBar, InputBase, Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    search: {
        position: 'relative',
        color: 'white',
        '&:hover': {
            backgroundColor: '#5c5858'
        },
        paddingLeft: '8px',
        borderRadius: '5px'
    },
    grow: {
        flexGrow: 1,
    },
    drawerConfig: {
        width: `calc(100% - 200px)`,
        backgroundColor: '#726f6f'
    }
}));

const Navbar = ({test, handleChange}) => {
    const classes = useStyles();

    return (
        <Box display='flex'>
            <AppBar position="fixed" className={classes.drawerConfig}>
                <Toolbar>
                    <Typography variant="h6" className={classes.grow}>
                    AguNEWS
                    </Typography>
                    <Box ml={2}>
                        <InputBase placeholder="WHAT?" className={classes.search} color='primary' onChange={handleChange} value={test}/>
                    </Box>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </Box>  
    )
}

export default Navbar
