import { useCallback, useState } from "react";

const Prices = ({ bpi }) => {
  const [currency, setCurrency] = useState("GBP");
  const onDropDownChange = useCallback(({ target: { value } }) => {
    setCurrency(value);
  }, []);
  return (
    <div>
      {currency}

      <ul className={"list-group"}>
        <li className={"list-group-item"}>
          Bitcoin rate for : {bpi[currency].description} :
          <span className={"badge badge-primary"}>{bpi[currency].code}</span>
          <strong>{bpi[currency].rate}</strong>
        </li>
        <select onChange={onDropDownChange} className={"form-control"}>
          <option value={"USD"}>USD</option>
          <option value={"EUR"}>EUR</option>
          <option selected value={"GBP"}>
            GBP
          </option>
        </select>
      </ul>
    </div>
  );
};

export default Prices;
