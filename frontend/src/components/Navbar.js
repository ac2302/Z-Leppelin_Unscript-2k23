import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
	const NavLinks = [
		{
			id: 1,
			name: "Home",
			link: "/",
		},
		{
			id: 2,
			name: "About",
			link: "/about",
		},
		{
			id: 3,
			name: "Sign",
			link: "/sign",
			invisible: localStorage.token,
		},
		{
			id: 4,
			name: "Table",
			link: "/table",
			invisible: !localStorage.token,
		},
		{
			id: 5,
			name: "Profile",
			link: "/profile",
			invisible: !localStorage.token,
		},
	];

	return (
		<Container>
			<Nav>
				<h3>
					<Link to="/">BondZapp</Link>
				</h3>

				<NavList>
					{NavLinks.map((item, index) => {
						if (item.invisible) return null;
						return (
							<NavItem key={index}>
								<Link to={item.link}>
									<span>{item.name}</span>
								</Link>
							</NavItem>
						);
					})}
				</NavList>
			</Nav>
		</Container>
	);
};

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background-color: transparent;
	/* background-color: rgba(255, 255, 255, 0.05); */
	background-color: rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(10px);
	/* filter: blur(10px); */
	/* border-bottom: 1px solid rgba(0,0,0,0.08); */
	z-index: 100;
	/* border: 1px solid red; */
`;

const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	max-width: 1128px;
	margin: 0 auto;
	padding: 15px 0;
	/* background-color: red; */
`;
const NavList = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const NavItem = styled.li`
	a {
		text-decoration: none;
		color: #000;
		font-size: 14px;
		font-weight: 500;
		padding: 0 10px;
		cursor: pointer;
		color: #fff;
		&:hover {
			color: #0073b1;
		}
	}
`;

export default Navbar;
