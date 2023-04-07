
import InputWeather from './component/Header/InputWeather';
import ForeCast from './component/Footer/Forecast';
import InfoWeather from './component/Body/InfoWeather';
import { Layout } from 'antd';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState()
  const [forecast, setForecast] = useState([])
  const [data, setData] = useState({
    city: "",
    country: "",
    icon: "",
    desc: "",
    temperature: "",
    localtime: "",
    sunrise: "",
    sunset: "",
    humidity: "",
    wind: ""
  })
  const { Header, Content, Footer} = Layout;

  const handleChange = (e) => {
    setInputValue(e.target.value);
    //setInputValue(value.search)
  }


  const getWeather = async () => {
    const api_call = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ad49eb4c9a9d43929f131032230802&q=${inputValue}&days=7&aqi=no&alerts=no&lang=vi`);
    const response = await api_call.json();
    console.log(response)
    setForecast(response.forecast.forecastday)
    if(inputValue)
    {
      setData({
        ...data,
        city: response.location.name,
        country: response.location.country,
        desc: response.current.condition.text,
        icon: response.current.condition.icon,
        temperature: response.current.temp_c,
        localtime: response.location.localtime,
        sunrise: response.forecast.forecastday[0].astro.sunrise,
        sunset: response.forecast.forecastday[0].astro.sunset,
        humidity: response.current.humidity,
        wind: response.current.wind_kph
      })
    }
  }

  return (
    <div className="App">
      <Layout>
        <Header>
          <InputWeather 
          getWeather = {getWeather}
          handleChange={handleChange}
          />
        </Header>
        <Layout className='container'>
          <Content>
            <InfoWeather 
            inputValue={inputValue}
            data={data}
            />
          </Content>
        </Layout>
        <Footer>
          <ForeCast 
            inputValue={inputValue}
            data = {forecast}
          />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
