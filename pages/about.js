import React, { Component } from "react";
import Layout from "../components/layout";
import SeoHead from '../components/seoHead';
import Link from "next/link";


class Index extends Component {
  render() {
    return ( <Layout>
      <SeoHead  title="About"
        description="About description"
        url="ssssssfff"
        ogImage="https://circuit.com.pe/test-nextjs/static/mor.jpg"/>

      <section className="principalContent">
        <h1>ABOUT</h1>
      </section>
    </Layout>);
  }
}

export default Index
