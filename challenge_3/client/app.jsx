// import exampleData from '../public/exampleData.js';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            homepage: true,
            form1: false
        }
    }

    handleCheckOut() {
        this.setState({
            form1: !this.state.form1
        })
    }
    
    render() {
        const form1 = (<Form />)
        const homepage = (
            <div>
                <h1>Ready to checkout?</h1>
                <button onClick={this.handleCheckOut.bind(this)}>Check Out</button>
            </div>
        )
        return (this.state.form1 ? form1 : homepage)
    }
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    handleSubmit(e) {
        e.preventDefault();
        $.ajax('/form1', {
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }),
            // success: (data) => {
                
            // }
        })
    }
    
    render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <div className="name">
        <input id="name" type='text' value={this.state.name} onChange={this.handleChange} placeholder='Enter Name'></input>
        <input id="email" type='text' value={this.state.email} onChange={this.handleChange} placeholder='Enter Email'></input>
        <input id="password" type='text' value={this.state.password} onChange={this.handleChange} placeholder='Enter Password'></input>
        <button type="submit" className="namesubmit">Submit Step</button>
        </div>
    </form>
    )
    }
}
    

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// export default App;

    // <div>
            // <form>
            //     <div className="form1">
            //     <h2>Step 1</h2>
            //     <div className="name">
            //     <input type='text' className="inputname" placeholder='Enter Name' onChange={this.handleSubmit}></input>
            //     <button type="submit" className="namesubmit">Submit Name</button>
            //     </div>
            //     <div className="email">
            //     <input type='text' className="inputemail" placeholder='Enter Email'></input>
            //     <button type="submit" className="emailsubmit">Submit Email</button>
            //     </div>
            //     <div className="pwd">
            //     <input type='text' className="inputpwd" placeholder='Enter Password'></input>
            //     <button type="submit" className="pwdsubmit">Submit Password</button>
            //     </div>
            //     </div>
            // </form>
            // <button>Next</button>
            // </div>
        // )