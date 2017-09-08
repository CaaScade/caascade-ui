import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import CategoryCard from '../CategoryCard';

const loadBalancers = [
  {
    title: 'Trafeic',
    subtitle: '',
    imgPath: '/static/images/traefic.png'
  },
  {
    title: 'HaProxy',
    subtitle: '',
    imgPath: '/static/images/haproxy.png'
  },
  {
    title: 'Nginx',
    subtitle: '',
    imgPath: '/static/images/nginx.png'
  }
];

export  class HomeTabCard extends Component {
  renderBlock = (tabName) => {
    switch (tabName) {
      case 'loadBalancers' :
        const lb = loadBalancers.map((lb, i) => {
          return (
            <Col sm={12} md={4} key={i}>
              <CategoryCard
                imgPath={lb.imgPath}
                title={lb.title}
              />
            </Col>
          );
        });
        return lb;
    }
  }

  render () {
    const { tabName } = this.props;

    return (
      <div>
        <Row>
          {this.renderBlock(tabName)}
        </Row>
      </div>
    );
  }
}
