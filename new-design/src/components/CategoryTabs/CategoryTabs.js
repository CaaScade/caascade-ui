import React, { Component } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab } from "react-toolbox";
import { Row, Col, Container } from "react-grid-system";
import CategoryCard from "../CategoryCard";
import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from "react-toolbox/lib/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import ProgramLauncher from "../ProgramLauncher";
import { Button, IconButton } from "react-toolbox/lib/button";
import Dialog from "react-toolbox/lib/dialog";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Switch from "react-toolbox/lib/switch";
const tabs = [
  { name: "Load Balancers" },
  { name: "Cache" },
  { name: "Message Queues" },
  { name: "Databases" },
  { name: "Others" }
];
const loadBalancers = [
  {
    title: "Trafeic",
    subtitle: "",
    imgPath: "/static/images/traefik.png",
    appId: 1
  },
  {
    title: "HaProxy",
    subtitle: "",
    imgPath: "/static/images/haproxy.png",
    appId: 2
  },
  {
    title: "Nginx",
    subtitle: "",
    imgPath: "/static/images/nginx.png",
    appId: 3
  }
];

const caches = [
  {
    title: "Redis",
    subtitle: "",
    imgPath: "/static/images/redis.png",
    appId: 1
  },
  {
    title: "Memcached",
    subtitle: "",
    imgPath: "/static/images/memcached.png",
    appId: 2
  },
  {
    title: "BoltDB",
    subtitle: "",
    imgPath: "/static/images/boltb.png",
    appId: 3
  },
  {
    title: "Aerospike",
    subtitle: "",
    imgPath: "/static/images/aerospike.png",
    appId: 4
  }
];

const msgQueues = [
  {
    title: "RabbitMQ",
    subtitle: "",
    imgPath: "/static/images/RabbitMQ.png",
    appId: 1
  },
  {
    title: "Apache Active MQ",
    subtitle: "",
    imgPath: "/static/images/activemq.png",
    appId: 2
  },
  {
    title: "Zero MQ",
    subtitle: "",
    imgPath: "/static/images/zeromq1.png",
    appId: 3
  },
  {
    title: "Apache Kafka",
    subtitle: "",
    imgPath: "/static/images/kafka.png",
    appId: 4
  }
];

const databases = [
  {
    title: "PostgreSQL",
    subtitle: "",
    imgPath: "/static/images/postgres.png",
    appId: 1
  },
  {
    title: "Cassandra",
    subtitle: "",
    imgPath: "/static/images/Cassandra_logo.png",
    appId: 2
  },
  {
    title: "Couch DB",
    subtitle: "",
    imgPath: "/static/images/CouchDB.png",
    appId: 3
  },
  {
    title: "HBase",
    subtitle: "",
    imgPath: "/static/images/big_h_logo.svg",
    appId: 4
  },
  {
    title: "MongoDB",
    subtitle: "",
    imgPath: "/static/images/mongodb.png",
    appId: 5
  }
];

const LOAD_BALANCERS = 0;
const CACHE = 1;
const MSG_QUEUES = 2;
const DATABASES = 3;
appId: 1;

const OTHERS = 4;
export default class CategoryTabs extends Component {
  state = {
    tabIndex: 0,
    currentId:0,
    launch:false
  };
  handleClick = cardId => {
    this.setState({ currentId: cardId });
  };
  handleTabChange = index => {
    this.setState({ currentId: 0,tabIndex: index });
  };
 launchProgram=()=>{
   if (typeof window !== 'undefined') {
           window.location.href = "/launch";
      }
 }
  render() {
    const { tabIndex, currentId,launch } = this.state;
    const renderTabs = tabs.map((tab, i) => {
      return (
        <Tab label={tab.name} key={i}>
          <div>
            {tabIndex === 0 &&
              loadBalancers.map((lb, i) => {
                return (
                  <Col sm={12} md={4} key={i}>
                    <CategoryCard
                      cardClick={this.handleClick}
                      cardId={lb.appId}
                      imgPath={lb.imgPath}
                      title={lb.title}
                      clicked={currentId === lb.appId ? true : false}
                    />
                  </Col>
                );launchProgram
              })}

            {tabIndex === 1 &&
              caches.map((lb, i) => {
                return (
                  <Col sm={12} md={4} key={i}>
                    <CategoryCard
                      cardClick={this.handleClick}
                      cardId={lb.appId}
                      imgPath={lb.imgPath}
                      title={lb.title}
                      clicked={currentId === lb.appId ? true : false}
                    />
                  </Col>
                );
              })}

            {tabIndex === 2 &&
              msgQueues.map((lb, i) => {
                return (
                  <Col sm={12} md={4} key={i}>
                    <CategoryCard
                      cardClick={this.handleClick}
                      cardId={lb.appId}
                      imgPath={lb.imgPath}
                      title={lb.title}
                      clicked={currentId === lb.appId ? true : false}
                    />
                  </Col>  
                );
              })}

            {tabIndex === 3 &&
              databases.map((lb, i) => {
                return (
                  <Col sm={12} md={4} key={i}>
                    <CategoryCard
                      cardClick={this.handleClick}
                      cardId={lb.appId}
                      imgPath={lb.imgPath}
                      title={lb.title}
                      title={lb.title}
                      clicked={currentId === lb.appId ? true : false}
                    />
                  </Col>
                );
              })}

            {tabIndex === 4 && <div>No Apps yet</div>}
          </div>
          <div style={{ padding: "10px" }}>
            <Button
              label="Launch"
              onClick={() => this.launchProgram()}
              raised
              primary
              style={{
                float: "right",
                display: currentId > 0 ? "inline-block" : "none"
              }}
            />
          </div>
        </Tab>
      );
    });
    return (
      <div>
      <Tabs
          index={tabIndex}
          onChange={this.handleTabChange}
          inverse
          style={{ display: launch === true ? "flex" : "none" }}
        >
          {renderTabs}
        </Tabs>
      </div>
    );
  }
}
