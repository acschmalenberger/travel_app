import React from "react";
import { Col, Row, Container } from "../Grid";
import DeleteBtn from "../DeleteBtn";

function Dashboard () {

return (

    <Container fluid>
        <Row>
            <Col size="md-6">
                <DashboardCard />
                <DeleteBtn />
            </Col>
        </Row>
    </Container>

    );
}
export default Dashboard;
