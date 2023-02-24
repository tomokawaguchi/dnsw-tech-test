import { useState } from "react";

interface NameProps {
	counter: number;
	handleClick: (data: string) => void;
}

const Name = ({ counter, handleClick }: NameProps): JSX.Element => {
	const [data, setData] = useState("");

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const target = e.target;
		if (target) setData(target.value); // html element can be null
	};

	return (
		<>
			<div className="mt-5">Please enter your name</div>
			<div className="input-btn-wrapper">
				<input className="mt-5" type="text" placeholder="Enter Text" onChange={handleInput} />
				<div className="mt-5">
					<button type="button" onClick={() => handleClick(data)}>
						Submit
					</button>
				</div>
			</div>

			<div>
				Greeting button click counter:
				<input className="mt-5" type="number" placeholder="Counter value" value={counter} readOnly />
			</div>
		</>
	);
};

export default Name;
