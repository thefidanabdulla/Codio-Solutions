import React from "react";

import exchangeIcon from "./../../Assets/exchangeIcon.svg";
import exchangeIcon2 from "./../../Assets/exchangeIcon2.svg";

const Currency = () => {
  return (
    <div className="app__currency">
      <div className="app__currency-header">
        <select>
          <option value="USD">USD</option>
          <option value="AZN">AZN</option>
        </select>
        <button>
          <img src={exchangeIcon} alt="exchange icon" />
        </button>
        <select>
          <option value="AZN">AZN</option>
          <option value="USD">USD</option>
        </select>
      </div>
      <div className="app__currency_amount">
        <h1>Amount</h1>
        <form>
          <input type="text" placeholder="Enter the amount" />
          <button>
            <img src={exchangeIcon2} alt="exchange icon" />
          </button>
          <div>168.24 Lari</div>
        </form>
      </div>
      <div className="app__currency-body">
        <div className="app__currency-body-item">
          <div className="app__currency-body-item-left">
            <div className="app__currency-body-item-symbol">$</div>
            <div className="app__currency-body-item-currencyName">Dollar</div>
          </div>
          <div className="app__currency-body-item-value">58.82</div>
        </div>
        <div className="app__currency-body-item">
          <div className="app__currency-body-item-left">
            <div className="app__currency-body-item-symbol">$</div>
            <div className="app__currency-body-item-currencyName">Dollar</div>
          </div>
          <div className="app__currency-body-item-value">58.82</div>
        </div>
        <div className="app__currency-body-item">
          <div className="app__currency-body-item-left">
            <div className="app__currency-body-item-symbol">$</div>
            <div className="app__currency-body-item-currencyName">Dollar</div>
          </div>
          <div className="app__currency-body-item-value">58.82</div>
        </div>
        <div className="app__currency-body-item">
          <div className="app__currency-body-item-left">
            <div className="app__currency-body-item-symbol">$</div>
            <div className="app__currency-body-item-currencyName">Dollar</div>
          </div>
          <div className="app__currency-body-item-value">58.82</div>
        </div>
      </div>
    </div>
  );
};

export default Currency;
