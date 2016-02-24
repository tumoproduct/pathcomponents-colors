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

for(var skill in data)
{
  for(var i = 0; i < styles.length; ++i)
  {
    for(var j = 0; j < colors.length; ++j)
    {
      var style = {};
      style[styles[i]] = data[skill][colors[j].color];

      output +=
        "." + data[skill].csstag
        + "." + "apply-" + styles[i]
        + colors[j]["modifier"]
        + "{"
        + styles[i]
        + ":"
        + data[skill][colors[j].color]
        + "}";
    }
  }
}

fs.writeFileSync("colors.min.css",output);
