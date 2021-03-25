import { React } from 'react';
// import function logic from App
// need to add initialFormErrors for schema?
export default function Form(props) {

    const { values, change, submit, disabled, errors } = props;
    // console.log(values);

    // CHANGE AND SUBMIT LOGIC SHOULD BE IN HERE
    // creating onChange logic for the inputs for the form
    const onChange = (event) => {
        // console.log(event.target.checked)
        // extract what you need from the event target object
        const { name, value, type, checked } = event.target;
        // not sure what this if statement is doing
        // if the type says 'checkbox' use the boolean for checked, otherwise just spit back the value
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    };


    return (
        <div>
            <form onSubmit={ onSubmit }>
            {/* <form onSubmit={submit}> */}
                {/* <input name='name' type='text' value={formValues.name} onChange={change} placeholder='i.e. Tony' required></input>
                <br></br>
                <input name='email' type='text' value={formValues.email} onChange={change} placeholder='i.e. Stark' required></input>
                <br></br>
                <input name='role' type='text' value={formValues.role} onChange={change} placeholder='i.e tonystark@ironman.com' required></input> */}
                {/* <br></br> */}
                <button disabled={disabled}>submit</button>

                <div className="errors">
                {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.termsOfService}</div>
                </div>
                <br></br>
                <label>
                    Name:
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'

                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Email:
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'

                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Password:
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'

                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    {/* is checked property is resolved to true, it will always be checked true - we need to set it to be checked if the value is single */}
                    {/* values.[INSERT KEY HERE] in checked evaluate a boolean for { if value.[ WHATEVER] === true, then put this } */}
                    Terms of Service:
                    <input
                        value={values.termsOfService}
                        onChange={onChange}
                        name='termsOfService'
                        // checked
                        type='checkbox'
                    />
                </label>
                <br></br>
                <br></br>
                <button id='submitBtn'>submit</button>
            </form>
        </div>
    );
};