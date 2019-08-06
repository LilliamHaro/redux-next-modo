import React, { Component } from "react";
import Layout from "../../components/layout";
import { connect } from "react-redux";
import SeoHead from "../../components/seoHead";

const mapStateToProps = state => {
  return {
    dataApi: state.dataApi
  };
};

class ProductConnected extends Component {
  constructor() {
    super();
    this.state = {};
  }

  // static async getInitialProps({ query }) {
  //   try {
  //     const res = await fetch(`http://localhost/api/posts/${query.postslug}`, {
  //       method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //       mode: 'cors', // no-cors, cors, *same-origin
  //     });
  //     const json = await res.json();
  //     return { data: json.data };
  //   } catch (err) {
  //     console.log('err');
  //   }
  // }


  render() {
    return (
      <Layout>
        {this.props.dataApi.map((item, i) => {
          if (item.ProductCode === this.props.cc.product) {
            return (
              <section key={i} className="mainContent">
                <SeoHead
                  title={item.ProductName}
                  description={item.ProductDescription}
                  url="ssssssfff"
                  ogImage={item.ProductImage}
                />
                <h1>{item.ProductName}</h1>
                <p>{item.ProductDescription}</p>
                <img src={item.ProductImage}  />
              </section>
            );
          }
        })}
      </Layout>
    );
  }
}

ProductConnected.getInitialProps = async context => {
  const cc = context.query;
  return { cc };
};

const Product = connect(mapStateToProps)(ProductConnected);

export default Product;
