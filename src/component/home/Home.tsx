import React from "react";
import {Col, Row} from "antd";
import '../../App.css';
import {Link} from "react-router-dom";

type Prop = {}

export const Home: React.FC<Prop> = () => {
    return (
        <Row>
            <Col span={24} className="center-screen">
                <b>
                    <code>
                        <Link to={"/donate"} style={{
                            color: "inherit",
                            textDecoration: "none",
                            cursor: "default"
                        }}>
                            Hello
                        </Link> <b style={{color: "rgb(252, 227, 0)"}}>World</b>
                    </code>
                </b>
            </Col>
        </Row>
    );
}