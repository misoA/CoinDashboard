import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Loader from "../../Components/Loader";

const Container = styled.div`
  font-size: 14px;
`;

const Exchange = styled.div`
  margin: 20px 0;
  line-height: 20px;
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: 600;
`;
const Description = styled.p``;

const Link = styled.a`
  text-decoration: underline;
`;

const ExchangePresenter = ({ exchanges, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {exchanges.map(e => (
        <Exchange key={e.id}>
          <Title>{e.name}</Title>
          <Description>
            {e.description && e.description.length > 100
              ? `${e.description.substring(0, 100)}...`
              : e.description}
          </Description>
          {e.website && (
            <Link href={e.website} target="_blank">
              {e.website}
            </Link>
          )}
        </Exchange>
      ))}
    </Container>
  );

ExchangePresenter.PropTypes = {
  exchanges: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      website: PropTypes.string
    }).isRequired
  ),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default ExchangePresenter;
