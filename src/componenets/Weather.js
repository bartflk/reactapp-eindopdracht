import React from "react";

// Component om de weer info te laten zien
const Weather = props => {
    return (
            <div className="weatherinfo">
                {
                props.city && props.country && 
                <p className="weatherkey">Location: 
                  <span> {props.city }, {props.country } </span> 
                </p> 
                }
                { 
                props.temperature && 
                <p className="weatherkey">Temperature: 
                 <span>  {props.temperature } </span> 
                </p>
                }
                { 
                props.humidity && 
                <p className="weatherkey">Humidity:  
                 <span>  {props.humidity }  </span> 
                </p> 
                }
                { 
                props.description && 
                <p className="weatherkey">Conditions: 
                 <span>  {props.description }   </span> 
                </p>
                }
                { 
                props.error && 
                <p className="weatherkey">
                    {props.error}
                </p> 
                }
            </div>
    );
}

export default Weather;