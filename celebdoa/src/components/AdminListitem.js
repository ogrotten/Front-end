import React from "react";
import axios from "axios";
import { Card, Image, Col, Row, Badge } from "react-bootstrap";

function clg(...x) { console.log(...x) }

const AdminListItem = props => {
	const { id, celebname, image_url, factoid, birthyear, alive } = props.item;

	return (
		<Card style={{ padding: ".5em", maxWidth: '40rem', textAlign: 'left', margin: "auto" }}>
			<Card.Body style={{ margin: "0", padding: "0" }}>
				<Row>
					<Col style={{ maxWidth: '120px' }}>
						<ShowImage image={image_url} />
					</Col>
					<Col>
						<Card.Title variant="secondary">{celebname}</Card.Title>
						<p>
							{birthyear} -- {isAlive(alive)}<br />
							{factoid}
						</p>
					</Col>
					{/* <Col style={{ maxWidth: '60px' }}>
						<Badge onClick={delCeleb(id)} variant="danger">Del</Badge>
					</Col> */}
				</Row>
			</Card.Body>
		</Card>
	);
};

// const delCeleb = (id) => {
// 	(id < 5)
// 	? clg("Won't delete first 4")
// 	: (
// 		axios
// 		.delete(`https://ogr-ft-celebdoa.herokuapp.com/api/celeb/${id}`)
// 		.then(response => {
// 			clg(42, response.data)
// 		})
// 		.catch(err => console.error(`>>> PROBLEM -- delete > axios :: ${err}`))
// 	)
// }

const isAlive = arethey => {
	return arethey
		? "Alive"
		: "Dead"
}

const ShowImage = props => {
	// clg(props.image)
	return (
		<Image
			style={{
				width: "100px",
				height: "100px",
				objectFit: "cover",
				objectPosition: "0 80%"
			}}
			src={props.image}
		/>
	)
}

export default AdminListItem;