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

var data_obj = JSON.parse(JSON.stringify(json_text));
var action_path = ["project", "client", "lint"]



function HashTable(obj)
{
    this.length = 0;
    this.items = {};

    for (var p in obj) {
      console.log('p', p);

        if (obj.hasOwnProperty(p)) {
            this.items[p] = obj[p];
            console.log('items[p]', this.items[p]);
            this.length++;
        }
    }
    console.log('this items', this.items);


    //
    // this.setItem = function(key, value)
    // {
    //     var previous = undefined;
    //     if (this.hasItem(key)) {
    //         previous = this.items[key];
    //     }
    //     else {
    //         this.length++;
    //     }
    //     this.items[key] = value;
    //     return previous;
    //
    // }
    //
    //
    //
    // this.getItem = function(key) {
    //   console.log('key', key);
    //     return this.hasItem(key) ? this.items[key] : undefined;
    //
    // }
    //
    //
    //
    // this.hasItem = function(key)
    // {
    //     return this.items.hasOwnProperty(key);
    // }
    //
    //
    //
    // this.removeItem = function(key)
    // {
    //     if (this.hasItem(key)) {
    //         previous = this.items[key];
    //         this.length--;
    //         delete this.items[key];
    //         return previous;
    //     }
    //     else {
    //         return undefined;
    //     }
    // }
    //
    //
    //
    // this.keys = function()
    // {
    //     var keys = [];
    //     for (var k in this.items) {
    //         if (this.hasItem(k)) {
    //             keys.push(k);
    //         }
    //     }
    //     return keys;
    // }
    //
    // this.values = function()
    // {
    //     var values = [];
    //     for (var k in this.items) {
    //         if (this.hasItem(k)) {
    //             values.push(this.items[k]);
    //         }
    //     }
    //     return values;
    // }
    //
    // this.each = function(fn) {
    //     for (var k in this.items) {
    //         if (this.hasItem(k)) {
    //             fn(k, this.items[k]);
    //         }
    //     }
    // }
    //
    // this.clear = function()
    // {
    //     this.items = {}
    //     this.length = 0;
    // }
}

HashTable(data_obj)
// console.log(HashTable);
