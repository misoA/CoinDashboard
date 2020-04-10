import React from "react";
import HomePresenter from "./HomePresenter";
import { coinApi } from "../../api";

export default class extends React.Component {
  state = {
    prices: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const { data } = await coinApi.tickers();
      let prices = [];
      data.forEach(item => {
        const {
          id,
          name,
          symbol,
          quotes: {
            USD: { price }
          }
        } = item;
        prices.push({ id, name, symbol, price });
      });
      this.setState({ prices });
    } catch (error) {
      this.setState({
        error: "Can't find prices infomation."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { prices, error, loading } = this.state;
    return <HomePresenter prices={prices} loading={loading} error={error} />;
  }
}
