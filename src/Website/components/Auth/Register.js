import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import classnames from "classnames";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                {process.env.REACT_APP_NAME}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Register = props => {
    const classes = useStyles();
    const {
        registerData
    } = props;
    console.log('registerData ', registerData);
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <form className={classes.form} noValidate onSubmit={props.handleRegisterSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="name"
                                name="Name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                autoFocus
                                onChange={props.handleRegisterChange}
                                value={registerData.name}
                                error={registerData.errors.name}
                                className={classnames("", {
                                    invalid: registerData.errors.name
                                })}
                            />
                            <span className="text-danger">{registerData.errors.name}</span>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Userame"
                                name="username"
                                autoComplete="username"
                                onChange={props.handleRegisterChange}
                                value={registerData.username}
                                error={registerData.errors.username}
                                className={classnames("", {
                                    invalid: registerData.errors.username
                                })}
                            />
                            <span className="text-danger">{registerData.errors.username}</span>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={props.handleRegisterChange}
                                value={registerData.email}
                                error={registerData.errors.email}
                                className={classnames("", {
                                    invalid: registerData.errors.email
                                })}
                            />
                            <span className="text-danger">{registerData.errors.email}</span>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={props.handleRegisterChange}
                                value={registerData.password}
                                error={registerData.errors.password}
                                className={classnames("", {
                                    invalid: registerData.errors.password
                                })}
                            />
                            <span className="text-danger">{registerData.errors.password}</span>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password2"
                                label="Password"
                                type="password"
                                id="password2"
                                autoComplete="confirm-password"
                                onChange={props.handleRegisterChange}
                                value={registerData.password2}
                                error={registerData.errors.password2}
                                className={classnames("", {
                                    invalid: registerData.errors.password2
                                })}
                            />
                            <span className="text-danger">{registerData.errors.password2}</span>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/login" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default Register;
