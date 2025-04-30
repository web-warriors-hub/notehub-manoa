/* eslint-disable react/jsx-indent, @typescript-eslint/indent */

'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import Image from 'next/image';
import Link from 'next/link';

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;
  const pathName = usePathname();
  return (
    <Navbar className="navbaritems">
      <Container>
      <Navbar.Brand>
        <Link href="/">
          <Image
          src="/notehub_logo.png"
          alt="NoteHub Logo"
          className="logobar-img"
          width={250}
          height={50}
        />
        </Link>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start navbaritems">
          <Nav.Link
            id="all-notes-nav"
            className="navbaritems"
            href="/viewnotes"
            key="viewnotes"
            active={pathName === '/viewnotes'}
          >
            View Notes
          </Nav.Link>
            {currentUser
              ? [
                  <Nav.Link
                    id="add-stuff-nav"
                    className="navbaritems"
                    href="/add"
                    key="add"
                    active={pathName === '/add'}
                  >
                    Upload Notes
                  </Nav.Link>,
                  <Nav.Link
                    id="note-stuff-nav"
                    className="navbaritems"
                    href="/yourNote"
                    key="yourNote"
                    active={pathName === '/yourNote'}
                  >
                  Your Note
                  </Nav.Link>,
                ]
              : ''}
            {currentUser && role === 'ADMIN' ? (
              <Nav.Link
                id="admin-stuff-nav"
                className="navbaritems"
                href="/admin"
                key="admin"
                active={pathName === '/admin'}
              >
                Admin
              </Nav.Link>
            ) : (
              ''
            )}
          </Nav>
          <Nav>
            {session ? (
              <NavDropdown id="login-dropdown" className="navbaritems" title={currentUser}>
                <NavDropdown.Item id="login-dropdown-sign-out" href="/api/auth/signout">
                  <BoxArrowRight />
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-change-password" href="/auth/change-password">
                  <Lock />
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" href="/auth/signin">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" href="/auth/signup">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
