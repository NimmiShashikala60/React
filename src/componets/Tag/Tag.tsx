import { type } from 'os'
import  { Component } from 'react'



type TagProps={
    Tag:string;
}
type TagState={}


export default class Tag extends Component <TagProps,TagState>{
  render() {
    return (
        <div className=" px-6 py-2 border border-slate-400 rounded">
        <p>{this.props.Tag}</p>
      </div>
    );
  }
}

