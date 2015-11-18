import RouterRoute from '../client/router/route';
import express from 'express';
import path from 'path';
import cachifyStatic from 'connect-cachify-static';
import { isDevelopment } from './config';
import routes from './routes';
import './my_i18n';

const server = express();
const rootDirname = path.resolve(__dirname, '..');

server.use(cachifyStatic(`${rootDirname}/public`));

if (isDevelopment()) {
  const stylus = require('stylus');
  const nib = require('nib');
  const jeet = require('jeet');
  const rupture = require('rupture');

  server.use(stylus.middleware({
    src: `${rootDirname}/client`,
    dest: `${rootDirname}/public/assets`,
    compile: (str, filePath) => {
      return stylus(str)
        .set('filename', filePath)
        .set('paths', [`${rootDirname}/node_modules`])
        .use(jeet())
        .use(rupture())
        .use(nib());
    },
  }));
}

server.use(express.static(`${rootDirname}/public`));

routes.forEach((route) => server.get(route, RouterRoute));

export default server;