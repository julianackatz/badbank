import React from "react";
import { NavLink, } from "react-router-dom";
import "bootstrap/js/src/collapse.js";


 function NavBar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal"
     
      
    };
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
           <div className="nav-logo">
            <NavLink
              style={navLinkStyles}
              title="Welcome to the the Bad Bank"
              className="nav-link"
              to="/"
            >
              Bad Bank
            </NavLink>
            </div>

            <div className="nav-links">
            <NavLink
              title="Create an account with us"
              style={navLinkStyles}
              className="nav-link"
              to="/CreateAccount"
            >
              Create Account
            </NavLink>
            <NavLink
              title="Login to your account"
              style={navLinkStyles}
              className="nav-link"
              to="/login"
            >
              Login
            </NavLink>
          
            <NavLink
              title="Deposit money into your account"
              style={navLinkStyles}
              className="nav-link"
              to="/deposit"
            >
              Deposit
            </NavLink>
            <NavLink
              title="Withdraw money from your account"
              style={navLinkStyles}
              className="nav-link"
              to="/withdraw"
            >
              Withdraw
            </NavLink>
            
            <NavLink
              title="You'll find a list of all registered users here"
              style={navLinkStyles}
              className="nav-link"
              to="/alldata"
            >
              All Data
            </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar




// const PopoverStyle = {
//     backgroundColor: "#E3FCFF",
//     borderRadius: ".5rem",
// };

// // const NavBar = () => {
// //     const [title, setTitle] = useState("Home");

// //     const { user } = useSelector((state) => state.auth);

// //     useEffect(() => {
// //         document.title = title;
// //     }, [title, user]);

//     return (
//         <NavBar
//             collapseOnSelect
//             id="navbar"
//             expand="md"
//             className="sticky-top navbar"
//             style={{ backgroundColor: "#cae9ed" }}
//         >
//             <Container>
//                 <NavBar.Brand>
//                     <h2>
//                         BetterBank
//                         <sub style={{ fontSize: ".75rem" }}> byBrent</sub>
//                     </h2>
//                 </NavBar.Brand>
//                 <NavBar.Toggle
//                     className="navbar-toggler fw-bolder text-black"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarTogglerDemo02"
//                     aria-controls="navbarTogglerDemo02"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 />
//                 <NavBar.Collapse id="collapse navbar-collapse">
//                     <Nav className="me-auto navbar-collapse justify-content-end">
//                         <OverlayTrigger
//                             placement="bottom"
//                             trigger={["hover", "focus"]}
//                             overlay={
//                                 <Popover
//                                     id="popover-basic"
//                                     style={PopoverStyle}
//                                 >
//                                     <Popover.Body>
//                                         Navigate to Bad Bank home page.
//                                     </Popover.Body>
//                                 </Popover>
//                             }
//                         >
//                             <Nav.link
//                                 onClick={() => {
//                                     setTitle("Home");
//                                 }}
//                                 href="/"
//                             >
//                                 Home
//                             </Nav.link>
//                         </OverlayTrigger>
//                         <OverlayTrigger
//                             placement="bottom"
//                             trigger={["hover", "focus"]}
//                             overlay={
//                                 <Popover
//                                     id="popover-basic"
//                                     style={PopoverStyle}
//                                 >
//                                     <Popover.Body>
//                                         Create a new account.
//                                     </Popover.Body>
//                                 </Popover>
//                             }
//                         >
//                             <Nav.Link
//                                 onClick={() => {
//                                     setTitle("Create Account");
//                                 }}
//                                 href="/account"
//                             >
//                                 Create Account
//                             </Nav.Link>
//                         </OverlayTrigger>
//                         {user ? (
//                             <>
//                                 <OverlayTrigger
//                                     placement="bottom"
//                                     trigger={["hover", "focus"]}
//                                     overlay={
//                                         <Popover
//                                             id="popover-basic"
//                                             style={PopoverStyle}
//                                         >
//                                             <Popover.Body>
//                                                 Deposit money into an account.
//                                             </Popover.Body>
//                                         </Popover>
//                                     }
//                                 >
//                                     <Nav.Link
//                                         onClick={() => {
//                                             setTitle("Deposit");
//                                         }}
//                                         href="/deposit"
//                                     >
//                                         Deposit
//                                     </Nav.Link>
//                                 </OverlayTrigger>

//                                 <OverlayTrigger
//                                     placement="bottom"
//                                     trigger={["hover", "focus"]}
//                                     overlay={
//                                         <Popover
//                                             id="popover-basic"
//                                             style={PopoverStyle}
//                                         >
//                                             <Popover.Body>
//                                                 Withdraw money from an account.
//                                             </Popover.Body>
//                                         </Popover>
//                                     }
//                                 >
//                                     <Nav.Link
//                                         onClick={() => {
//                                             setTitle("Withdraw");
//                                         }}
//                                         href="/withdraw"
//                                     >
//                                         Withdraw
//                                     </Nav.Link>
//                                 </OverlayTrigger>

//                                 <OverlayTrigger
//                                     placement="bottom"
//                                     trigger={["hover", "focus"]}
//                                     overlay={
//                                         <Popover
//                                             id="popover-basic"
//                                             style={PopoverStyle}
//                                         >
//                                             <Popover.Body>
//                                                 Check your balance.
//                                             </Popover.Body>
//                                         </Popover>
//                                     }
//                                 >
//                                     <Nav.Link
//                                         onClick={() => {
//                                             setTitle("Balance");
//                                         }}
//                                         href="/balance"
//                                     >
//                                         Balance
//                                     </Nav.Link>
//                                 </OverlayTrigger>

//                                 <OverlayTrigger
//                                     placement="bottom"
//                                     trigger={["hover", "focus"]}
//                                     overlay={
//                                         <Popover
//                                             id="popover-basic"
//                                             style={PopoverStyle}
//                                         >
//                                             <Popover.Body>
//                                                 All user data saved to local
//                                                 storage.
//                                             </Popover.Body>
//                                         </Popover>
//                                     }
//                                 >
//                                     <Nav.Link
//                                         onClick={() => {
//                                             setTitle("All Data");
//                                         }}
//                                         href="/userdata"
//                                     >
//                                         User Data
//                                     </Nav.Link>
//                                 </OverlayTrigger>
//                             </>
//                         ) : (
//                             <></>
//                         )}
//                         {user ? (
//                             <OverlayTrigger
//                                 placement="bottom"
//                                 trigger={["hover", "focus"]}
//                                 overlay={
//                                     <Popover
//                                         id="popover-basic"
//                                         style={PopoverStyle}
//                                     >
//                                         <Popover.Body>Log out.</Popover.Body>
//                                     </Popover>
//                                 }
//                             >
//                                 <Nav.Link
//                                     onClick={() => {
//                                         setTitle("Log In");
//                                     }}
//                                     href="/login"
//                                 >
//                                     Log Out
//                                 </Nav.Link>
//                             </OverlayTrigger>
//                         ) : (
//                             <OverlayTrigger
//                                 placement="bottom"
//                                 trigger={["hover", "focus"]}
//                                 overlay={
//                                     <Popover
//                                         id="popover-basic"
//                                         style={PopoverStyle}
//                                     >
//                                         <Popover.Body>
//                                             Log in to an existing account.
//                                         </Popover.Body>
//                                     </Popover>
//                                 }
//                             >
//                                 <Nav.Link
//                                     onClick={() => {
//                                         setTitle("Log In");
//                                     }}
//                                     href="/login"
//                                 >
//                                     Log In
//                                 </Nav.Link>
//                             </OverlayTrigger>
//                         )}
//                     </Nav>
//                 </NavBar.Collapse>
//             </Container>
//         </NavBar>
//     );
// };

// export default NavBar


