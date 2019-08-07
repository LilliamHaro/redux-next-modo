import React, { Component } from "react";
import Nav from "./nav";
import Footer from "./footer";
import { connect } from "react-redux";
import { fillDataApi } from "../redux/actions";

const mapStateToProps = state => {
  return {
    modo: state.modo,
    dataApi: state.dataApi
  };
};

function mapDispatchToProps(dispatch) {
  return {
    fillDataApi: dataApi => dispatch(fillDataApi(dataApi))
  };
}

class ConnectedLayout extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (this.props.dataApi.length === 0 ) {
      console.log()
      let that = this;
      fetch("https://oazivitality.com/api/products")
        .then(function(response) {
          return response.json();
        })
        .then(function(myJson) {
          console.log('datapi to fill', myJson.products)
          that.props.fillDataApi(myJson.products);
        });
    } else {
      console.log("is full");
    }
  }

  render() {
    return (
      <main className={this.props.modo}>
        <Nav />
        {this.props.children}
        <Footer />
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
          }
          main {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            position: relative;
          }
          .principalContent {
            padding: 20px;
            flex: 1 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s;
            flex-direction:column;
          }

          .noche footer,
          .noche nav {
            color: #d1d1d1;
            background-color: #1a1a1b;
          }

          .noche .principalContent {
            background-color: #030303;
            color: #d1d1d1;
          }

          .noche footer button {
            background: #000;
            color: #fff;
          }
          .noche nav ul li a {
            color: #fff;
          }

          .dia footer,
          .dia nav {
            color: #000;
            background-color: #fff;
          }

          .dia .principalContent {
            background-color: #dae0e6;
            color: #000;
          }
          .dia footer button {
            background: #00c4b3;
            color: #fff;
          }

          .dia nav ul li a {
            color: #000;
          }
        `}</style>
      </main>
    );
  }
}
const Layout = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedLayout);

export default Layout;
