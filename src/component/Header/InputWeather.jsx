import React from 'react'
import {Form, Input, Button} from "antd"
import "./style.css"

function InputWeather({getWeather, handleChange}) {
  
  return (
    <div className='inputform'>
      <Form onFinish={getWeather}>
        <Input.Group compact>
          <Input placeholder='Nhập thành phố ...' style={{ width: 'calc(100%/2 - 200px)' } } name="city"
          // value={city} onChange={(e) => setCity(e.target.value)} 
          onChange={handleChange}
          />
          <Button>Submit</Button>
        </Input.Group>
      </Form>
    </div>
  )
}

export default InputWeather