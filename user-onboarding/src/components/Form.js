import { React } from 'react';

export default function Form(props) {
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
                    <input type='text'></input>
                </label>
                <br></br>
                <br></br>
                <label>
                    Email:
                    <input type='text'></input>
                </label>
                <br></br>
                <br></br>
                <label>
                    Password:
                    <input type='text'></input>
                </label>
                <br></br>
                <br></br>
                <label>
                    {/* is checked property is resolved to true, it will always be checked true - we need to set it to be checked if the value is single */}
                    {/* values.[INSERT KEY HERE] in checked evaluate a boolean for { if value.[ WHATEVER] === true, then put this } */}
                    Terms of Service:
                    <input type='checkbox' checked={ true }></input>
                </label>
                <br></br>
                <br></br>
                <button>submit</button>
            </form>
        </div>
    );
};