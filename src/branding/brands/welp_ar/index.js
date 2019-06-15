import wording from './jsons/wording.json';
import theme from './theme';
import config from './jsons/config.json';
import feedback from './jsons/feedback.json';
import assets from './jsons/assets.json';
import palette from './jsons/palette.json';

export default {
  wording: { onboarding: wording },
  feedback: { onboarding: feedback },
  theme,
  config: { onboarding: config },
  typography: theme.font.fontfamily,
  assets: { onboarding: assets },
  palette
};
