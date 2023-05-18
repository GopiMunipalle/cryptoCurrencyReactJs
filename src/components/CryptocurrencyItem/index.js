// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails

  return (
    <li className="table-items">
      <div className="img-title">
        <img src={currencyLogo} alt={currencyName} className="list-images" />
        <p>{currencyName}</p>
      </div>
      <div className="usd-euro-container">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
