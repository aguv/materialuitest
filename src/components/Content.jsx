import React from 'react'
import {Grid, makeStyles, Box, Typography, Divider} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    gridCon: {
        width: `calc(100% - 200px)`,
        marginLeft: '200px',
        height: '864px',
        marginTop: '1px'
    },
    gridItem: {
        height: `250px`
    },
    divider: {
        width: `167vh`,
        marginLeft: '0.9vh'
    },
    text: {
        textAlign: 'justify',
        marginTop: '10px'
    },
    verticalDiv: {
        position: 'absolute',
        height: '250px',
        marginLeft: '2.5vh',
        marginTop: '1vh'
    }
}))

const Content = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.gridCon} spacing={2} >

            <Grid item xs={8}>
                <Box className={classes.gridItem} p={2}>
                    <Typography variant="h3" color="initial">Lorem title!</Typography>
                    <Typography variant="body2" color="initial" className={classes.text}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.       
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={4}>
                <Divider orientation='vertical' className={classes.verticalDiv}/>
                <Box className={classes.gridItem} mt={2} mx={9}>
                    <Typography variant="h6" color="initial">9/12/2018 - MADRID</Typography>
                    <Typography variant="body2" color="initial" className={classes.text}>
                    Quisque ut est nunc. Etiam maximus augue nunc, ut luctus mauris pellentesque sit amet. Ut id risus purus. Curabitur et dolor in sem maximus vehicula. Duis fringilla tincidunt eros, sit amet ultricies sem aliquet at. In feugiat enim eu nisl varius, ut mollis orci molestie. Praesent dapibus quam at lacinia commodo. Nunc at urna lorem. Sed accumsan, orci eget pretium fermentu.
                    </Typography>
                </Box>
            </Grid>
            
            <Divider className={classes.divider} />

            <Grid item xs={6}>        
                <Box className={classes.gridItem} mt={3} mx={8} >
                    <Typography variant="h4" color="initial">Why do we use it?</Typography>
                    <Typography variant="body2" color="initial" className={classes.text}>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={6}>
                <Divider orientation='vertical' className={classes.verticalDiv}/>
                <Box className={classes.gridItem} mt={3} mx={11}>
                    <Typography variant="h4" color="initial">Where does it come from?</Typography>
                    <Typography variant="body2" color="initial" className={classes.text}>    
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Typography>
                </Box>
            </Grid>

            <Divider className={classes.divider} />

            <Grid item xs={4}>
                <Box className={classes.gridItem} mt={3} mx={11}>
                    <Typography variant="h6" color="initial">Where does it come from?</Typography>
                    <Typography variant="body2" color="initial" className={classes.text}>    
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Divider orientation='vertical' className={classes.verticalDiv}/>
                <Box className={classes.gridItem} mt={3} mx={11}>
                    <Typography variant="h6" color="initial">Where does it come from?</Typography>
                    <Typography variant="body2" color="initial" className={classes.text}>    
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Divider orientation='vertical' className={classes.verticalDiv}/>
                <Box className={classes.gridItem} mt={3} mx={11}>
                    <Typography variant="h6" color="initial">Where does it come from?</Typography>
                    <Typography variant="body2" color="initial" className={classes.text}>    
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}


export default Content
