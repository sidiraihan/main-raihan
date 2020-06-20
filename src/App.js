import React from 'react'
import { Router, Link } from 'react-static'
import { Helmet } from 'react-helmet'

//
import Routes from 'react-static-routes'

import './app.css'


export default () => (
  <Router>
      
    <div>
    <Helmet>
          <meta name="google-site-verification" content="blMiVRLzPdCsUauwDJNyIwPgmhuJx2ptPDlo-15kBgY" />
          <meta name="description" content="Wants to know more about Raihan Sidi Harinda here's the website portofolio" />
          <meta name="keywords" content="raihan sidi, raihan sidi harinda, rsha, react, sidiraihan, project, portofolio" />
         
          <script async src='https://www.googletagmanager.com/gtag/js?id=UA-170155507-1'></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-170155507-1');
            `}
          </script>
    </Helmet>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)
