<h1 align="center">
  <br>
   <span>
    <img width="150" height="150" src="https://avatars0.githubusercontent.com/u/24895775?s=200&v=4">
  </span>
  <span>
    <img width="150" height="150" src="https://storage.googleapis.com/bit-docs/bit-logo%402x.png">
  </span>
  &nbsp;   &nbsp;   &nbsp;   &nbsp;
  <br>
  Common UI
  <br>
</h1>
<h4 align="center">React common components that are implemented by Wenance's front end applications.</h4>
 <p align="center">
  <a href="http://nodejs.org/download/">
    <img src="https://img.shields.io/badge/node_version->=_8.0.0-brightgreen.svg"
         alt="node version">
  </a>
   <a href="https://github.com/teambit/bit/releases">
    <img src="https://img.shields.io/badge/bit_version-14.0.0-FF69A4.svg"
         alt="bit version">
  </a>
    <a href="https://github-tools.github.io/github-release-notes/">
    <img src="https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg"
         alt="Automated Release Notes by gren">
  </a>
  <a href="https://app.netlify.com/sites/wenance-commonui/deploys">
    <img src="https://api.netlify.com/api/v1/badges/1e3d3708-f82a-4fcf-bff1-68b4702474d6/deploy-status"
         alt="Netlify deployment status">
    <a/>
</p>
<p align="center">
  <a href="https://asciinema.org/a/SHskAQtehXJ7ZW8f99C6Zl7fs?t=0:9" target="_blank"><img src="https://asciinema.org/a/SHskAQtehXJ7ZW8f99C6Zl7fs.svg" width=600 /></a>
</p>
<p align="center">
  <a href="#available-components">Available components</a> •
  <a href="#installation">Installation</a> •
  <a href="#basic-usage">Basic usage</a> •
  <a href="#importing-and-exporting-components">Importing and Exporting components</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#changelog">Changelog</a> •
  <a href="#support">Support</a>
</p>

### Available components

- Web
  - AppBar
  - Button
  - Card
  - Checkbox
  - Emoji
  - FacebookButton
  - FormBlock
  - Global
  - GlobalStyle
  - Grids
  - Hero
  - Input
  - List
  - Loading
  - Modal
  - Notification
  - RadioButton
  - Select
  - Snackbar
  - SpotlightInput
  - Stepper
  - TextTransform
  - Question

### Installation

To clone and run this application, you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

```bash
# Clone the repository
$ git clone git@github.com:wenance/react-common-ui.git

# Go into the repository
$ cd react-common-ui

# Install dependencies
$ npm install
```

### Basic usage

# Running locally

- Create a `.env` file in the root folder and set `REACT_APP_ENV` and variables:

```
#ENVIRONMENTS 'dev'||'stage'||'prod'
#BRANDS 'welp_ar'||'mango_ar'|| 'posta_ar'
REACT_APP_ENV='dev'
REACT_APP_BRAND='welp_ar'
```

- Set BIT_NODE_TOKEN var in your bash.
  The token is [here](https://app.netlify.com/sites/wenance-commonui/settings/deploys#build-environment-variables).

```
export BIT_NODE_TOKEN=12341234-123412...
```

# Bit

Common UI uses [Bit](https://bitsrc.io/) to share components, so you have to install the package before using it:

```bash
# Install Bit globally
$ npm install bit-bin -g

# Login to your Bit account
$ bit login
```

#### Importing and Exporting components

It is really important to import the components from Bit before editing them:

```bash
$ bit import wenance.common-ui/{platform}/{component} --ignore-package-json --ignore-dist --override

# For example: bit import wenance.common-ui/web/global --ignore-package-json --ignore-dist --override
```

And exporting them when finished editing:

```bash
$ bit export wenance.common-ui {plarform}/{component}

# For example: bit export wenance.common-ui web/global
```

For more information about Bit commands, visit the [Docs](https://docs.bitsrc.io/).

### Test

Check out our current [coverage report](https://wenance-commonui.netlify.com/jest/index.html).

### Documentation

Check out our [documentation website](https://wenance-commonui.netlify.com).

### Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/wenance/react-common-ui/releases).

### Support

For any suggestion or help email us to **frontendteam@wenance.com**
