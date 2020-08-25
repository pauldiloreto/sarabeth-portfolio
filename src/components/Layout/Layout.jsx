import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { makeStyles, ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Header from './Header';
import Footer from './Footer';
import PageTransition from './PageTransition';

const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  content: {
    flexGrow: 1,
  },
});

const Layout = props => {
  const { children, location } = props;
  const classes = useStyles(props);

  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <Helmet>
        <html lang="en" />
      </Helmet>

      <div className={classes.container}>
        <Header location={location} />

        <div className={classes.content}>
          <PageTransition location={location}>{children}</PageTransition>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Layout;
