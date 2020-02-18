import React, { Component } from "react";
import './css/Navbar.css'
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer } from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Navbar extends Component {
state = {
  collapseID: ""
};

toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
  return (
     <div class="navbar">
         {/* <Router> */}
            <MDBContainer>
                <MDBNavbar color="indigo" light expand="md" style={{ marginTop: "20px" }}>
                <MDBNavbarBrand>
                    <strong className="white-text">MDBNavbar</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                    <MDBNavbarNav left>
                    <MDBNavItem active>
                        <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/feature">Features</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#!">Pricing</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                            <div className="d-none d-md-inline">MDBDropdown</div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu right>
                            <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                        </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                    {/* <MDBNavItem>
                        <MDBFormInline waves>
                        <div className="md-form my-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        </div>
                        </MDBFormInline>
                    </MDBNavItem> */}
                    </MDBNavbarNav>
                </MDBCollapse>
                </MDBNavbar>
            </MDBContainer>
        {/* </Router> */}
     </div>
    
    );
  }
}

export default Navbar;