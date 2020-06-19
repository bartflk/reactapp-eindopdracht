import React from "react";

//Form component, het laat zien de input van city en country met de button ernaast

const Form = props => (
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="City..."/>
            <input type="text" name="country" placeholder="Country..."/>
            <button>Get weather</button>
        </form>
    );
    
export default Form;