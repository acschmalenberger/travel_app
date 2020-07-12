import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import DeleteBtn from "../../components/DeleteBtn";
import DashboardCard from "../../components/DashboardCard"

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
