# Car.ly
Vehicle shopping application

## Introduction 

Car.ly is a (auto)mobile application that provides aggreagated data of vehicle listings based on the information received from the user. Providing the user with a variety of results from various website, consumers can easily navigate the automobile market and compare and contrast local search results in an interactive and intuitive way. Car.ly delivers a seamless user shopping experience for drivers on the go. 

<hr>
## Table of Contents

  - [Example](#example)
  - [Installation](#installation)
  - [Technologies](#technologies)
  - [Architecture](#architecture)
  - [API Endpoints](#api)
  - [Contributing](#contributing)
  - [Meet the Engineers](#meet-the-engineers)
  - [Questions and Issues](#questions-and-issues)

==========
## Example
![alt tag](http://i67.tinypic.com/2hewtn9.gif)

===============

## Installation

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

```bash
$ npm install -g react-native-cli
$ npm install
```

Also, you can use [generator-rnb](https://github.com/jhen0409/generator-rnb) to create project with this boilerplate.

## Development

#### Start local server

```bash
$ npm start
```

#### iOS

Run command to open iOS simulator and run app:

```bash
$ npm run ios
```

Or open `ios/RNBoilerplate.xcodeproj` file with XCode:

```bash
$ npm run ios-open
```

#### Android (5.0+)

Open Android emulator (recommented [Genymotion](https://www.genymotion.com)) and run command: (Or connect real device via USB)

```bash
$ adb reverse tcp:8081 tcp:8081  # react-native local server
$ adb reverse tcp:5678 tcp:5678  # remotedev local server
$ npm run android
```

__*[Emulator only]*__ If you're still use Android 4.0, it will cannot use `adb reverse`, you should use `10.0.2.2` (Genymotion: `10.0.3.2`) instead of `localhost` in [configureStore.js](src/configureStore.js#L15).

## Technologies

## Architecture
### High Level Architecture
![Architecture](http://i65.tinypic.com/20123p2.jpg)
### Database Schema
Database in MySQL

![](http://i63.tinypic.com/jhrl20.jpg)


We used [react-native-mock](https://github.com/lelandrichardson/react-native-mock), and test with [Mocha](https://github.com/mochajs/mocha), [Enzyme](https://github.com/airbnb/enzyme).

```bash
$ npm test
```
