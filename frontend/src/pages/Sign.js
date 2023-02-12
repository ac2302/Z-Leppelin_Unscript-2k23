import React, { useRef, useLayoutEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import styled from "styled-components";
import { Gradient } from "../lib/gradient";
import { useNavigate } from "react-router-dom";
import config from "../config";
import "../styles.css";
import axios from "axios";

const userData = {
	name: "",
	email: "",
	address: "",
	password: "",
	Confirmpassword: "",
};

const signin = {
	emailID: "",
	passwordID: "",
};

function Overlay() {
	useLayoutEffect(() => {
		const gradient = new Gradient();
		gradient.initGradient("#gradient-canvas");
	}, []);

	const [formData, setForm] = useState(userData);
	const [signinData, setSignin] = useState(signin);
	const navigate = useNavigate();

	const [panImg, setpanImg] = useState();
	const [sign, setSign] = useState(false);

	const handlerForm = (e) => {
		const { name, value } = e.target;
		setForm((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const handlerSubmit = async (e) => {
		e.preventDefault();
		console.log("sign up");
		console.log(formData);
		const { name, email, address, password, Confirmpassword } = formData;
		if (
			formData.Confirmpassword === formData.password &&
			formData.password !== ""
		) {
			console.log("password matched");
			if (name && email && address && password && Confirmpassword) {
        // axios sign up
        axios.post(`${config.backendLocation}/auth/register`, {email, password, phone:address, username:name}).then((res) => {
          window.location = "/verify?username="+name;
          setForm(userData);
        });

			}
		} else {
			alert("password not matched");
		}
	};

	const handlerImg = (e) => {
		setpanImg(e.target.files[0]);
	};

	const handleSignin = (e) => {
		const { name, value } = e.target;
		setSignin((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const SignIN = (e) => {
		e.preventDefault();
		console.log(signinData);
		console.log("sign in");
		const email = signinData.emailID;
		const password = signinData.passwordID;
		console.log({ email, password });
		if (email && password) {
			// axios sign in
			axios
				.post(`${config.backendLocation}/auth/login`, {
					email,
					password,
				})
				.then((res) => {
					console.log(res.data);
					if (res.data.token) {
						localStorage.setItem("token", res.data.token);
						window.location = "/";
					} else {
						alert("Invalid Credentials");
					}
				});
		}
	};

	return (
		<Main>
			<Container>
				<Left>
					<BgImg>
						<img src="/assets/stocks.png" alt="stock" />
					</BgImg>
				</Left>
				<Right>
					<h2>Sign UP</h2>
					<Form>
						<form>
							{!sign ? (
								<>
									<div>
										<label htmlFor="name">Enter name</label>
										<input
											type="text"
											name="name"
											id="name"
											placeholder="Enter name..."
											value={formData.name}
											onChange={handlerForm}
											autoComplete="off"
											required
										/>
									</div>

									<div>
										<label htmlFor="email">
											Enter Email
										</label>
										<input
											type="text"
											name="email"
											id="email"
											placeholder="Enter email..."
											value={formData.email}
											onChange={handlerForm}
											autoComplete="off"
										/>
									</div>

									<div>
										<label htmlFor="address">
											Enter number
										</label>
										<input
											type="text"
											name="address"
											id="address"
											placeholder="address..."
											value={formData.address}
											onChange={handlerForm}
											autoComplete="off"
										/>
									</div>

									<div>
										<label htmlFor="password">
											Enter Password
										</label>
										<input
											type="password"
											name="password"
											id="password"
											placeholder="Enter password..."
											value={formData.password}
											onChange={handlerForm}
											autoComplete="off"
										/>
									</div>
									<div>
										<label htmlFor="Confirmpassword">
											Enter Password
										</label>
										<input
											type="password"
											name="Confirmpassword"
											id="Confirmpassword"
											placeholder="Enter password..."
											value={formData.Confirmpassword}
											onChange={handlerForm}
											autoComplete="off"
										/>
									</div>
									<button
										type="submit"
										onClick={handlerSubmit}
									>
										SIGN UP
									</button>
								</>
							) : (
								<>
									<div>
										<label htmlFor="emailID">
											Enter Email
										</label>
										<input
											type="text"
											name="emailID"
											id="emailID"
											placeholder="Enter email..."
											value={signinData.emailID}
											onChange={handleSignin}
										/>
									</div>

									<div>
										<label htmlFor="passwordID">
											Enter Password
										</label>
										<input
											type="password"
											name="passwordID"
											id="passwordID"
											placeholder="Enter password..."
											value={signinData.passwordID}
											onChange={handleSignin}
										/>
									</div>
									<button type="submit" onClick={SignIN}>
										SUBMIT
									</button>
								</>
							)}
						</form>
						<p>
							{sign ? (
								<p>
									Don't have account
									<Btn onClick={() => setSign(!sign)}>
										{" "}
										Sign UP{" "}
									</Btn>{" "}
								</p>
							) : (
								<p>
									Already have account{" "}
									<Btn onClick={() => setSign(!sign)}>
										{" "}
										Sign In{" "}
									</Btn>{" "}
								</p>
							)}
						</p>
					</Form>
				</Right>
			</Container>
		</Main>
	);
}

const Sign = () => {
	return <Overlay />;
};

const Main = styled.main`
	position: relative;
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
	@media only screen and (max-width: 1200px) {
		flex-direction: column;
	}
`;

const Container = styled.div`
	/* background-color: red; */
	background-color: rgba(255, 255, 255, 0.05);
	/* border: 1px solid #fff; */
	border-radius: 10px;
	overflow: hidden;
	position: relative;
	backdrop-filter: blur(10px);
	display: flex;
	width: 100%;
	max-width: 1128px;
	height: 600px;
	margin: 0 auto;
	margin-top: 80px;
`;

const Left = styled.div`
	position: relative;
	width: 50%;
	height: 100%;
	padding: 20px;

	h1 {
		text-align: center;
		font-size: 40px;
	}
`;

const Right = styled.div`
	position: relative;
	width: 50%;
	height: 100%;
	padding: 20px;

	h2 {
		text-align: center;
	}
`;

const Form = styled.div`
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	margin-top: 20px;
	p {
		text-align: center;
		margin: 10px 0;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-top: 10px;
		button {
			padding: 15px 0;
			color: #fff;
			border: none;
			outline: none;
			border-radius: 5px;
			background: rgb(25, 118, 210);
			box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
			transition: all 0.3s ease-in;
			background: rgb(25, 118, 210);

			&:hover {
				background-color: #045eb8;
			}
		}
	}
	div {
		/* padding: 5px 0; */
		margin-bottom: 2px;
		position: relative;
	}

	input {
		padding: 12px;
		outline: none;
		border: none;
		border: 1px solid rgba(0, 0, 0, 0.2);
		border-radius: 3px;
		width: 100%;
		background: transparent;
		border: 1px solid #fff;
		border-radius: 5px;
		color: #fff;

		&::placeholder {
			color: #fff;
			background-color: transparent;
		}
	}
	label {
		color: rgba(0, 0, 0, 0.5);
		color: #fffbf5;
		font-size: 13px;
		margin-bottom: 3px;
	}
`;

const BgImg = styled.div`
	width: 450px;
	height: 450px;
	margin: 0 auto;
	margin-top: 20px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: inline-block;
	}
`;

const Btn = styled.button`
	background-color: #fff;
	border: none;
	outline: none;
	padding: 0 3px;
	text-decoration: underline;
	background-color: transparent;
	color: #fff;
	font-size: 15px;
`;

export default Sign;
