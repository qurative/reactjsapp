import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Link
} from "@material-ui/core";
import { loadCSS } from 'fg-loadcss';
import {
    indigo,
    red,
    cyan
} from '@material-ui/core/colors';
import {
    Facebook,
    Twitter,
    LinkedIn,
    Instagram,
    YouTube
} from '@material-ui/icons';
import './index.scss';

const useStyles = makeStyles(theme => ({
    root: {
        '& > .fa': {
            margin: theme.spacing(2),
        },
    },
    iconHover: {
        margin: theme.spacing(2),
        '&:hover': {
            color: red[800],
        },
    },
}));

function Footer() {
    const classes = useStyles();

    React.useEffect(() => {
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
    }, []);
    return (
        <footer className="footer-distributed">

            <div className="footer-left">
                <img alt={`footer logo`} src="http://placehold.it/224x90&text=ReactJS-ADMIN" />
                <h3>About<span> ReactLIB</span></h3>

                <p className="footer-links">
                    <Link href="#">Home</Link> |
                    <Link href="#">Blog</Link> |
                    <Link href="#">About</Link> |
                    <Link href="#">Contact</Link>
                </p>

                <p className="footer-company-name">© 2019 ReactLIB Learning Solutions Pvt. Ltd.</p>
            </div>

            <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Unit # 102, Pentagon Tower P-4 </span>
                        <span>Slip Road to Tower-3/4, Magarpatta City  </span>
                        <span>Hadapsar, Pune, Maharashtra 411013</span>
                    </p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>+91 20-49110303</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@ReactLIB.com">support@ReactLIB.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <p className="footer-company-about">
                    <span>About the company</span>
                    We offer training and skill building courses across Technology, Design, Management, Science and
                    Humanities.</p>
                <div className={`${classes.root} footer-icons`}>
                    <a href="#"><Facebook style={{ color: indigo[500], padding: '5px' }} /></a>
                    <a href="#"><Twitter style={{ color: cyan[300], padding: '5px' }} /></a>
                    <a href="#"><Instagram style={{ color: red[500], padding: '5px' }} /></a>
                    <a href="#"><LinkedIn style={{ color: '#007bb5', padding: '5px' }} /></a>
                    <a href="#"><YouTube style={{ color: red[700], padding: '5px' }} /></a>
                </div>
            </div>
            <Copyright />
        </footer>
    );
}

function Copyright() {
    return (
        <Typography className={`copyright`} variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
export default Footer;
