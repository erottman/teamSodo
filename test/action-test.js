var chai = require('chai')
var assert = chai.assert
var actionLookup = require('../src/actionLookup.js')
var json = require('../src/build.json')


describe('actionLookup', function () {
  it('should return action path of unordered array', function () {
    let path = ["project","client","lint"].sort().join("")
    let result = actionLookup(jsonMap, path)
    assert.equal(result, 'hello from [project, client, lint]')
  })
})
