(function(back) {
  const SETTINGS_FILE = "lcars.setting.json";

  // initialize with default settings...
  const storage = require('Storage')
  let settings = {
    alarm: -1,
    dataRow1: "Steps",
    dataRow2: "HRM",
    dataRow3: "Battery",
    speed: "kph",
    fullscreen: false,
    themeColor1BG: "#FF9900",
    themeColor2BG: "#FF00DC",
    themeColor3BG: "#0094FF",
    control: "tap",
  };
  let saved_settings = storage.readJSON(SETTINGS_FILE, 1) || settings;
  for (const key in saved_settings) {
    settings[key] = saved_settings[key]
  }

  function save() {
    storage.write(SETTINGS_FILE, settings)
  }


  var dataOptions = ["Steps", "Battery", "VREF", "HRM", "Temp", "Humidity", "Wind", "Altitude", "CoreT"];
  var speedOptions = ["kph", "mph"];
  var controlOptions = ["tap", "swipe"];
  var color_options = ['Green','Orange','Cyan','Purple','Red','Blue','Yellow','White'];
  var bg_code = ['#00ff00','#FF9900','#0094FF','#FF00DC','#ff0000','#0000ff','#ffef00','#FFFFFF'];

  E.showMenu({
    '': { 'title': 'LCARS Clock' },
    '< Back': back,
    'Row 1': {
      value: 0 | dataOptions.indexOf(settings.dataRow1),
      min: 0, max: 8,
      format: v => dataOptions[v],
      onchange: v => {
        settings.dataRow1 = dataOptions[v];
        save();
      },
    },
    'Row 2': {
      value: 0 | dataOptions.indexOf(settings.dataRow2),
      min: 0, max: 8,
      format: v => dataOptions[v],
      onchange: v => {
        settings.dataRow2 = dataOptions[v];
        save();
      },
    },
    'Row 3': {
      value: 0 | dataOptions.indexOf(settings.dataRow3),
      min: 0, max: 8,
      format: v => dataOptions[v],
      onchange: v => {
        settings.dataRow3 = dataOptions[v];
        save();
      },
    },
    'Full Screen': {
      value: settings.fullscreen,
      format: () => (settings.fullscreen ? 'Yes' : 'No'),
      onchange: () => {
        settings.fullscreen = !settings.fullscreen;
        save();
      },
    },
    'Speed': {
      value: 0 | speedOptions.indexOf(settings.speed),
      min: 0, max: 1,
      format: v => speedOptions[v],
      onchange: v => {
        settings.speed = speedOptions[v];
        save();
      },
    },
    'Theme Color 1': {
      value: 0 | bg_code.indexOf(settings.themeColor1BG),
      min: 0, max: 7,
      format: v => color_options[v],
      onchange: v => {
        settings.themeColor1BG = bg_code[v];
        save();
      },
    },
    'Theme Color 2': {
      value: 0 | bg_code.indexOf(settings.themeColor2BG),
      min: 0, max: 7,
      format: v => color_options[v],
      onchange: v => {
        settings.themeColor2BG = bg_code[v];
        save();
      },
    },
    'Theme Color 3': {
      value: 0 | bg_code.indexOf(settings.themeColor3BG),
      min: 0, max: 7,
      format: v => color_options[v],
      onchange: v => {
        settings.themeColor3BG = bg_code[v];
        save();
      },
    },
    'Contol': {
      value: 0 | controlOptions.indexOf(settings.control),
      min: 0, max: 1,
      format: v => controlOptions[v],
      onchange: v => {
        settings.control = controlOptions[v];
        save();
      },
    }
  });
})
