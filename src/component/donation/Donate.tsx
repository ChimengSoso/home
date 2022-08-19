import {Col, Row, Button} from "antd"
import '../../App.css';
import React from "react";

type Prop = {}

export const Donate: React.FC<Prop> = () => {
    return <Row>
        <Col className="center-screen" style={{minHeight: "100vh"}}>
            <Button type="primary" style={{fontSize: 20}}>
                Donate click here!
            </Button>
        </Col>
    </Row>
}