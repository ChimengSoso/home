import React from "react";
import {Col, Row} from "antd";
import '../../App.css';

type Prop = {}

export const Home: React.FC<Prop> = () => {
    return (
        <Row>
            <Col span={24} style={{
                backgroundColor: "#22221a",
                minHeight: "100vh",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "calc(10px + 2vmin)",
                display: "flex",
                color: "rgb(228, 228, 228)"
            }}>
                <b>
                    <code>
                        Hello <b style={{color: "rgb(252, 227, 0)"}}>World</b>
                    </code>
                </b>
            </Col>
        </Row>
    );
}