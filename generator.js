var fs = require("fs");
var data = JSON.parse(fs.readFileSync("./data.json"));

var colors =
[
  {
    "color" : "color",
    "modifier" : ""
  },
  {
    "color" : "light",
    "modifier" : ".light"
  },
  {
    "color" : "dark",
    "modifier" : ".dark"
  }
];

var styles =
[
    "color"
  , "background-color"
  , "border-color"
];

var output = "";

// process skills
for(var skill in data.skill)
{
  for(var i = 0; i < styles.length; ++i)
  {
    for(var j = 0; j < colors.length; ++j)
    {
      var style = {};
      style[styles[i]] = data.skill[skill][colors[j].color];

      output +=
        "." + data.skill[skill].csstag
        + "." + "apply-" + styles[i]
        + colors[j]["modifier"]
        + "{"
        + styles[i]
        + ":"
        + data.skill[skill][colors[j].color]
        + "}";
    }
  }
}

// process intents
for(var intent in data.intent)
{
  for(var i = 0; i < styles.length; ++i)
  {
    var style = {};
    var color = data.intent[intent];
    style[styles[i]] = color;

    output +=
      "." + intent
      + "." + "apply-" + styles[i]
      + "{"
      + styles[i]
      + ":"
      + color
      + "}";
  }
}

fs.writeFileSync("colors.min.css",output);
