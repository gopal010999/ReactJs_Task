import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import "./Dropdown.css";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
export default function Dropdown() {
	const [state, setState] = useState({ status: false });

	const handleChange = (event) => {
		event.stopPropagation();
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	const [books, setBooks] = useState([]);
	console.log("aaaaaa", state);
	// const componentMounted = useRef(true); // (3) component is mounted

	const swit = (status) => {
		return (
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
						<FormControlLabel
							control={
								<Switch
									checked={status}
									className="MuiSwitch-colorPrimary Mui-checked"
									style={status ? { color: "green" } : { color: "white" }}
									onChange={(e) => handleChange(e)}
									onClick={(e) => e.stopPropagation()}
									color="primary"
									name="status"
								/>
							}
							label=""
						/>
					</div>
				</label>
			</div>
		);
	};
	useEffect(() => {
		const url =
			"https://619b61042782760017445573.mockapi.io/api/v1/getBanner/1";

		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				setBooks(json.accordian);
			} catch (error) {
				console.log("error", error);
			}
		};

		fetchData();
	}, []);
	console.log("dataaaaaaaa", books);

	return (
		<div style={{ padding: "25px" }}>
			{books.map((item, i) => (
				<Accordion style={{ padding: "10px" }}>
					<Accordion.Item eventKey="0" className="acor-item">
						<Accordion.Header>
							{swit(item.IsMandatory)}
							<h4>{item.CategoyHeading}</h4>
						</Accordion.Header>
						<Accordion.Body>
							<div>{item.CategoyText}</div>
							<div style={{ padding: "10px", margin: "10px 0 10px 0" }}>
								<div className="plug-header">
									<Container>
										<Row>
											<Col>
												<strong>Plugins</strong>
											</Col>
											<Col>
												<strong>Block/Enable</strong>
											</Col>
											<Col>
												<strong>{""}</strong>
											</Col>
										</Row>
									</Container>
								</div>
								<div style={{ marginTop: "10px" }}>
									{item.PluginList.map((itm) => (
										<div className="plug-body">
											<Container>
												<Row>
													<Col>
														<span>{itm.ComplianceType}</span>
													</Col>
													<Col>
														<span>{swit(itm.BlockingEnabled)}</span>
													</Col>
													<Col>
														<span>
															<a
																href={`${itm.optOutExternalLink}`}
																target="_blank"
																rel="noopener noreferrer"
																style={{ color: "black" }}
															>
																GO to Site
															</a>
														</span>
													</Col>
												</Row>
											</Container>
										</div>
									))}
								</div>
							</div>
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			))}
		</div>
	);
}
