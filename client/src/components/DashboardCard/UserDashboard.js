import React, { useEffect, useState } from "react";
import DeleteBtn from "../DeleteBtn";
import { Col, Row, Container } from "../Grid";
import { List, ListItem } from "../List";
import DashboardCard from "../../components/DashboardCard"

function Dashboard () {

return(
    <Container fluid>
        <Row>
            <Col size="md-6">
                <DashboardCard />
            </Col>
        </Row>
    </Container>

);
}

export default Dashboard;