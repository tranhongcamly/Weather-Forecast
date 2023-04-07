import React from 'react'
import {Row, Col, Card, Space, Divider} from "antd"
import "./style.css"
function InfoWeather ({inputValue, data}){
  return (
    <Space align='center'>
      <Card style={{ width: 500, marginTop: 20}}>
        {inputValue &&
        <>
            <p className="city-name">{data.city}</p>
            <p className="country-name">{data.country}</p>
            <p className="weather-desc">{data.desc}</p>
            <img src={`${data.icon}`} className="weather-icon"/>
            <p className="temperature">{data.temperature}&#176;C</p>
            <p className="localtime">{data.localtime}</p>
            
            <Divider orientation="center"></Divider>
            <Row>
                <Col span={12}>Sunrise: {data.sunrise}</Col>
                <Col span={12}>Sunset: {data.sunset}</Col>
            </Row>
            <Row>
                <Col span={12}>Humidity: {data.humidity} %</Col>
                <Col span={12}>Wind speed: {data.wind} km/h</Col>
            </Row>
          </>
        }
      </Card>
    </Space>
  )
}

export default InfoWeather