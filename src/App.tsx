import React, { Component } from "react";
import "./App.css";
import Content from "./componets/Content";
import Counter from "./componets/Counter";
import Header from "./componets/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
export default class App extends Component {
  // class based
  componentDidMount(): void {
    //  console.log("Hii");
  }
  render(): React.ReactNode {
    return (
      <div className="min-h-screen">
        <Header />
        <Content />
        {/* <About/> */}
      </div>
    );
  }
}
