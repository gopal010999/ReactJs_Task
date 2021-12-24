import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Dropdown from "./Dropdown";
import { data } from "../Mock/modelData";
import CloseButton from "react-bootstrap/CloseButton";
import "./modal.css";
function Model() {
	const [show, setShow] = useState(true);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div>
			<Modal show={show} onHide={handleClose} size="xl">
				<Modal.Body>
					<div className="md-close">
						<CloseButton onClick={handleClose} />
					</div>
					<Modal.Title
						className="md-title modal-title h1"
						style={{
							margin: "20px 53px 20px 53px",
							fontSize: "40px",
							fontWeight: "bold",
						}}
					>
						{data.title}
					</Modal.Title>
					<div
						style={{ margin: "20px 53px 20px 53px", color: "rgb(87, 86, 86)" }}
					>
						{data.body1}
					</div>
					<div
						style={{ margin: "20px 53px 20px 53px", color: "rgb(87, 86, 86)" }}
					>
						{data.body2}
					</div>
					<div
						style={{ margin: "20px 53px 20px 53px", color: "rgb(87, 86, 86)" }}
					>
						{data.body3}
						<strong>
							<a href="www.google" style={{ color: "black" }}>
								Privacy Policy
							</a>
						</strong>
					</div>
					<div className="md-footer">
						<div className="md-footer-btn">
							<Button
								variant="success"
								onClick={handleClose}
								style={{ marginLeft: "60px" }}
								onClick={handleClose}
							>
								Accept All
							</Button>
							<Button
								variant="light"
								onClick={handleClose}
								style={{ marginLeft: "60px" }}
								onClick={handleClose}
							>
								Save Settings
							</Button>
						</div>
						<span style={{ width: "15%" }}>
							<Accordion>
								<Accordion.Header>Customize</Accordion.Header>
							</Accordion>
						</span>
					</div>
					<Dropdown />
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default Model;
