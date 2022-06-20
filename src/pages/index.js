import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";
import SuscribeForm from "../components/suscribe";
import * as indexStyles from "./index.module.scss"
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Helmet>
      <Head title="Suscribirse" />
      <SuscribeForm />
    </Layout>
  )
}
export default IndexPage


