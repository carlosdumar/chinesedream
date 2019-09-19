// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types'
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';
// import AppBar from '@material-ui/core/AppBar';
// import Navbar from './Navbar'

// import './header.scss'
// import { Toolbar } from '@material-ui/core';

// import logo from '../../assets/images/chinaentumano.png';

// const useStyles = makeStyles(theme => ({
//     root: {
//       flexGrow: 1,
//       height: '90px',

//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//       gridColumn: '3',
//       margin: '0px',
//       padding: '0px'
//     },
//     title: {
//       flexGrow: 1,
//     },
//     image: {
//         height: '90px'
//     },
//     toolBar: {
//         display: 'grid',
//         gridTemplateColumns: 'auto auto 50px',
//         paddingTop: '20px',
//         backgroundColor: 'white'
//     }
//   }));


// export default function Header() {
    
//     const classes = useStyles();

//     return (
//         <header className={classes.root}>
//             <AppBar position="static">
//                 <Toolbar className={classes.toolBar}>
//                     <img src={logo} alt="Website Logo" className={classes.image}/>
//                     <Navbar />
//                     <IconButton edge="start" className={classes.menuButton} open={true}>
//                         <MenuIcon />
//                         <CloseIcon />
//                     </IconButton>
//                 </Toolbar>
//             </AppBar>
//         </header>
//     )
// };
