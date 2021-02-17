import React from 'react';
import { Divider, List, Drawer, ListItemText, ListItem, makeStyles, ListItemIcon, Box } from '@material-ui/core';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import PublicIcon from '@material-ui/icons/Public';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Weather from './Weather';

const useStyles = makeStyles(theme => ({
  drawer: {
    position: 'fixed',
    marginTop: '20px'
  },
  toolbar: theme.mixins.toolbar,
  paper: {
    width: '200px',
  },
  newsImg: {
    height: '80px',
    width: '80px',
    marginTop: '20px',
    marginLeft: '30px',
    position: 'fixed'
  }, 
  list: {
    marginTop: '4vh'
  }
}))


const LeftDraw = () => {
  const classes = useStyles();

    return (
        <div>
            <Drawer
              variant="permanent"
              anchor="left"
              className={classes.drawer}
              classes={{paper: classes.paper}}
            >
              <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfNSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PGc+PHBhdGggZD0ibTggNThoMmMwIDEuMS0uNDUgMi4xLTEuMTcgMi44My0uNzMuNzItMS43MyAxLjE3LTIuODMgMS4xNy0yLjIxIDAtNC0xLjc5LTQtNHYtMzloNHYzN2MwIDEuMS45IDIgMiAyeiIgZmlsbD0iI2U2ZTllZCIvPjwvZz48Zz48cGF0aCBkPSJtMTAgMTh2NDBoLTJjLTEuMSAwLTItLjktMi0ydi0zNy03aDR6IiBmaWxsPSIjZjBkMGI0Ii8+PC9nPjxnPjxwYXRoIGQ9Im0yNCAyaC0xNHYxMCA2aDMgMiAyIDQwIDIgM3YtMTZ6IiBmaWxsPSIjZTZlOWVkIi8+PC9nPjxnPjxwYXRoIGQ9Im02MiAxOHY0MGMwIDIuMjEtMS43OSA0LTQgNGgtNTJjMS4xIDAgMi4xLS40NSAyLjgzLTEuMTcuNzItLjczIDEuMTctMS43MyAxLjE3LTIuODN2LTQwaDMgMiAyIDQwIDJ6IiBmaWxsPSIjZmZlYWE3Ii8+PC9nPjxnPjxwYXRoIGQ9Im0zMCA1NGgxMnY0aC0xMnoiIGZpbGw9IiNlNmU5ZWQiLz48L2c+PGc+PHBhdGggZD0ibTE0IDU0aDEydjRoLTEyeiIgZmlsbD0iI2U2ZTllZCIvPjwvZz48Zz48cGF0aCBkPSJtNDggMjJoMTB2NGgtMTB6IiBmaWxsPSIjZmY4MjZlIi8+PC9nPjxnPjxwYXRoIGQ9Im00NCAyMnYyOGgtNHYtMi43M2MwLTEuOS0xLjM0LTMuNTQtMy4yMS0zLjkybC0uNzItLjE0di0uMDFjLjU4LS45My45My0yLjAyLjkzLTMuMnYtNmMwLTQuNDItMy41OC04LTgtOHMtOCAzLjU4LTggOHY2YzAgMS4xOC4zNSAyLjI3LjkzIDMuMnYuMDFsLS43Mi4xNGMtMS44Ny4zOC0zLjIxIDIuMDItMy4yMSAzLjkydjIuNzNoLTR2LTI4eiIgZmlsbD0iI2U2ZTllZCIvPjwvZz48Zz48cGF0aCBkPSJtMjYuMTcgMzkuODNjLjIzLjIyLjQ4LjQyLjc1LjU4di4wMWMtLjE0LjYtLjQ2IDEuMTUtLjkyIDEuNTUtLjMzLjMtLjczLjUyLTEuMTguNjVsLTIuODkuNThjLS41OC0uOTMtLjkzLTIuMDItLjkzLTMuMnYtNmMwLTQuNDIgMy41OC04IDgtOHM4IDMuNTggOCA4djZjMCAxLjE4LS4zNSAyLjI3LS45MyAzLjJsLTIuODktLjU4Yy0uNDUtLjEzLS44NS0uMzUtMS4xOC0uNjUtLjQ2LS40LS43OC0uOTUtLjkyLTEuNTV2LS4wMWMxLjE1LS43IDEuOTItMS45NiAxLjkyLTMuNDF2LTNoLTEuNzZjLTEuNDcgMC0yLjkyLS4zNC00LjI0LTEtMS4xIDAtMiAuOS0yIDJ2MmMwIDEuMS40NSAyLjEgMS4xNyAyLjgzeiIgZmlsbD0iIzY1NmQ3OCIvPjwvZz48Zz48cGF0aCBkPSJtNDAgNDcuMjd2Mi43M2gtMjJ2LTIuNzNjMC0xLjkgMS4zNC0zLjU0IDMuMjEtMy45MmwuNzItLjE0di0uMDFsMi44OS0uNThjLjQ1LS4xMy44NS0uMzUgMS4xOC0uNjV2LjAzYzAgMS42NiAxLjM0IDMgMyAzIC44MyAwIDEuNTgtLjM0IDIuMTItLjg4cy44OC0xLjI5Ljg4LTIuMTJ2LS4wM2MuMzMuMy43My41MiAxLjE4LjY1bDIuODkuNTh2LjAxbC43Mi4xNGMxLjg3LjM4IDMuMjEgMi4wMiAzLjIxIDMuOTJ6IiBmaWxsPSIjYjRkZDdmIi8+PC9nPjxnPjxwYXRoIGQ9Im0zMS4wOCA0MC40MmMuMTQuNi40NiAxLjE1LjkyIDEuNTV2LjAzYzAgLjgzLS4zNCAxLjU4LS44OCAyLjEycy0xLjI5Ljg4LTIuMTIuODhjLTEuNjYgMC0zLTEuMzQtMy0zdi0uMDNjLjQ2LS40Ljc4LS45NS45Mi0xLjU1di0uMDFjLjYxLjM4IDEuMzIuNTkgMi4wOC41OXMxLjQ3LS4yMSAyLjA4LS41OXoiIGZpbGw9IiNmMGQwYjQiLz48L2c+PGc+PHBhdGggZD0ibTMzIDM0djNjMCAxLjQ1LS43NyAyLjcxLTEuOTIgMy40MS0uNjEuMzgtMS4zMi41OS0yLjA4LjU5cy0xLjQ3LS4yMS0yLjA4LS41OWMtLjI3LS4xNi0uNTItLjM2LS43NS0uNTgtLjcyLS43My0xLjE3LTEuNzMtMS4xNy0yLjgzdi0yYzAtMS4xLjktMiAyLTIgMS4zMi42NiAyLjc3IDEgNC4yNCAxeiIgZmlsbD0iI2YwZDBiNCIvPjwvZz48L2c+PGc+PHBhdGggZD0ibTkgMXYxMGgtNHY3aC00djQwYzAgMi43NTcgMi4yNDMgNSA1IDVoNTJjMi43NTcgMCA1LTIuMjQzIDUtNXYtNTd6bS0yIDEyaDJ2NDRoLTFjLS41NTEgMC0xLS40NDktMS0xem0tMSA0OGMtMS42NTQgMC0zLTEuMzQ2LTMtM3YtMzhoMnYzNmMwIDEuNjU0IDEuMzQ2IDMgMyAzaC44MTZjLS40MTQgMS4xNjEtMS41MTQgMi0yLjgxNiAyem01MiAwaC00OC4wMDJjLjYyOC0uODM2IDEuMDAyLTEuODc1IDEuMDAyLTN2LTM5aDJ2LTJoLTJ2LTE0aDUwdjE0aC0ydjJoMnYzOWMwIDEuNjU0LTEuMzQ2IDMtMyAzeiIvPjxwYXRoIGQ9Im00NC4wOTggMTIuODc2Yy0uMDEzLjEzOC0uMjQ2LjE0Ni0uMjcuMDFsLS42ODQtNC4xMDJjLS4xNzItMS4wMzQtMS4wNTgtMS43ODQtMi4xODItMS43ODQtMS4wNDggMC0xLjkzNS43NS0yLjEwNyAxLjc4NWwtLjY4NCA0LjEwMmMtLjAyMi4xMzctLjI1NC4xNDgtLjI3Mi0uMDMybC0uOTA2LTcuOTY3LTEuOTg3LjIyNi45MDQgNy45NDVjLjEwMSAxLjEwNiAxLjAxNiAxLjk0MSAyLjEyOCAxLjk0MSAxLjA0OCAwIDEuOTM1LS43NSAyLjEwNy0xLjc4NWwuNjg0LTQuMTAyYy4wMS0uMDY1LjA2Ny0uMTEzLjIwOS0uMTEzLjA2NyAwIC4xMjMuMDQ4LjEzNC4xMTRsLjY4NCA0LjEwMmMuMTcyIDEuMDM0IDEuMDU4IDEuNzg0IDIuMTA2IDEuNzg0IDEuMTEyIDAgMi4wMjYtLjgzNSAyLjEyNS0xLjkybC45MDYtNy45NjctMS45ODctLjIyNnoiLz48cGF0aCBkPSJtMTggNy44ODcgNC40NDYgNy4xMTNoMi41NTR2LTEwaC0ydjcuMTEzbC00LjQ0Ni03LjExM2gtMi41NTR2MTBoMnoiLz48cGF0aCBkPSJtNTQgMTNoLTJjLS41NTEgMC0xLS40NDktMS0xaC0yYzAgMS42NTQgMS4zNDYgMyAzIDNoMmMxLjY1NCAwIDMtMS4zNDYgMy0zcy0xLjM0Ni0zLTMtM2gtMmMtLjU1MSAwLTEtLjQ0OS0xLTFzLjQ0OS0xIDEtMWgyYy41NTEgMCAxIC40NDkgMSAxaDJjMC0xLjY1NC0xLjM0Ni0zLTMtM2gtMmMtMS42NTQgMC0zIDEuMzQ2LTMgM3MxLjM0NiAzIDMgM2gyYy41NTEgMCAxIC40NDkgMSAxcy0uNDQ5IDEtMSAxeiIvPjxwYXRoIGQ9Im0zMyAxM2gtNHYtMmg0di0yaC00di0yaDR2LTJoLTZ2MTBoNnoiLz48cGF0aCBkPSJtMjcgMTdoMnYyaC0yeiIvPjxwYXRoIGQ9Im01MSAxN2gydjJoLTJ6Ii8+PHBhdGggZD0ibTIzIDE3aDJ2MmgtMnoiLz48cGF0aCBkPSJtNDcgMTdoMnYyaC0yeiIvPjxwYXRoIGQ9Im0zNSAxN2gydjJoLTJ6Ii8+PHBhdGggZD0ibTMxIDE3aDJ2MmgtMnoiLz48cGF0aCBkPSJtMTkgMTdoMnYyaC0yeiIvPjxwYXRoIGQ9Im01NSAxN2gydjJoLTJ6Ii8+PHBhdGggZD0ibTQzIDE3aDJ2MmgtMnoiLz48cGF0aCBkPSJtMzkgMTdoMnYyaC0yeiIvPjxwYXRoIGQ9Im0xNSAxN2gydjJoLTJ6Ii8+PHBhdGggZD0ibTEzIDUxaDMydi0zMGgtMzJ6bTktMTF2LTZjMC0zLjg2IDMuMTQtNyA3LTdzNyAzLjE0IDcgN3Y2YzAgLjcyLS4xNTkgMS40MjgtLjQ2IDIuMDhsLTIuMDktLjQyYy0uNTAyLS4xNDMtLjkxNC0uNDc5LTEuMTctLjkxNyAxLjA0NS0uOTE3IDEuNzItMi4yNDYgMS43Mi0zLjc0M3YtNGgtMi43NjRjLTEuMzA4IDAtMi42MTgtLjMwOS0zLjc4OS0uODk1bC0uMjExLS4xMDVoLS4yMzZjLTEuNjU0IDAtMyAxLjM0Ni0zIDN2MmMwIDEuNDk3LjY3NSAyLjgyNyAxLjcyMSAzLjc0NC0uMjUyLjQzNi0uNjQ5Ljc2OC0xLjA5NS44OTdsLTIuMTY2LjQzOGMtLjMwMS0uNjUyLS40Ni0xLjM1OS0uNDYtMi4wNzl6bTEwLTNjMCAxLjY1NC0xLjM0NiAzLTMgM3MtMy0xLjM0Ni0zLTN2LTJjMC0uNDg2LjM0OS0uODkzLjgwOS0uOTgyIDEuMzguNjQzIDIuOTA1Ljk4MiA0LjQyNy45ODJoLjc2NHptLTQuNTM5IDQuNzMyYy40ODguMTYuOTk5LjI2OCAxLjUzOS4yNjguNTQxIDAgMS4wNTItLjEwOCAxLjU0MS0uMjY4LjEyMy4yMTEuMjY3LjQwOC40MjcuNTkzLS4xNTcuOTQ4LS45NzYgMS42NzUtMS45NjggMS42NzUtLjk5IDAtMS44MDctLjcyNC0xLjk2Ni0xLjY2OC4xNTktLjE4Ny4zMDMtLjM4Ni40MjctLjZ6bS02LjA1NSAyLjYgMy42OTItLjc0OWMuMDctLjAyLjEzNC0uMDQ5LjIwMi0uMDczLjU5OCAxLjQ1OCAyLjAyOSAyLjQ5IDMuNyAyLjQ5IDEuNjY5IDAgMy4wOTktMS4wMyAzLjY5OC0yLjQ5Ny4wOTMuMDMzLjE4My4wNzIuMjguMDk5bDMuNjE3LjczYzEuMzkzLjI4MiAyLjQwNSAxLjUxOSAyLjQwNSAyLjk0MXYxLjcyN2gtMjB2LTEuNzI3YzAtMS40MjIgMS4wMTItMi42NTkgMi40MDYtMi45NDF6bS02LjQwNi0yMS4zMzJoMjh2MjZoLTJ2LTEuNzI3YzAtMi4xODgtMS40NDQtNC4wOTUtMy40OTItNC43NDguMzE0LS44MDQuNDkyLTEuNjU2LjQ5Mi0yLjUyNXYtNmMwLTQuOTYyLTQuMDM4LTktOS05cy05IDQuMDM4LTkgOXY2YzAgLjg2OS4xNzggMS43MjEuNDkyIDIuNTI1LTIuMDQ4LjY1My0zLjQ5MiAyLjU2LTMuNDkyIDQuNzQ4djEuNzI3aC0yeiIvPjxwYXRoIGQ9Im00NyAyN2gxMnYtNmgtMTJ6bTItNGg4djJoLTh6Ii8+PHBhdGggZD0ibTQ3IDI5aDEydjJoLTEyeiIvPjxwYXRoIGQ9Im00NyAzN2gxMnYyaC0xMnoiLz48cGF0aCBkPSJtNDcgNDFoMTJ2MmgtMTJ6Ii8+PHBhdGggZD0ibTUxIDQ1aDh2MmgtOHoiLz48cGF0aCBkPSJtNDcgNDVoMnYyaC0yeiIvPjxwYXRoIGQ9Im00NyA0OWgxMnYyaC0xMnoiLz48cGF0aCBkPSJtNTcgMzNoMnYyaC0yeiIvPjxwYXRoIGQ9Im00NyAzM2g4djJoLTh6Ii8+PHBhdGggZD0ibTEzIDU5aDE0di02aC0xNHptMi00aDEwdjJoLTEweiIvPjxwYXRoIGQ9Im0yOSA1OWgxNHYtNmgtMTR6bTItNGgxMHYyaC0xMHoiLz48L2c+PC9nPjwvc3ZnPg==" className={classes.newsImg}/>
              <div className={classes.toolbar} />
              <List className={classes.list}>
                <ListItem button>
                    <ListItemText>Sports</ListItemText>    
                    <ListItemIcon>
                      <SportsSoccerIcon/>
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemText>ESports</ListItemText>    
                    <ListItemIcon>
                      <SportsEsportsIcon />
                    </ListItemIcon>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem button>
                    <ListItemText>WORLD</ListItemText>
                    <ListItemIcon>
                      <PublicIcon />
                    </ListItemIcon>    
                </ListItem>
                <ListItem button>
                    <ListItemText>Cripto</ListItemText>  
                    <ListItemIcon>
                      <AttachMoneyIcon />
                    </ListItemIcon>   
                </ListItem>
              </List>
              <Box mt={38}>
                <Weather/>
              </Box>
            </Drawer>
        </div>
    )
}

export default LeftDraw
