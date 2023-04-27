import {Component} from 'react'

class Counter extends Component{
    
    constructor(props){
        super();
        this.state={
            number:0
        }
    }
    increament = ()=>{
        this.setState({
            number: this.state.number+1
        })
    }
    decreament = ()=>{
        this.setState({
            number: this.state.number-1
        })
    }
    reset = ()=>{
        this.setState({
            number: 0
        })
    }

    render(){
        return <div>
            <h1>The number is {this.state.number} </h1>
            <button onClick={this.increament}>Increament</button>
            <button style={{margin:"0 1rem"}} onClick={this.decreament}>Decreament</button>
            <button onClick={this.reset}>Reset</button>
        </div>
    }
}



export default Counter