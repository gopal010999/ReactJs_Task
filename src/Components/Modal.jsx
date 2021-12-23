import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Dropdown from "./Dropdown"
import { data } from "../Mock/modelData";
import "./modal.css";
function Model() {
	const [show, setShow] = useState(true);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div>
			<Modal show={show} onHide={handleClose} size='xl' >
				
				<Modal.Body closeButton>
        <Modal.Title className='md-title modal-title h1' style={{"margin":"15px 0 15px 0" }} >{data.title}</Modal.Title>
					<div style={{ margin: "10px 0 10px 0" }}>{data.body1}</div>
					<div style={{ margin: "10px 0 10px 0" }}>{data.body2}</div>
					<div style={{ margin: "10px 0 10px 0" }}>{data.body3}</div>
					<div className="md-footer" >
						<div className='md-footer-btn' >
							<Button variant="success" onClick={handleClose} style={{"marginLeft":"60px"}} >
								Accept All
							</Button>
							<Button variant="light" onClick={handleClose} style={{"marginLeft":"60px"}} >
								Save Settings
							</Button>
						</div>
						<span style={{"width":"15%"}} >
							<Accordion >
									<Accordion.Header>Customize</Accordion.Header>
							
							</Accordion>
						</span>
					</div>
				</Modal.Body>
        <Dropdown/>
      
			</Modal>
		</div>
	);
}

export default Model;
