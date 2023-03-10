import React, {Component} from 'react';
import classes from './personCards.module.css';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addAge: this.props.age,
        };
    }
    render() {
        const{firstName, lastName, hairColor, age} = this.props;
        return (
            <div className={classes.container}>
            <div className={classes.card}>
                <div className={classes.content}>
                    <h1>{lastName}, {firstName}</h1>
                    <p>Age: {this.state.addAge} </p>
                    <p>Hair Color: {hairColor}</p>
                <button
                    onClick={() => {
                        this.setState({addAge: this.state.addAge + 1});
                    }}>
                        Add birthday for {firstName} {lastName}
                    </button>
                </div>
            </div>
            </div>
        )
    }
}
export default PersonCard;