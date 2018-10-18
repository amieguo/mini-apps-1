// import exampleData from '../public/exampleData.js';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            homepage: true,
            form1: false,
            form2: false,
            finish: false
        }
    }

    handleCheckOut() {
        this.setState({
            form1: !this.state.form1,
            homepage: !this.state.homepage
        })
    }

    handleFormOne(dataId) {
        this.setState({
            form2: !this.state.form2,
            form1: !this.state.form1,
            id: dataId
        })
    }

    handleFormTwo() {
        this.setState({
            finish: !this.state.finish,
            form2: !this.state.form2
        })
    }
    
    render() {
        const form1 = (<FormOne formOnesubmit={this.handleFormOne.bind(this)} id={this.state.id}/>)
        const form2 = (<FormTwo formTwosubmit={this.handleFormTwo.bind(this)}/>)

        const homepage = (
            <div>
                <h1>Ready to checkout?</h1>
                <button onClick={this.handleCheckOut.bind(this)}>Check Out</button>
            </div>
        )

        const finish = (
            <div>
                <h2>Finish Checkout!</h2>
            </div>
        )

        var current;
        if (this.state.finish) {
            current = finish;
        } else if (this.state.form2) {
            current = form2;
        } else if (this.state.form1) {
            current = form1;
        } else if (this.state.homepage) {
            current = homepage;
        }
        return (
            current
            // this.state.form1 ? form1 : homepage
        )
    }
}

class FormOne extends React.Component {
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
            success: (data) => {
                // console.log(this.props.id)
                // this.props.id = data.insertId;
                // console.log('insertId:', data.insertId)
                this.props.formOnesubmit(data.insertId)
            }
        })
    }

    render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <div className="name">
        <input id="name" type='text' value={this.state.name} onChange={this.handleChange} placeholder='Enter Name'></input>
        <input id="email" type='text' value={this.state.email} onChange={this.handleChange} placeholder='Enter Email'></input>
        <input id="password" type='text' value={this.state.password} onChange={this.handleChange} placeholder='Enter Password'></input>
        <button type="submit" className="namesubmit">Next</button>
        </div>
    </form>
    )
    }
}

class FormTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shipping: '',
            creditcard: ''
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
        $.ajax('/form2', {
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                shipping: this.state.shipping,
                creditcard: this.state.creditcard
            }),
            success: (data) => {
                this.props.formTwosubmit()
            }
        })
    }

    render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <div className="name">
        <input id="shipping" type='text' value={this.state.shipping} onChange={this.handleChange} placeholder='Enter Shipping Address'></input>
        <input id="creditcard" type='text' value={this.state.creditcard} onChange={this.handleChange} placeholder='Enter Credit Card'></input>
        <button type="submit" className="submit">Next</button>
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