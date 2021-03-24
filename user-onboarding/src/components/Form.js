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
                    <input></input>
                </label>
                <br></br>
                <br></br>
                <label>
                    Email:
                    <input></input>
                </label>
                <br></br>
                <br></br>
                <label>
                    Password:
                    <input></input>
                </label>
                <br></br>
                <br></br>
                <label>
                    Terms of Service:
                    <input></input>
                </label>
                <br></br>
                <br></br>
                <button>submit</button>
            </form>
        </div>
    );
};