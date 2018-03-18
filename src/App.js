import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "john[at]foo.com",
            name: {
                firstname: "Number",
                lastname: 2,
            },
            actions: ["a", "a"]
        };
    }

    async handleSubmit(event) {
        event.preventDefault();
        const payload = {
            userData: {
                email: this.state.email,
                name: this.state.name
            },
            actions: this.state.actions
        };
        fetch('/form', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            response.json().then(json => {
                if (response.status === 200) {
                    this.setState({success: "Thanks for submitting valid data!", error: ""});
                    console.log(this.state.success);
                } else {
                    this.setState({error: json.message, success: ""});
                }
            });
        });
    }


    handleChange(event) {
        const fieldName = event.target.name;
        switch (fieldName) {
            case "email": {
                this.setState({email: event.target.value});
                break;
            }
            case "firstname": {
                this.setState({name: Object.assign({}, this.state.name, {firstname: event.target.value})});
                break;
            }
            case "lastname": {
                this.setState({name: Object.assign({}, this.state.name, {lastname: event.target.value})});
                break;
            }
            case "actions": {
                let value = event.target.value || "";
                this.setState({actions: value.split(',')});
                break;
            }
            default:
                break;
        }
    }

    render() {
        return (
            <div className="App">
                <header>
                    <h1 className="App-title">Vayo form validations</h1>
                </header>
                {this.state.error && <div>{this.state.error}</div>}
                {this.state.success && <div>{this.state.success}</div>}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <fieldset>
                        <legend>User data</legend>
                        <label>
                            Email:
                            <input type="text" name="email" value={this.state.email}
                                   onChange={this.handleChange.bind(this)}/>
                        </label>
                        <br/>
                        <label>
                            Name:
                            <fieldset>
                                <label>First Name:
                                    <input type="text" name="firstname" value={this.state.name.firstname}
                                           onChange={this.handleChange.bind(this)}/>
                                </label>
                                <label>Last Name:
                                    <input type="text" name="lastname" value={this.state.name.lastname}
                                           onChange={this.handleChange.bind(this)}/>
                                </label>
                            </fieldset>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Enabled Actions</legend>
                        <input type="text" name="actions" value={this.state.actions}
                               onChange={this.handleChange.bind(this)}/>
                    </fieldset>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default App;
