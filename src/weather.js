import React, { Component } from 'react';
import './weather.css'
class WHEATHER extends Component {
    state = {  } 
    render() {
        return (
          <div>
                {this.props.tempreature && <p>temp:{this.props.tempreature}</p>}
                {this.props.city && <p>city:{this.props.city}</p>}
            {this.props.country && <p>country:{this.props.country}</p>}
                {this.props.humidity && <p> humidity:{this.props.humidity}</p>}
            {this.props.description && <p> description:{this.props.description}</p>}
          </div>
        );
    }
}
 
export default WHEATHER;