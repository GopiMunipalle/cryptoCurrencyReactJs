// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrencyData: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrenciesApiUrl()
  }

  getCryptocurrenciesApiUrl = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatadeData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    this.setState({cryptocurrencyData: updatadeData, isLoading: false})
  }

  render() {
    const {cryptocurrencyData, isLoading} = this.state

    return (
      <div className="list-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="logo"
        />
        <ul className="ul-container">
          <li className="table-heading">
            <div>
              <p>Coin Type</p>
            </div>
            <div className="types">
              <p>USD</p>
              <p>URO</p>
            </div>
          </li>

          {isLoading ? (
            <div data-testid="loader">
              {' '}
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            cryptocurrencyData.map(eachItem => (
              <CryptocurrencyItem key={eachItem.id} cryptoDetails={eachItem} />
            ))
          )}
        </ul>
      </div>
    )
  }
}
export default CryptocurrenciesList
