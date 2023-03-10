import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import config from "../config";

const Sells = [
	{
		id: 1,
		name: "Market",
	},
	{
		id: 2,
		name: "Limit",
	},
];

const userData = {
	Quantity: "",
	Price: "",
};
const ViewTrade = ({ setModal, modal, bond, balance }) => {
	const [btns, setBtn] = useState("");
	const [formData, setForm] = useState(userData);
	const [Block, setBlock] = useState(false);
	const [sell, setSells] = useState(false);

	const [owned, setOwned] = useState(0);

	useEffect(() => {
		if (bond && bond._id)
			axios
				.get(`${config.backendLocation}/bond/my-count/${bond._id}`, {
					headers: { token: localStorage.token },
				})
				.then((res) => {
					setOwned(res.data.count);
				});
	}, [bond]);

	const handlerBtns = (id) => {
		setBtn(id);
	};

	const handlerInput = (e) => {
		const { name, value } = e.target;

		console.log(e);
		console.log(name, value);
		if (!isNaN(value)) {
			// check if value is a number
			setForm((prev) => {
				return {
					...prev,
					[name]: value,
				};
			});
		}
	};

	const handlerClose = () => {
		setSells(false);
		setBlock(false);
		setModal("close");
	};

	return (
		<>
			{modal === "open" && (
				<Container>
					<Box>
						<Bell>
							<p style={{ color: "#000" }}>₹ {balance}</p>
							<button onClick={handlerClose}>
								<CloseIcon />
							</button>
						</Bell>
						<Navigate>
							<p style={{ color: "#000" }}>{owned}</p>
							<Btns1
								onClick={() => {
									setSells(!sell);
									console.log(formData);
									axios.post(
										`${config.backendLocation}/order/`,
										{
											quantity: formData.Quantity,
											price: formData.Price,
											bond: bond._id,
											type: "buy",
											isFixed: formData.Price != "",
										},
										{
											headers: {
												token: localStorage.token,
											},
										}
									);
								}}
							>
								Buy
							</Btns1>
							<Btns1
								onClick={() => {
									setSells(!sell);
									console.log(formData);
									axios.post(
										`${config.backendLocation}/order/`,
										{
											quantity: formData.Quantity,
											price: formData.Price,
											bond: bond._id,
											type: "sell",
											isFixed: formData.Price != "",
										},
										{
											headers: {
												token: localStorage.token,
											},
										}
									);
								}}
							>
								Sell
							</Btns1>
						</Navigate>
						{sell && (
							<>
								<Inputs>
									<label htmlFor="name">Quantity</label>
									<input
										type="text"
										placeholder="Enter Quantity..."
										id="Quantity"
										name="Quantity"
										value={formData.Quantity}
										onChange={handlerInput}
										autoComplete="off"
									/>
								</Inputs>

								<Inputs>
									<label htmlFor="name">Price</label>
									<input
										disabled={Block}
										type="text"
										placeholder={
											Block ? "NA" : "Enter Price..."
										}
										id="Price"
										name="Price"
										value={formData.Price}
										onChange={handlerInput}
										autoComplete="off"
									/>
								</Inputs>

								<Navigate>
									<Btns onClick={() => setBlock(!Block)}>
										Market
									</Btns>
									<Btns onClick={() => setBlock(!Block)}>
										Limit
									</Btns>
								</Navigate>
							</>
						)}
					</Box>
				</Container>
			)}
		</>
	);
};

const Bell = styled.div`
	color: #000;
	display: flex;
	justify-content: flex-end;
	margin-bottom: 10px;
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		outline: none;
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.1);
		padding: 3px;
		border-radius: 50%;
		svg {
			font-size: 30px;
			color: rgba(0, 0, 0, 0.5);
		}
	}
`;

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
`;

const Inputs = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	margin: 10px 0;
	margin-top: 15px;
	input {
		padding: 10px;
		outline: none;
		border: 1px solid #cccccc;
		background-color: #fff;
		border: 1px solid rgba(0, 0, 0, 0.4);
		border-radius: 5px;
		color: #000;
		&::placeholder {
			color: #000;
		}
	}
	label {
		position: absolute;
		background-color: #fff;
		color: grey;
		top: -10px;
		left: 10px;
		font-size: 12px;
		padding: 3px 5px;
	}
`;

const Break = styled.div`
	padding: 10px;
`;

const Box = styled.div`
	background-color: #fff;
	/* background-color: #151525; */
	width: 100%;
	max-width: 400px;
	padding: 20px;
	/* border-radius: 10px; */
	text-align: center;
	transition: all 0.5s ease-in-out;
	h1 {
		color: #1a1a1a;
		text-align: center;
		font-size: 20px;
	}
	h3 {
		color: #666666;
		font-weight: 400;
		font-size: 18px;
	}
`;

const Navigate = styled.div`
	display: flex;
	align-items: center;
	/* background-color: red; */
	gap: 10px;
`;

const Btns = styled.button`
	padding: 10px;
	flex-grow: 1;
	background-color: #fff;
	background-color: #000;
	color: grey;
	border: none;
	outline: none;
	cursor: pointer;
	font-size: 16px;
	font-weight: 500;
	border: 2px solid #0db3d4;
	border-radius: 5px;
	color: #fff;
`;

const Btns1 = styled(Btns)`
	background-color: #b90e50;
	border: none;
	color: #fff;
	/* transition: all 0.3s ease-in-out; */

	&:nth-child(2) {
		background: rgb(25, 118, 210);
	}
`;

export default ViewTrade;
