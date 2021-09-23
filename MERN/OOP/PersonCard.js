import React, {Component} from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            age: 1,
            hairColor: ""
            

        }
    }

    
    render(){


    
        return (
            <div>
                <h1>
                    {this.props.lastName}, {this.props.firstName}
                </h1>
                <p>
                    Age:  {this.props.age}
                </p>
                <p>
                    Hair Color:  {this.props.hairColor}
                </p>
                <button onClick={updateHandler}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
    
        );

    }
}

export default PersonCard;
