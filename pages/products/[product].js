import React, { Component } from "react";
import Layout from "../../components/layout";
import { connect } from "react-redux";
import SeoHead from "../../components/seoHead";

const mapStateToProps = state => {
  return {
    dataApi: state.dataApi,
  };
};

class ProductConnected extends Component {
  constructor(){
    super();
    this.state = {
      itemName: ''
    }
  }
  componentDidMount() {
    this.props.dataApi.map((item, i) =>
      item.ProductCode === this.props.cc.product ? (
        this.setState({
          itemName: item.ProductName
        },function(){
          console.log(this.state.itemName)
        })
      ) : null
    );
  }

  render() {
    return (
      <Layout>
        <SeoHead
          title="About"
          description="About description"
          url="ssssssfff"
          ogImage="https://circuit.com.pe/test-nextjs/static/mor.jpg"
        />

        <section className="mainContent">
          <h1>
            {this.state.itemName}
          </h1>
          
        </section>
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
