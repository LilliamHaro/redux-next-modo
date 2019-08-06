import React, { Component } from "react";
import Layout from "../components/layout";
import SeoHead from '../components/seoHead';
import Link from "next/link";
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    dataApi:state.dataApi
  }
}

class IndexConnected extends Component {
  render() {
    return ( <Layout>
      <SeoHead  title="About"
        description="About description"
        url="ssssssfff"
        ogImage="https://circuit.com.pe/test-nextjs/static/mor.jpg"/>

      <section className="principalContent">
        <h1>ABOUT</h1>
        <ul className="about_list">
          {this.props.dataApi.map( (item,i) => (
            <li key={i}>
              <Link
                href={"/products?slug=" + item.ProductCode}
                as={"/products/" + item.ProductCode}
              >
                <a>{item.ProductName}</a>
              </Link></li>
          ) )}
        </ul>

      </section>

      <style jsx>{`
        
        
        `}</style>
      
    </Layout>);
  }
}

const Index = connect(mapStateToProps)(IndexConnected)

export default Index
