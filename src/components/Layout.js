import React,{useEffect,useState} from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './bravo.css'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  const [ classPathName, setClassPathName] = useState("");
  useEffect( () => {
    const cc = typeof window !== 'undefined' ? makeSafeId(window.location.pathname,"pag-") : '';
    setClassPathName(cc);
    console.log(`use effect: ${cc}`);
  });

                  // sanitize string to use as class name
                // taken from https://stackoverflow.com/questions/7627000/javascript-convert-string-to-safe-class-name-for-css
                var makeSafeId = function (name, prefix) {
                  name = name.replace(/[!\"\s#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '');
                  return prefix + name;
              };
              const cpn = typeof window !== 'undefined' ? makeSafeId(window.location.pathname,"pag-") : '';
  return (
    <div className={`el-bravo ${classPathName} gg ${cpn}`} >
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
        <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async="" />
        <script src={`${withPrefix('/')}onesignal-bootstrap.js`} async="" />
      </Helmet>
      <Navbar />
      <div >{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
