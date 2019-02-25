import React, {Component} from "react";

class Newcomponent extends Component{

    constructor(props){
        super(props);
        this.state = {
          
        };
      }
    
    render(){
        return(
            <div>
                <p>
                    {this.alert(this.props)}
                </p>
            </div>
        );
        
    };

    alert =  (props) =>{
        let text = props.text + "123";
        return( text );
    };
    
}
export default Newcomponent;