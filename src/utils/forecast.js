const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=455de6f3206a66572777e39159437f30&query=${latitude}, ${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (!body?.location) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body)
            callback(undefined, body.location.name + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.weather_descriptions[0] + '. Visibility is ' + body.current.visibility)
        }
    })
}

module.exports = forecast