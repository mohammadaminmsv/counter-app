import React, { Component } from 'react';


class Navbar extends Component {
    
    render() { 
        return (<nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar{" "}
          <span className='badge badge-pill badge-secondary'>{this.props.totalcounters}</span></a>

        </div>
      </nav>
      );
    }
}
 
export default Navbar;


