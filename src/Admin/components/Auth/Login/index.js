import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core";
import classnames from "classnames";

const useStyles = makeStyles(theme => ({
    root: {
        background: '#ffffff',
        boxShadow: '0 0 0 1px #AARRGGBB'
    },
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                {process.env.REACT_APP_NAME}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
            <br/>
            <br/>
        </Typography>
    );
}

const AdminLogin = props => {
    const classes = useStyles();
    const {
        loginData
    } = props;
    return (
        <Container className={classes.root} component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Administrator Login
                </Typography>
                <form className={classes.form} noValidate onSubmit={props.handleSubmit}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={props.handleLoginChange}
                        value={loginData.email}
                        error={loginData.errors.email}
                        className={classnames("", {
                            invalid: loginData.errors.email || loginData.errors.emailnotfound
                        })}
                        // helperText={(loginData.errors.email && loginData.touched.email) && loginData.errors.email}
                    />
                    <span className="text-danger">
                      {loginData.errors.email}
                        {loginData.errors.emailnotfound}
                    </span>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={props.handleLoginChange}
                        value={loginData.password}
                        error={loginData.errors.password}
                        className={classnames("", {
                            invalid: loginData.errors.password || loginData.errors.passwordincorrect
                        })}
                    />
                    <span className="text-danger">
                      {loginData.errors.password}
                        {loginData.errors.passwordincorrect}
                    </span>
                    {/*<br/>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />*/}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

AdminLogin.propTypes = {};

export default AdminLogin;
