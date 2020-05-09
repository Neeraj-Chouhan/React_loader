import React, { Component } from 'react'
import 'simple-react-loader/dist/index.css'
export class Loader extends Component{

  constructor(props) {
    super(props);
  }

  render(){

    let loadingpanel = {

      background: "rgba(0, 0, 0, 0.2) none repeat scroll 0 0",
      position: "relative",
      width: "100%"

    }

    let loadingcontainer = {

      background: "rgba(49, 133, 156, 0.4) none repeat scroll 0 0",
      color: "#fff",
      height: "100%",
      left: "0",
      paddingTop: "15%",
      position: "fixed",
      textAlign: "center",
      top: "0",
      width: "100%",
      zIndex: "999999"
    }

    let  loaderStyle={};

    if (!this.props.showLoader) {

      loaderStyle = {display : "none" };
    }

    return (<div style={loaderStyle}>
      <div style={loadingpanel}>
           <div style={loadingcontainer}>
               <i className="fa fa-spinner fa-pulse fa-5x fa-fw"></i>
               <span className="sr-only">Loading...</span>
           </div>
       </div>
       </div>)
  }

}