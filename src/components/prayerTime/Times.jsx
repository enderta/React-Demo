import { getActiveElement } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./times.css";
const Times = () => {
  const [fajr, setFajr] = React.useState("");
  const [sunrise, setSunrise] = React.useState("");
  const [dhuhr, setDhuhr] = React.useState("");
  const [asr, setAsr] = React.useState("");
  const [maghrib, setMaghrib] = React.useState("");
  const [isha, setIsha] = React.useState("");
  const [country, setCountry] = React.useState("United Kingdom");
  const [city, setCity] = React.useState("Solihull");
  const [date, setDate] = React.useState("");
  useEffect(() => {
    getTimes();
  }, []);
  const getTimes = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    let data;
    fetch(
      `http://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=13`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        data = result.data;
        setFajr(data[0].timings.Fajr);
        setSunrise(data[0].timings.Sunrise);
        setDhuhr(data[0].timings.Dhuhr);
        setAsr(data[0].timings.Asr);
        setMaghrib(data[0].timings.Maghrib);
        setIsha(data[0].timings.Isha);
        setDate(data[0].date.readable);
      });
  };

  return (
    <div className="container">
      <Card style={{ width: "18rem" }} className="item1">
        <Card.Body>
          <Card.Title>Prayer Times</Card.Title>
          <Card.Text>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <input
              type="text"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Button variant="primary" onClick={getTimes}>
              Get Times
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="item2">
        <Card.Body>
          <Card.Title>Fajr: {fajr}</Card.Title>
          <Card.Title>Sunrise: {sunrise}</Card.Title>
          <Card.Title>Dhuhr: {dhuhr}</Card.Title>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="item3">
        <Card.Body>
          <Card.Title>Asr: {asr}</Card.Title>
          <Card.Title>Maghrib: {maghrib}</Card.Title>
          <Card.Title>Isha: {isha}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Times;
