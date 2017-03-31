#! /usr/bin/env node

var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;
var execSync = require('child_process').execSync;

var options = require('minimist')(process.argv.slice(2));
var commands = options._;
var spinner = require("char-spinner")
var PROJECT_NAME = commands[0];



if (options.f) {
    console.log('Forcing installation');
    execSync(`rm -rf ./${PROJECT_NAME}`, { stdio: 'inherit' });
}


execSync(`git clone https://github.com/kyle-ssg/node-minimal ./${PROJECT_NAME}`, { stdio: 'inherit' });

//install web
var web = new Promise((resolve) => {

});
//install mobile


console.log('Installing web and mobile, this should take around 50-80 seconds...')
var interval = spinner(options);
execSync(`cd ./${PROJECT_NAME} && rm -rf .git && git init`, { stdio: 'inherit' });
execSync(`cd ./${PROJECT_NAME} && npm i`, { stdio: 'inherit' });


console.log('All done, enjoy your day.')
clearInterval(interval);

