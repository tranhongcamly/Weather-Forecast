import React from 'react'
import "./style.css"
import {Row, Col, Divider, Card} from "antd"
function ForeCast ({inputValue, data}) {
  return (
    <div>
      <Card>
        <Divider orientation="center">Forecast</Divider>
        <Row>
          {inputValue && 
            <>
              {data.map((d, id) => {
                return(
                <Col span={4} key={id}>
                  <Row justify="center">{d.date}</Row>
                  <Row justify="center"><img src={`${d.day.condition.icon}`}/></Row>
                  <Row justify="center">{d.day.avghumidity}%</Row>
                </Col>
                )
              })}
            </>
          }
          
        </Row>
      </Card>
    </div>
  )
}

export default ForeCast