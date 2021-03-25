import { React } from 'react';
// import function logic from App



// need to add initialFormErrors for schema?


export default function Form(props) {

    const { values } = props;
    console.log(values);

    // CHANGE AND SUBMIT LOGIC SHOULD BE IN HERE
    const onChange = (event) => {
        console.log(event.target)
    };


    // const formSubmit = () => {

    // };

    return (
        <div>
            <form>
            {/* <form onSubmit={submit}> */}
                {/* <input name='name' type='text' value={formValues.name} onChange={change} placeholder='i.e. Tony' required></input>
                <br></br>
                <input name='email' type='text' value={formValues.email} onChange={change} placeholder='i.e. Stark' required></input>
                <br></br>
                <input name='role' type='text' value={formValues.role} onChange={change} placeholder='i.e tonystark@ironman.com' required></input> */}
                {/* <br></br> */}
                <br></br>
                <label>
                    Name:
                    <input
                        value={values.name}
                        // onChange
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
                        // onChange
                        name='name'
                        type='text'

                    />
                </label>
                <br></br>
                <br></br>
                <label>
                    Password:
                    <input
                        value={values.password}
                        // onChange
                        name='name'
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
                        // onChange
                        name='termsOfService'
                        // checked
                        type='checkbox'
                    />
                </label>
                <br></br>
                <br></br>
                <button>submit</button>
            </form>
        </div>
    );
};