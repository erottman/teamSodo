var chai = require('chai')
var assert = chai.assert
var actionLookup = require('../src/actionLookup.js').actionLookup
var parseJSON = require('../src/actionLookup.js').parseJSON
var json_text = require('../src/build.json')


describe('actionLookup', function () {
  it('should return hello from [build, circleci, show]', function () {
    let path = ["build","circleci","show"].sort().join("")
    let jsonMap = parseJSON(json_text);
    let result = actionLookup(jsonMap, path)

    assert.equal(result, 'hello from [build, circleci, show]')
  })
})

describe('actionLookup', function () {
  it('should return hello from [build, circleci, show]', function () {
    let path = ["circleci","build","show"].sort().join("")
    let jsonMap = parseJSON(json_text);
    let result = actionLookup(jsonMap, path)

    assert.equal(result, 'hello from [build, circleci, show]')
  })
})

describe('actionLookup', function () {
  it('should return hello from [build, circleci, show]', function () {
    let path = ["show","circleci","build"].sort().join("")
    let jsonMap = parseJSON(json_text);
    let result = actionLookup(jsonMap, path)

    assert.equal(result, 'hello from [build, circleci, show]')
  })
})

describe('actionLookup', function () {
  it('should return hello from [project, client, lint]', function () {
    let path = ["project","client","lint"].sort().join("")
    let jsonMap = parseJSON(json_text);
    let result = actionLookup(jsonMap, path)

    assert.equal(result, 'hello from [project, client, lint]')
  })
})

describe('actionLookup', function () {
  it('should return hello from [project, client, lint]', function () {
    let path = ["client","project","lint"].sort().join("")
    let jsonMap = parseJSON(json_text);
    let result = actionLookup(jsonMap, path)

    assert.equal(result, 'hello from [project, client, lint]')
  })
})

describe('actionLookup', function () {
  it('should return hello from [project, client, lint]', function () {
    let path = ["lint","client","project"].sort().join("")
    let jsonMap = parseJSON(json_text);
    let result = actionLookup(jsonMap, path)

    assert.equal(result, 'hello from [project, client, lint]')
  })
})


describe('actionLookup', function () {
  it('should return hello from [project, client, lint]', function () {
    let path = ["lint","client","project"].sort().join("")
    let jsonMap = parseJSON(json_text);
    let result = actionLookup(jsonMap, path)

    assert.equal(result, 'hello from [project, client, lint]')
  })
})

describe('actionLookup', function () {
  it('should return hello from [coverage, server, show]', function () {
    let path = ["coverage","coveralls","show"].sort().join("")
    let jsonMap = parseJSON(json_text);
    let result = actionLookup(jsonMap, path)

    assert.equal(result, 'hello from [coverage, server, show]')
  })
})


describe('actionLookup', function () {
  it('should return hello from [coverage, server, show]', function () {
    let path = ["coveralls","show", "coverage"].sort().join("")
    let jsonMap = parseJSON(json_text);
    let result = actionLookup(jsonMap, path)

    assert.equal(result, 'hello from [coverage, server, show]')
  })
})
