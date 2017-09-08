import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';


export default class CategoryCard extends Component {
  render () {
    const { imgPath, title,cardClick, cardId , clicked} = this.props;
    
    return (
      <Card raised={clicked} onClick={() => cardClick(cardId)}>
        <CardMedia
          onClick={() => cardClick(cardId)}
          aspectRatio="square"
          image={imgPath}
        />
        <CardTitle
          title={title}
          subtitle=""
        />
      </Card>
    );
  }
}

CategoryCard.propTypes = {
  cardClick: PropTypes.func,
  imgPath: PropTypes.string,
  title: PropTypes.string,
  cardId: PropTypes.number
};