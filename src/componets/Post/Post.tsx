import  { Component } from 'react'
import Tag from '../Tag/Tag';


    type PostProps={
        title:string;
        description:string;
        tags:string[];
      };
      type PostState={};

  export default class Post extends Component<PostProps,PostState> {
  render() {
    return (
        <div className='p-6 border border-slate-400 w-full rounded mt-2'>
        <h3 className='text-center'>{this.props.title}</h3>
        <p text-xl p-4>{this.props.description}</p>
        <div className='flex gap-5 justify-center'>
        {this.props.tags.map((text) => (
            <Tag Tag={text} />
          ))}

        </div>
      </div>
    )
  }
}
