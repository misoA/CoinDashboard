import React from "react";
import CoinPresenter from "./CoinPresenter";
import { coinApi } from "../../api";

export default class extends React.Component {
  state = {
    coins: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const { data } = await coinApi.coins();
      let coins = [];
      data.forEach(item => {
        const { id, name, symbol, rank } = item;
        coins.push({ id, name, symbol, rank });
      });
      this.setState({ coins });
    } catch (error) {
      this.setState({
        error: "Can't find coins infomation."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { coins, error, loading } = this.state;
    return <CoinPresenter coins={coins} loading={loading} error={error} />;
  }
}
