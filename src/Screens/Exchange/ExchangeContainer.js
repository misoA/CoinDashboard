import React from "react";
import ExchangePresenter from "./ExchangePresenter";
import { coinApi } from "../../api";

export default class extends React.Component {
  state = {
    exchanges: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const { data } = await coinApi.exchanges();
      let exchanges = [];
      data.forEach(item => {
        const { id, name, description, website_status } = item;
        let website = null;
        if (website_status) {
          website = item.links.website[0];
        }
        exchanges.push({ id, name, description, website });
      });
      this.setState({ exchanges });
    } catch (error) {
      this.setState({
        error: "Can't find exchanges infomation."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { exchanges, error, loading } = this.state;
    return (
      <ExchangePresenter
        exchanges={exchanges}
        loading={loading}
        error={error}
      />
    );
  }
}
