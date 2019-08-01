import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeModo } from '../redux/actions';



const mapStateToProps = state => {
  return {
    modo: state.modo,
    modoTitle: state.modoTitle
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeModo: modo => dispatch(changeModo())
  }
}

class ConnectedFooter extends Component {
  constructor() {
    super();
    this.changingModo = this.changingModo.bind(this)
  }

  changingModo(){
    this.props.changeModo()
  }

  render() {
    return(
      <footer>
        <div>
        modo: {this.props.modo}
        </div>
      
        <button onClick={this.changingModo} >{this.props.modoTitle}</button>

        <style jsx>{`
          footer {
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:20px;
            flex-shrink: 0;
            transition:all 0.3s
          }
          footer button {
            cursor:pointer;
            padding:10px 30px;
            border:none;
            border-radius:30px;
            transition:all 0.3s;
            outline:none
          }
          
          `}</style>
      </footer>
    )
  }
}

const Footer = connect(mapStateToProps,mapDispatchToProps)(ConnectedFooter)


export default Footer