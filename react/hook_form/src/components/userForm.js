import React from "react";

const UserForm = (props) => {
    const {inputs, setInputs} = props;
    const onChange = (e) => {
        setInputs ({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" onChange={onChange} name="firstName"/>
                <p>
                    {inputs.firstName.length > 0 && inputs.firstName.length < 2 
                    ? "First name must be a minimum of 2 characters!"
                : ''}
                </p>
            </div>
            <div>
            <label htmlFor="lastName">Last Name: </label>
                <input type="text" onChange={onChange} name="lastName"/>
                <p>
                    {inputs.lastName.length > 0 && inputs.lastName.length <2 
                    ? "Last name must be a minimum of 2 characters!"
                : ''}
                </p>
            </div>
            <div>
            <label htmlFor="email">Email: </label>
                <input type="text" onChange={onChange} name="email"/>
                <p>
                    {inputs.email.length > 0 && inputs.email.length < 5 
                    ? "Email must be a minimum of 5 characters!"
                : ''}
                </p>
            </div>
            <div>
            <label htmlFor="password">Password: </label>
                <input type="text" onChange={onChange} name="password"/>
                <p>
                    {inputs.password.length > 0 && inputs.password.length < 8 
                    ? "Password must be a minimum of 8 characters!"
                : ''}
                </p>
            </div>
            <div>
            <label htmlFor="confirmPassword">Confirm Password: </label>
                <input type="text" onChange={onChange} name="confirmPassword"/>
                <p>
                    {inputs.confirmPassword.length > 0 && inputs.confirmPassword.length < 8 
                    ? "Password must be a minimum of 8 characters!"
                : ''}
                    {inputs.password !== inputs.confirmPassword 
                    ? "Passwords do not match."
                : ''}
                </p>
            </div>
        </form>
    );
}

export default UserForm;