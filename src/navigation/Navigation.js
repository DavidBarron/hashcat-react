import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './Navigation.css'

class Navigation extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return  (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand>Hashcat-React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                <Form.Control type="text" placeholder="Username" className="mr-sm-2" />
                <Form.Control type="text" placeholder="Password" className="mr-sm-2" />
                <Button variant="outline-success">Log In</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation
