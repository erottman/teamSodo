json_text = {
  "backlog": [],
  "build": [
    {
      "label": "circleci",
      "actions": {
        "show": "hello from [build, circleci, show]",
        "run": "hello from [build, circleci, run]"
      }
    }
  ],
  "project": [
    {
      "label": "server",
      "actions": {
        "compile": "hello from [project, server, compile]",
        "lint": "hello from [project, server, lint]",
        "test": "hello from [project, server, test]",
        "run": "hello from [project, server, run]"
      }
    },
    {
      "label": "client",
      "actions": {
        "compile": "hello from [project, client, compile]",
        "lint": "hello from [project, client, lint]",
        "test": "hello from [project, client, test]"
      }
    },
    {
      "label": "all",
      "actions": {
        "compile": "hello from [project, all, compile]",
        "lint": "hello from [project, all, lint]",
        "test": "hello from [project, all, test]"
      }
    }
  ],
  "coverage": [
    {
      "label": "coveralls",
      "actions": {
        "show": "hello from [coverage, server, show]"
      }
    },
    {
      "label": "local",
      "actions": {
        "show": "hello from [coverage, client, show]"
      }
    }
  ]
}
var obj = JSON.stringify(json_text)

var HashTable = function() {
  this._storage = [];
	this._count = 0;
  this._limit = 8;
}

HashTable.prototype.insert = function(key, value) {
  var index = this.hashFunc(key, this._limit);
  var bucket = this._storage[index]
  if (!bucket) {
    var bucket = [];
    this._storage[index] = bucket;
  }

  var override = false;
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      tuple[1] = value;
      override = true;
    }
  }

  if (!override) {
    bucket.push([key, value]);
    this._count++
      if (this._count > this._limit * 0.75) {
        this.resize(this._limit * 2);
      }
  }
  return this;
};

HashTable.prototype.retrieve = function(key) {
  var index = this.hashFunc(key, this._limit);
  var bucket = this._storage[index];

  if (!bucket) {
    return null;
  }

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === key) {
      return tuple[1];
    }
  }

  return null;
};

HashTable.prototype.hashFunc = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;

  this._limit = newLimit;
  this._count = 0;
  this._storage = [];

  oldStorage.forEach(function(bucket) {
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};

var hashTable = new HashTable();
for(var type in json_text) {
  for (var i = 0; i < json_text[type].length; i++) {
		for(var action in json_text[type][i].actions){
    	key = type + json_text[type][i].label + action
    	value = json_text[type][i].actions[action]
      hashTable.insert(key,value)
    }
  }
}

console.log(hashTable)
