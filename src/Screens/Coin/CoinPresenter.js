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

const Rank = styled.b`
  font-weight: 600;
`;

const CoinPresenter = ({ coins, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {coins.map(coin => (
        <Price key={coin.id}>
          <Rank>#{coin.rank}</Rank> {coin.name}/{coin.symbol}
        </Price>
      ))}
    </Container>
  );

CoinPresenter.PropTypes = {
  coins: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
      rank: PropTypes.number.isRequired
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default CoinPresenter;
