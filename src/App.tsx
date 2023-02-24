import { useEffect, useState } from "react";
import Name from "./Name";

export function App() {
	const [count, setCount] = useState(0);
	const [isMsgOn, setIsMsgOn] = useState(false);
	const [name, setName] = useState("");

	useEffect(() => {
		alert("Welcome");
	}, []);

	useEffect(() => {
		if (count > 0) setIsMsgOn(!isMsgOn);
	}, [count]);

	const handleClick = (name: string) => {
		setName(name);
	};

	return (
		<>
			<div className="question">
				As part of the first challenge, when the button is clicked display Good morning message at the bottom of button and change the button label to
				Hide greeting.
				<br />
				When the user enters name in the input field, the message should say Good morning with name.
				<ol>
					<li>Show Good morning message only on button click.</li>
					<li>Change the button label to Hide greeting</li>
					<li>When Hide greeting button is clicked, hide Good morning message</li>
					<li>Welcome alert should be not be shown when the button is clicked.</li>
					<li>User should be able to enter the name in the input box</li>
					<li>Once the name is entered and clicked on submit, show good morning message with name.</li>
					<li>Show the number of times greeting button was clicked in the counter input box </li>
				</ol>
			</div>

			<section>
				<button
					className="mt-5"
					onClick={() => {
						setCount((count) => count + 1);
					}}
				>
					{isMsgOn ? "Hide Greeting" : "Show greeting"}
				</button>
				{isMsgOn && (
					<div id="msg" className="mt-5">
						<h2>Good morning {name}</h2>
					</div>
				)}
			</section>
			<Name counter={count} handleClick={handleClick} />
		</>
	);
}

export default App;
