import React from 'react'
import Header from './header';
import Footer from './footer';
import * as layoutStyles from '../components/layout.module.scss';

function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout