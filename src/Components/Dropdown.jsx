import React, { useState, useEffect} from "react";
import Accordion from "react-bootstrap/Accordion";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

export default function Dropdown() {
	const [state, setState] = useState({ status: true });

	const handleChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	const [books, setBooks] = useState([]);
	// const componentMounted = useRef(true); // (3) component is mounted

	useEffect(() => {
		const url =
			"https://619b61042782760017445573.mockapi.io/api/v1/getBanner/1";

		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				setBooks(json);
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchData();
	}, []);
	console.log("dataaaaaaaa", books);

	return (
		<div>
			<Accordion>
				<Accordion.Item eventKey="0">
					<Accordion.Header>
						<div class="custom-control custom-switch">
							<label class="custom-control-label" for="customSwitch1">
								{" "}
								<div
									style={{
										margin: "auto",
										display: "block",
										width: "fit-content",
									}}
								>
									<h3>abc</h3>
									<FormControlLabel
										control={
											<Switch
												checked={state.status}
												onChange={handleChange}
												color="primary"
												name="status"
											/>
										}
										label="Switch Silent Mode"
									/>
								</div>{" "}
								Notification
							</label>
						</div>
						Accordion Item #1
					</Accordion.Header>
					<Accordion.Body>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</div>
	);
}
