import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
				this.handleMinus = this.handleMinus.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
    }

		handleMinus() {
			this.setState({ count: this.state.count - 1});
	};


    handlePlus() {
        this.setState({ count: this.state.count + 1});
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.handleMinus}>-</button>
								<span>{this.state.count}</span>
								<button onClick={this.handlePlus}>+</button>
            </div>
        );
    }
}

export default App;