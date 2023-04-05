#! /usr/bin/env node
const { program } = require('commander')
const fs = require('fs')
const search = require('./search.js');

program
    .command('find')
    .description('enter file path and word to search')
    .argument('<dirname>')
    .argument('<keyword>')
    .action(function (dirname, keyword) {
            if (dirname, keyword) {
                fs.readFile(dirname, (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        if (!data.includes(keyword)){
                            console.log('No line contains this keyword')
                        }
                       let lines = data.toString().split(/\r?\n/)
                        for (let x = 0; x < lines.length; x++){
                            if (lines[x].includes(keyword)){
                                console.log('line',x+1,':', lines[x])
                            }
                        }
                    }
                })
            } else {
                console.log(err)
            }
        
    })


program.parse()