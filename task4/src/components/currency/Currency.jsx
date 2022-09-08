import React, { useState } from "react";
import { useEffect } from "react";

import exchangeIcon from "./../../Assets/exchangeIcon.svg";
import exchangeIcon2 from "./../../Assets/exchangeIcon2.svg";

const Currency = () => {
  const [fromCurrencies, setFromCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrencies, setToCurrencies] = useState([]);
  const [toCurrency, setToCurrency] = useState("AZN");
  const myHeaders = new Headers();
  myHeaders.append("apikey", "IlrzpboH0GQJpbis4goCcvfJRPXefbWf");

  // const fromCurrencyFunc = (base = "USD") => {
  let requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };
  fetch(
    `https://api.apilayer.com/exchangerates_data/latest?base=USD`,
    requestOptions
  )
    .then((response) => response.json())
    .then(
      (result) => setFromCurrencies([result.base, ...Object.keys(result.rates)])
      // console.log(result)
    )
    .catch((error) => console.log("error", error));
  // };
  // fromCurrencyFunc('USD')
  console.log(fromCurrencies);
  return (
    <div className="app__currency">
      <div className="app__currency-header">
        <select>
          {/* {fromCurrencies("USD")?.rates.map((rate) => (
            <option value={'rate[0]'}>{rate}</option>
          ))} */}
          <option value={""}>USD</option>
          <option value={""}>AZN</option>
          <option value={""}>USD</option>
          <option value={""}>AZN</option>
          <option value={""}>USD</option>
        </select>
        <button>
          <img src={exchangeIcon} alt="exchange icon" />
        </button>
        <select>
          {/* {fromCurrencies("AZN")?.rates.map((rate) => (
            <option value={''}>{rate}</option>
          ))} */}
          <option value={""}>USD</option>
          <option value={""}>AZN</option>
          <option value={""}>USD</option>
          <option value={""}>AZN</option>
          <option value={""}>USD</option>
          <option value={""}>AZN</option>
          <option value={""}>USD</option>
        </select>
      </div>
      <div className="app__currency_amount">
        <h1>Amount</h1>
        <form>
          <input type="text" placeholder="Enter the amount" />
          <button>
            <img src={exchangeIcon2} alt="exchange icon" />
          </button>
        </form>
        <div>168.24 Lari</div>
      </div>
      <div className="app__currency-body">
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
