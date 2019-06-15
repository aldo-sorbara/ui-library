import pkg from './package.json';
import doczPluginNetlify from 'docz-plugin-netlify';

export default {
  title: 'Wenance - Common UI',
  description: pkg.description,
  public: './public',
  version: pkg.version,
  indexHtml: './index.html',
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://codemirror.net/theme/dracula.css'
        }
      ]
    }
  },
  themeConfig: {
    logo: {
      src:
        'https://www.expoefi.com/assets/img/empresas/participantes/2018/Wenance.jpg',
      width: 230
    },
    showPlaygroundEditor: true,
    codemirrorTheme: 'dracula',
    styles: {
      playground: {
        fontSize: 16
      },
      body: {
        fontSize: 16,
        lineHeight: 1.6
      },
      pre: {
        fontFamily: 'monospace, "Source Code Pro"',
        fontSize: 14,
        lineHeight: 1.8
      }
    }
  },
  src: './src/docs/',
  codeSandbox: false,
  plugins: [doczPluginNetlify()]
};
