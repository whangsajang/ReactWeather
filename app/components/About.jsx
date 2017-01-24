var React = require('react');

/*var About = React.createClass({
    render: function(){
        return(
            <h3>About Component</h3>
        )
    }
})*/

var About = (props) => {
    return(
        <div>
            <h1 className="text-center">About </h1>
            <p>This is an app that gets the weather for any city that is chosen.</p>
            <ul>
                <ol>
                    <a href="https://facebook.github.io/react/">React</a>-This was the Javascript framework used.
                </ol>
                <ol>
                    <a href="https://http://openweathermap.org/">OpenWeatherMap</a>- This was the api used to get the information for the cities.
                </ol>
            </ul>
        </div>
        )
    
};

module.exports = About;