import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import market from './market.png'

const Navigation = ({ web3Handler, account }) => {
    return (
        <Navbar expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="http://www.dappuniversity.com/bootcamp">
                <img src="https://cdn-icons-png.flaticon.com/512/2422/2422258.png" width="40" height="40" alt="" />
                    &nbsp; NFT room
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Nav className="">
                        <Nav.Link as={Link} to="/">Store</Nav.Link>
                        <Nav.Link as={Link} to="/my-listed-items">My Items</Nav.Link>
                        <Nav.Link as={Link} to="/my-purchases">Purchases</Nav.Link>
                        <Nav.Link as={Link} to="/create">Craft NFT</Nav.Link>
                    </Nav>
                    <Nav>
                        {account ? (
                            <Nav.Link
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="">
                                <Button variant="">
                                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                                </Button>

                            </Nav.Link>
                        ) : (
                            <Button onClick={web3Handler} variant="">Connect Wallet</Button>
                        )}
                    </Nav>

            </Container>
        </Navbar>
    )

}

export default Navigation;