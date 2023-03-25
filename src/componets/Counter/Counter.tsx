import  { Component } from 'react'
import {  } from "./index";

type CounterProps={};
type CounterStates={
    count:number;
};

export default class Counter extends Component <CounterProps,CounterStates>{
    constructor(props: CounterProps){
        super(props);
        this.state = {
            count: 0,
        }
        console.log("Nimmi");
    }
    componentDidMount(): void { // componet eka dom ekata inject in browser
        console.log("Hii");
    }
    componentDidUpdate(): void {
        console.log("");
    }
    componentWillUnmount(): void { // browser eken ain wenawa
        console.log("");
    }
    // increaseCount=(){} == normal function ekak
    increaseCount = () => {//arrow function
        this.setState({count: this.state.count+1});

    }
    discreaseCount = () => {
        this.setState({count: this.state.count-1});
    }


  render() {
    return (
        <div className='p-10'>
            <h1>Count:{this.state.count}</h1>
      <div className="flex space-x-3 mt-5">
        
        <button
        disabled={this.state.count === 10 ? true : false}
         className="border border-green-800 px-4 py-2 text-green-800 rounded-xl hover:bg-green-800  hover:text-white" 
         onClick={this.increaseCount}
         >
            Increase
            </button>
            
        <button disabled={this.state.count == 0 ? true:false}
        className="border border-red-500 px-4 py-2 text-red-800 rounded-xl hover:bg-red-800 hover:bg-green-800" 
        onClick={this.discreaseCount}
        >
            Descrese
            </button>
      </div>
      </div>
    );
  }
}
