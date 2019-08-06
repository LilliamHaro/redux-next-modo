import React, { Component } from "react";
import Layout from "../../components/layout";
import { connect } from "react-redux";
import SeoHead from "../../components/seoHead";

class Product extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <SeoHead
          title={this.props.item[0].ProductName}
          description={this.props.item[0].ProductDescription}
          url="ssssssfff"
          ogImage={this.props.item[0].ProductImage}
        />

        <section className="mainContent">
          <h1>{this.props.item[0].ProductName}</h1>
          <p>{this.props.item[0].ProductDescription}</p>
          <img src={this.props.item[0].ProductImage} />
        </section>
      </Layout>
    );
  }
}

Product.getInitialProps = async context => {
  const cc = context.query;
  const res = await fetch(`https://oazivitality.com/api/parse?${cc.product}`);
  const item = await res.json();
  return { cc, item: item.products };
};

export default Product;
