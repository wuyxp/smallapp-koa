import React, {Component} from 'react'

class Count extends Component{

    render(){
        return (
            <div>
                {this.props.count}
            </div>
        )
    }
}
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state= {
            count: 100,
            list:[1,2,3,4,5,6]
        }
        this.plus = this.plus.bind(this);
        this.mins = this.mins.bind(this);
    }
    mins(){
        const count = this.state.count;
        let list = this.state.list;
        list = [...list, count];

        this.setState({
            count: this.state.count-1,
            list,
        })
    }
    plus(){
        const count = this.state.count;
        let list = this.state.list;
        list = [...list, count];

        this.setState({
            count: this.state.count+1,
            list,
        })
    }
    render(){
        return(
            <div>
                <span>title</span>
                <button onClick={this.plus}>+</button>
                <button onClick={this.mins}>-</button>
                <Count count={this.state.count} />
                {
                    this.state.list.map((item, index) => <div key={index}>{item}</div>)
                }
            </div>
        )
    }
}