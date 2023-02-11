import React, { useRef, useLayoutEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import styled from "styled-components";
import { Gradient } from "../lib/gradient";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import FileBase64 from "react-file-base64";
import config from "../config";
import axios from "axios";

const userData = {
	name: "",
	paNumber: "",
	panImg: "",
};

const Overlay = () => {
	useLayoutEffect(() => {
		const gradient = new Gradient();
		gradient.initGradient("#gradient-canvas");
	}, []);

	const [formData, setForm] = useState(userData);
	const navigate = useNavigate();

	const [panImg, setpanImg] = useState();

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
		console.log(formData);
		// console.log(panImg);

		const username = window.location.href.split("?username=")[1];
		const { name, paNumber, panImg } = formData;
		const pan = paNumber;

		try {
			if ((username, name, pan, panImg)) {
				// axios for verify
				axios
					.post(`${config.backendLocation}/auth/verify`, {
						username,
						name,
						pan,
						panImg,
					})
					.then((res) => {
						window.location = "/";
					})
					.catch((err) => {
						console.error(err);
						alert("invalid kyc details");
					});
			}
		} catch {}
		// setForm(userData)
		// setpanImg(null)
	};

	const handlerImg = (e) => {
		setpanImg(e.target.files[0]);
	};

	return (
		<Main>
			<canvas id="gradient-canvas" data-transition-in />
			<Container>
				<Left>
					<BgImg>
						<img src="/assets/stocks.png" alt="stock" />
					</BgImg>
				</Left>
				<Right>
					<h2>PAN CARD DETAILS</h2>
					<Form>
						<form>
							<div>
								<label htmlFor="name">Full Name</label>
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
								<label htmlFor="paNumber">Pan Number</label>
								<input
									type="text"
									name="paNumber"
									id="paNumber"
									placeholder="Enter password..."
									value={formData.paNumber}
									onChange={handlerForm}
									autoComplete="off"
								/>
							</div>

							<div>
								<label htmlFor="panImg">Upload Pan Card</label>
								<FileBase64
									type="file"
									multiple={false}
									onDone={({ base64 }) =>
										setForm({
											...formData,
											panImg: base64,
										})
									}
								/>
							</div>
							{panImg && (
								<BackG>
									<img
										src={URL.createObjectURL(panImg)}
										alt="panimg"
									/>
								</BackG>
							)}

							<button type="submit" onClick={handlerSubmit}>
								SUBMIT
							</button>
						</form>
					</Form>
				</Right>
			</Container>
		</Main>
	);
};

const Verify = () => {
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
	background-color: rgba(255, 255, 255, 0.05);
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
	flex-direction: row-reverse;
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

const BackG = styled.div`
	width: 200px;
	height: 150px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: inline-block;
	}
`;

export default Verify;
