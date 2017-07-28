var json_text = require('../src/build.json')

function parseJSON(json) {
  let map = {}
  for (let type in json) {
    for (let i = 0; i < json[type].length; i++) {
      for (let action in json[type][i].actions) {
        key = [type, json[type][i].label, action].sort().join("")
        value = json[type][i].actions[action]
        map[key] = value;

      }
    }
  }
  return map
}

function actionLookup(map, actionPath) {
	return map[actionPath]
}

let path = ["build", "show", "circleci"].sort().join("")
let jsonMap = parseJSON(json_text);
let lookup = actionLookup(jsonMap, path);

console.log(lookup)

module.exports = actionLookup
