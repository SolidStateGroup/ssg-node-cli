#! /usr/bin/env node

var fs = require('fs');
var path = require('path');
var execSync = require('child_process').execSync;

var options = require('minimist')(process.argv.slice(2));
var commands = options._;
var spinner = require("char-spinner");
var PROJECT_NAME = commands[0];



if (options.f) {
    console.log('Forcing installation');
    execSync(`rm -rf ./${PROJECT_NAME}`, { stdio: 'inherit' });
}


execSync(`git clone https://github.com/kyle-ssg/node-minimal ./${PROJECT_NAME}`, { stdio: 'inherit' });


console.log('Installing dependencies, this should take around 10-20 seconds...')
var interval = spinner(options);
try {
    execSync(`open -a /Applications/WebStorm.app ./${PROJECT_NAME}`, { stdio: 'inherit' });
} catch (e) {
    console.log("Add ws to your alias", e);
}

execSync(`cd ./${PROJECT_NAME} && rm -rf .git && git init`, { stdio: 'inherit' });
execSync(`cd ./${PROJECT_NAME} && npm i`, { stdio: 'inherit' });
execSync(`cd ./${PROJECT_NAME} && npm run dev`, { stdio: 'inherit' });


console.log('All done, enjoy your day.');
clearInterval(interval);

