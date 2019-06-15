import axios from 'axios';
import crypto from 'crypto';

const url = 'https://api.dev.fintechpeople.io/branding-service/api/v1/brands/';

const algorithm = 'aes-256-ctr';

const {
  REACT_APP_BRAND: BRAND = 'welp_ar',
  REACT_APP_ENV: env = 'dev'
} = process.env;

function decrypt(text) {
  const decipher = crypto.createDecipher(algorithm, BRAND);
  let dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return JSON.parse(dec);
}

function getSettings(data) {
  const handler = {
    get: function(target, name) {
      return target[name] && target[name].onboarding
        ? target[name].onboarding
        : target[name];
    }
  };
  const settingProxy = new Proxy(data, handler);
  const SETTINGS = settingProxy;

  SETTINGS.theme = {
    ...SETTINGS.theme,
    assetsPaths: SETTINGS.assets,
    palette: SETTINGS.palette
  };
  return SETTINGS;
}

export function getSettingsByName(brand) {
  return axios(`${url}${brand}/${env}`)
    .then(res => {
      return getSettings(decrypt(res.data));
    })
    .catch(e => {
      throw e;
    });
}

export function getAllThemes() {
  return axios(url)
    .then(res => {
      return res.data.map(brand => {
        return getSettings(brand[env]).theme;
      });
    })
    .catch(e => {
      throw e;
    });
}
