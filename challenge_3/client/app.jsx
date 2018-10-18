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
        const form1 = (
            <div>
            <form>
                <div className="form1">
                <h2>Step 1</h2>
                <div className="name">
                <input type='text' className="inputname" placeholder='Enter Name'></input>
                <button type="submit" className="namesubmit">Submit Name</button>
                </div>
                <div className="email">
                <input type='text' className="inputemail" placeholder='Enter Email'></input>
                <button type="submit" className="emailsubmit">Submit Email</button>
                </div>
                <div className="pwd">
                <input type='text' className="inputpwd" placeholder='Enter Password'></input>
                <button type="submit" className="pwdsubmit">Submit Password</button>
                </div>
                </div>
            </form>
            <button>Next</button>
            </div>
        )

        const homepage = (
            <div>
                <h1>Ready to checkout?</h1>
                <button onClick={this.handleCheckOut.bind(this)}>Check Out</button>
            </div>
        )

        return (this.state.form1 ? form1 : homepage)
    }
  
}

// var form = () => (
//     <form>
//         <div className="name">
//         <input type='text' className="inputname" placeholder='Enter Name'></input>
//         <button type="submit" className="namesubmit">Submit Name</button>
//         </div>
//     </form>
// )
    

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// export default App;