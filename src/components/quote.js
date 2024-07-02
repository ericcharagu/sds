import React, { useEffect, useState, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
import coverPhoto from "../img/dw.png";
import axios from "axios";
import { NumericFormat } from "react-number-format";
import logo from "../img/sdark.png";
import "./quote.css";
import { BuildingQuote } from "./quoteData";
import { CloseButton, Image } from "react-bootstrap";

function QuoteGen() {
  const [buildings, setBuildings] = useState([]);
  const [showOutput, setShowOutput] = useState(false);
  const [cost, setCost] = useState(0);
  const [fee, setFee] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [region, setRegion] = useState([]);
  const residentOptions = [""];
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {});

  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    const filterData = (buildingDetails, userSelection) => {
      const filteredDataDummy = buildings.filter(
        (item) => item.type === buildingDetails && item.region === userSelection
      );

      setFilteredData(filteredDataDummy);
    };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBuildings(BuildingQuote);

    const getPrice = (buildingName) => {
      const filterPriceData = filteredData.filter(
        (item) => item.name === buildingName
      );
      filterPriceData.map((buildingPrice) => {
        setCost(buildingPrice.price);
      });
    };

    getPrice(inputs.building);

    let costPerSqm = parseFloat(cost);
    let actualSize = parseFloat(inputs.size);
    const options = { maximumFractionDigits: 2 };
    /*  setCost(Intl.NumberFormat("en-US", options).format(actualSize * 41600)); */
    setFee(
      Intl.NumberFormat("en-US", options).format(actualSize * costPerSqm * 0.01)
    );
  };

  return (
    <div className="container-fluid" id="quoteDiv">
      <h1>Get in touch</h1>
      <p style={{ color: "black" }}>
        This tool calculates the retainer fee for Strata Design Studios based on
        the Governmenet of Kenya's defined rates. In accordance with the GOK
      </p>
      <div className="output-group">
        <label>
          Retainer fee:
          <h5 disabled>Ksh. {fee}</h5>
        </label>
      </div>
      <form onSubmit={handleSubmit} id="quoteForm">
        <div className="input-group">
          <label>
            Region:
            <select
              name="region"
              key={inputs.region}
              value={inputs.region || ""}
              onChange={handleChange}
            >
              <option selected="selected">Select a region</option>
              <option value="nairobi">Nairobi</option>
              <option value="coast">Coast</option>
              <option value="western">Western</option>
            </select>
          </label>{" "}
        </div>
        <div className="input-group">
          <label>
            Building Type:{" "}
            <select
              name="bType"
              onChange={handleChange}
              value={inputs.bType || ""}
            >
              <option selected="selected">Choose the building type</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="business">Business Park</option>
              <option value="industrial">Industrial Projects</option>
            </select>
          </label>
        </div>
        <div className="input-group">
          <label>
            Size (sqm):
            <NumericFormat
              name="size"
              onChange={handleChange}
              value={inputs.size || ""}
              allowLeadingZeros
              thousandSeparator=","
            />
          </label>{" "}
        </div>
        <div className="input-group">
          <label>
            Building:{" "}
            <select
              name="building"
              value={inputs.building || ""}
              onChange={handleChange}
            >
              <option selected="selected">Choose the building purpose</option>
              {BuildingQuote.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>{" "}
        </div>

        <button id="feeBtn" className="btn btn-info" onClick={handleSubmit}>
          Get Fee
        </button>
      </form>
    </div>
  );
}

export default QuoteGen;
