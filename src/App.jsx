import React from 'react';

export default function App() {
	const [count, setCount] = React.useState(0);


	return (
		<div className="App">
			<button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
			<span>{count}</span>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
		</div>
	)
}
