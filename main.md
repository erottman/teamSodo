:one: Parse the following JSON into a new datastructure that allows an action lookup to occur in constant (`O(1)`) time. :two: Write a function that performs the action lookup given an "action path".

An action path is an unordered array of three strings `['type', 'label', 'actionKey']`. Keep in mind that the array is unordered.

- `["build", "circleci", "show"]`
- `["build", "show", "circleci"]`
- `["circleci", "build", "show"]`
- `["circleci", "show", "build"]`
- `["show", "circleci", "build"]`
- `["show", "build", "circleci"]`

Each of these action paths are equivalent and should resolve to `"hello from [build, circleci, show]"`.

```json
{
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
```
