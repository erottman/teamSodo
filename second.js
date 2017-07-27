
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
// var action_path = ["show", "circleci", "build"]


function action_lookup(data_obj, action_path) {
  if(action_path.length !== 0)  // do null checks and empty array checks

    for(var i = 0; i < action_path.length; i++) {
      for(key in data_obj) {
      console.log(key);
      console.log(action_path[i]);
      if(key === action_path[i]) {
        let action = data_obj[key];
        console.log('action', action[0].actions);
        for(var j = 0; j < action.length; j++) {
          // console.log('digging',action[i].actions);
          for(key in action[0].actions) {
            for(var k = 0; k < action_path.length; k++) {
              if(key === action_path[k]) {
              console.log('keys again', action[0].actions[key]);
              return action[0].actions[key];
              }
            }
          }
        }
      }
    }    // LOOK UP YOUR DATA IN THE JSON DATA STRUCTURE
  }
}

action_lookup(data_obj, action_path)
console.log(action_lookup(data_obj, action_path));
