fs = require 'fs'
path = require 'path'
process = global.process
console = global.console
Math = global.Math

this_program_filename = path.basename __filename
this_program_regex = new RegExp (this_program_filename + "$")
exe_index = (process.argv.map [ arg |
    ret this_program_regex.test arg
]).indexOf true

args = process.argv.slice (exe_index + 1)

auditors = if (args.length != 0) args else [
    lines = fs.readFileSync "auditors.txt" {encoding: 'utf8'}
    ret (lines.split /[\n\r]+/).filter [ a | a ]
]

console.log "picking from: " (auditors.join " ")

index = Math.floor (Math.random() * auditors.length)
console.log index auditors

console.log auditors@index
