import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import * as headerStyles from '../components/header.module.scss';

function Header() {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                    title
         }
      }
    }
    `)
    return (
        <div>
            <header className={headerStyles.header}>
                <Link className={headerStyles.title} to='/'>
                   <h1>{data.site.siteMetadata.title}</h1>
                </Link>
                <nav>
                    <ul className={headerStyles.navlist}>
                        <li>
                            <Link className={headerStyles.navitem} activeClassName={headerStyles.activenavitem} to='/'>Suscribirse</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navitem} activeClassName={headerStyles.activenavitem} to='/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navitem} activeClassName={headerStyles.activenavitem} to='/contact'>Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default Header