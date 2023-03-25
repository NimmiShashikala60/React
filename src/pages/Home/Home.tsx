import React, { Component } from "react";
import Post from "../../componets/Post/Post";
import Tag from "../../componets/Tag";
import {} from "./index";

type PostDetails={
  id:String;
  title:String;
  description:React.ReactDOM;
  hourseCount:String;
  lectureName:String
  Tag:String;
  
}
type PostProps={

}

export default class Home extends Component {
  render() {
    return (
      <div className="p-6">
        <h1>kjsdfjkhsdf</h1>
        <Post
          title="React"
          description="Introduction to React"
          tags={["intro", "frontend"]}
        />
      </div>
    );
  }
}
