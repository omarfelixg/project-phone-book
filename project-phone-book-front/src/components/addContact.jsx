import React, { useState, useContext } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../styles/styles.scss";
import { create} from "../services/queryApi";

const AddContact = () => {
    const [modalFirstName, setModalFirstName] = useState("");
    const [modalLastName, setModalLastName] = useState("");
    const [modalPhoneNumber, setModalPhoneNumber] = useState("");

    const createContact = async () => {
        await create({
            firstName: modalFirstName,
            lastName: modalLastName,
            phoneNumber: modalPhoneNumber
        })
        window.location.reload(false);
    }

    function handleChangeFirstName(event) {
        setModalFirstName(event.target.value);
    }

    function handleChangeLastName(event) {
        setModalLastName(event.target.value);
    }

    function handleChangePhoneNumber(event) {
        setModalPhoneNumber(event.target.value);
    }

    //Modal
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="addSearchContact mx-auto">
            <div className="row">
                <div className="col-9">
                    <h2>Contacts</h2>
                </div>
                <div className="col-3 d-flex justify-content-end">
                    <button className="btn btn-primary px-4" onClick={openModal}> + Add Contact</button>
                </div>
            </div>


            <Modal show={modalIsOpen} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <div className="form-item mb-4">
                            <label htmlFor="exampleInputEmail1">Contact name</label>
                            <input type="text" className="form-control inputModal" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter contact name" required={true}
                                   onChange={handleChangeFirstName} value={modalFirstName}
                            >
                            </input>
                        </div>
                        <div className="form-item mb-4">
                            <label htmlFor="exampleInputEmail1">Contact last name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter contact last name" required={true}
                                   onChange={handleChangeLastName} value={modalLastName}
                            >
                            </input>
                        </div>
                        <div className="form-item mb-4">
                            <label htmlFor="exampleInputEmail1">Contact phone number</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter contact phone number" required={true}
                                   onChange={handleChangePhoneNumber} value={modalPhoneNumber}
                            >
                            </input>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={createContact}>
                        Save contact
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default AddContact;
