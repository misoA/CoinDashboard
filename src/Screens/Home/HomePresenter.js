import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Loader from "../../Components/Loader";

const Container = styled.ul`
  font-size: 14px;
`;

const Price = styled.li`
  line-height: 18px;
`;

const HomePresenter = ({ prices, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {prices.map(price => (
        <Price key={price.id}>
          {price.name}/{price.symbol}: ${price.price}
        </Price>
      ))}
    </Container>
  );

HomePresenter.PropTypes = {
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
