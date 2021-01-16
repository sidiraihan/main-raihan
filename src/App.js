import React from 'react'
import { Router, Link } from 'react-static'
import { Helmet } from 'react-helmet'
import { IconContext } from "react-icons";

//
import Routes from 'react-static-routes'

import './app.css'


export default () => (
  <Router>
      
    <div>
    <Helmet>
          <meta name="google-site-verification" content="blMiVRLzPdCsUauwDJNyIwPgmhuJx2ptPDlo-15kBgY" />
          <meta name="description" content="Hi, there! My name is Raihan Sidi Harinda My specialties are ui/ux database analysis seo leadership teamwork programming. Get in touch with me sidiraihan@gmail.com Linkedin Github Some of my projects UI/UX Redesign Process/Review" />
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
          <script>
              {`(function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:1866351,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
              `}
          </script>

    </Helmet>
      <nav class="hidden">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <IconContext.Provider value={{ color: "#000000b5", size:"1.5em" }}>
      <div className="content">
        <Routes />
      </div>
      </IconContext.Provider>
    </div>
  </Router>
)
