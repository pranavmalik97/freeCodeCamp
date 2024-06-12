const path = require('path');
const envData = require('./config/env.json');
const {
  buildChallenges,
  replaceChallengeNode,
  localeChallengesRootDir
} = require('./utils/build-challenges');

const { clientLocale, curriculumLocale, homeLocation } = envData;

const curriculumIntroRoot = path.resolve(__dirname, './src/pages');
const pathPrefix = clientLocale === 'english' ? '' : '/' + clientLocale;

