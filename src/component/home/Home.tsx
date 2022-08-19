import React from "react";
import {Col, Row} from "antd";
import '../../App.css';

type Prop = {}

export const Home: React.FC<Prop> = () => {
    return (
        <Row>
            <Col span={24} className="center-screen">
                <b>
                    <code>
                        Hello <b style={{color: "rgb(252, 227, 0)"}}>World</b>
                    </code>
                </b>
            </Col>
        </Row>
    );
}