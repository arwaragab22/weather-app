import React,{ Component } from 'react';
import './form.css';
class FORM extends Component {
    constructor(props) {
        super(props)
this.inputone = React.createRef();
        this.inputtwo = React.createRef();
      
    }
   

  

    render() { 
        return (
          <form>
            <input type="text" ref={this.inputone} defaultValue="egypt" />
            <input type="text" ref={this.inputtwo} defaultValue="cairo" />
            <button
              onClick={(e) =>
                this.props.show(
                  e,
                  this.inputone.current.value,
                  this.inputtwo.current.value
                )
              }
            >
              get weather
            </button>
          </form>
        );
    }
}
 
export default FORM;
