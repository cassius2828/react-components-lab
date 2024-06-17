import WeatherData from "./WeatherData";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

const WeatherForecast = ({ day, conditions, time, img, imgAlt }) => {
  return (
    <div className="weather">
      <h2>{day}</h2>
      <WeatherIcon img={img} imgAlt={imgAlt} />
      <WeatherData conditions={conditions} time={time} />
    </div>
  );
};
export default WeatherForecast;
