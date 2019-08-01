import React from 'react'
import App, { Component, Container } from 'next/app'
import { Provider } from 'react-redux'
import store from '../redux/store'

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if(Component.getInitialProps) {
       pageProps =  await Component.getInitialProps(ctx)
    }
  
    return { pageProps }
  }


  render(){
    const { Component, pageProps } =  this.props 
    return(
     <Container>
       <Provider store={store}>
          <Component {...pageProps} />
       </Provider>
     </Container>
    )
  }

}

export default MyApp
