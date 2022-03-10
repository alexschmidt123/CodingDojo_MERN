import React, { Component } from 'react'; //import react and component so that we can use those to create a class based react component

class MenuItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //create a state variable for the likes so its not just in a props variable (which we were not allowed to update teh value up according to react)
            likes: this.props.likes //initialize the value of likes to be whatever value we got from props
        };

        this.likeItemHandler = ()=>{
            
            this.setState({likes: this.state.likes +1}) //in order to update state variables, we cant update it like we would a regular variable, we must use this.setState() to update state variables
        }
    }

    render(){
        return(
            <>
                <div>
                    <h3>{this.props.dishName}</h3>
                    <p>Price: ${this.props.price}</p>
                    <p>Number of likes: {this.state.likes}</p>
                    <p>Description: Its deep fried in basil oil and basil leaves and all that. Its nice. </p> 
                    <button onClick = {this.likeItemHandler}>Like item &#9829;</button> 


                    {/* <button onClick = {()=>this.setState({likes: this.state.likes +1})}>Like item &#9829;</button>  */}
                </div>
                <hr />
            </>
        )
    }
}


export default MenuItem;