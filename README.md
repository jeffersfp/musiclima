# Musiclima

Find songs that match the weather!

## Online version

The online version is available at https://musiclima.herokuapp.com.

Check the docs [here](https://musiclima.herokuapp.com/docs) 📚.

The rules are:

1. Provide a city name
2. Get a songs list that match the weather of that city

### Tip:

If the city temperature is below 10C degrees then you'll get a Classical Music list 🎻<br>Otherwise, if the city temperature is between 20C degrees and 25C degrees then you'll get a Rock Music list 🤟<br>But, if the city temperature is hot AF (> 25C degrees) then you get a Pop Music list 🎤

> Try it out at the [docs](https://musiclima.herokuapp.com/docs).

## Development

For this app to work you'll need NodeJS 10.x.

1. Clone this repository
2. Install dependencies
3. Start the app

```
$ git clone https://github.com/jeffersfp/musiclima.git
$ yarn install
$ yarn run dev
```

There's a `docker-compose.yml` file that will help spinning up Swagger tools for API design. Simply install [Docker](https://docs.docker.com/install/), [Docker-Compose](https://docs.docker.com/compose/install/) and bring it up with `docker-compose up`.

```
$ curl -fsSL "https://get.docker.com" | sh
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && sudo chmod +x /usr/local/bin/docker-compose
$ cd musiclima
$ docker-compose up
```

[Swagger Editor](https://swagger.io/tools/swagger-editor/) will be available at http://localhost:9001<br>
[Swagger UI](https://swagger.io/tools/swagger-ui/) will be available at http://localhost:9002

## Deploy

1. Create a [Heroku](https://www.heroku.com/) account
2. Clone this repository
3. Create a Heroku app
4. Set app config vars
5. Push the app to Heroku
6. Enjoy

```
$ # create heroku account at https://www.heroku.com/
$ git clone https://github.com/jeffersfp/musiclima.git
$ heroku create <APP_NAME>
$ heroku config:push
$ heroku config:set OPENWEATHER_API_KEY=API_KEY
$ heroku config:set SPOTIFY_CLIENT_ID=API_KEY
$ heroku config:set SPOTIFY_CLIENT_SECRET=API_KEY
$ git push heroku master
```

> You need to replace `API_KEY` for a valid real API Key from OpenWeather and Spotify services.

## How to get API Keys

### OpenWeather

Follow this [guide](https://openweathermap.org/appid).

### Spotify

Create and register an app. Follow the official [guide](https://developer.spotify.com/documentation/general/guides/app-settings/).

## LICENSE

See LICENSE file.