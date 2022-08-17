import React, { Component } from 'react';


class Counter extends Component {
   

    styles = {
        fontSize: 10
    }
   // constructor(){
    //    super()
    //    this.handleIncrement= this.handleIncrement.bind(this)
   // }
   
   
    render()
    {    
       

        return (  <div>
            {this.props.children}
            <span style={{fontSize:30}} className={this.getBadgeClassses()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-danger">Increment</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">delete</button>
        </div> 
        )


    }

   


  

    getBadgeClassses() {
        let classes = "btn ";
        classes += this.props.counter.value === 0 ? "btn-warning" : "btn-info";
        return classes;
    }

    formatCount()
    { 
        const {value} = this.props.counter
        return value === 0 ? "Zero" : value;
        
    }
}
 
export default Counter;
