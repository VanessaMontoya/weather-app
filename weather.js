$(document).ready(
    function() {
        $("#place").on("submit", function() {
            // Lookup `preventDefault`; it stops the browser's default action,
            // which is to make a synchronous submission of the form.
            // http://api.jquery.com/category/events/event-object
            event.preventDefault();

            // As a shortcut, when jQuery calls your event handler, it sets
            // `this == event.currentTarget`.
            var formData = $(event.currentTarget).serializeArray();
            var city = formData[0].value;
            var country = formData[1].value;

            function printWeather(weather) {
                console.log(weather.main.temp)
                var ktotemp = 1.8 * ((parseInt(weather.main.temp)) - 273) + 32

                console.log(weather)

                $('.weather-info').empty();
                $('.weather-info').append('<p><h2>' + city.toUpperCase() + '</h2></p>')
                $('.weather-info').append('<p>Current Conditions: ' + weather.weather[0].description + '</p>');
                $('.weather-info').append('<p>Temperature: ' + Math.floor(parseInt(ktotemp)) + '°</p>');
                $('.weather-info').append('<p>Cloud Coverage: ' + weather.clouds.all + '%</p>');
                $('.weather-info').append('<p>Wind Speed: ' + weather.wind.speed + 'mph</p>');
                $('.weather-info').append('<p>Humidity: ' + weather.main.humidity + '%</p>');
            }

            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country +
                    '&appid=19ef759cf57d6e34d0f417336fe92af9',
                success: printWeather
            });

            // function printWeather(weather) {
            //     var weatherInfo = {
            //         'city name': weather.name,
            //         'temperature': weather.main.temp,
            //         'clouds': weather.clouds,
            //         'wind speed': weather.wind.speed,
            //         'humidity': weather.main.humidity,
            //         'sunrise': weather.sys.sunset,
            //         'sunset': weather.sys.sunrise
            //     }
            //     console.log(weatherInfo)
            // }
        });
    }
)
