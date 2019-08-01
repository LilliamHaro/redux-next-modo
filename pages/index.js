import React, { Component } from "react";
import Layout from "../components/layout";
import SeoHead from '../components/seoHead';


class Index extends Component {
  render() {
    return ( <Layout>
      <SeoHead  title="Home"
        description="Home description"
        url="sss"
        ogImage="https://circuit.com.pe/test-nextjs/static/test-seo.jpg"/>

      <section className="principalContent">
         <h1>INDEX</h1>
      </section>
    </Layout>);
  }
}

export default Index
