import React from 'react';
import Layout from '../components/layout';
import * as contactStyles from './contact.module.scss';
import Head from "../components/head";

function contact() {
  return (
    <Layout>
    <Head title="Contacto" />
      <div className={contactStyles.wrapper}>
        <form action='mailto:elpulptimes@gmail.com' method='POST'>
          <input type="text" placeholder="Nombre" />
          <input className={contactStyles.email} type="email" placeholder="Email" />
          <textarea className={contactStyles.mensaje} name="message" type="text" placeholder="Mensaje"></textarea>
          <div className={contactStyles.submitbutton}>
            <input type="submit" value="Enviar" id="inputsubmit" />
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default contact