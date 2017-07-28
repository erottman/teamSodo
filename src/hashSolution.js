//lets see if we can do this with a hash map

var json_text = {
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

const obj = JSON.stringify(json_text)
console.log(obj);

const HashTable = function () {
  this._storage = [];
  this._count = 0;
  this._limit = 8;
}
console.log(HashTable);

HashTable.prototype.insert = function (key, value) {
  let index = this.hashFunc(key, this._limit);
  let bucket = this._storage[index];

  if(!bucket) {
    let bucket = [];
    this._storage[index] = bucket;
  }
}





// console.log(HashTable);
