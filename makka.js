const cityListHtml = `
<p class="cit centered">
  شتوتغارت (Stuttgart) -
  دورتموند (Dortmund) -
  بريمن (Bremen) -
  ميونخ (München) -
  فريدريشهافن (Friedrichshafen) -
  دوسلدورف (Düsseldorf) -
  إيسن (Essen) -
  لايبزيغ (Leipzig) -
  فرايبورغ (Freiburg) -
  برلين (Berlin) -
  نورمبرغ (Nuremberg) -
  كارلسروه (Karlsruhe) -
  مانهايم (Mannheim) -
  فرانكفورت (Frankfurt) -
  كيل (Kiel) -
  هامبورغ (Hamburg) -
  كوبلنتس (Koblenz) -
  رافنسبورغ (ravensburg) -
  ريغنسبورغ (Regensburg) -
  أوغسبورغ (Augsburg) -
  إرفورت (Erfurt) -
  لينداو (Lindau) -
  كونستانس (Konstanz) -
  توبنغن (Tübingen) -
  روستوك (Rostock) -
  فلنسبورغ (Flensburg) -
  سيببوله (Sibbhult) -
  كريستيانستاد (Kristianstad) -
  تست ستي (testcity) -
  أولم (Ulm) -
  نويلم (Neu_Ulm) -
</p>
`;
	var makkahFajr = [
      { day: 1,  Fajr: "05:25"},
      { day: 2,  Fajr: "05:24"},
      { day: 3,  Fajr: "05:24"},
      { day: 4,  Fajr: "05:23"},
      { day: 5,  Fajr: "05:22"},
      { day: 6,  Fajr: "05:21"},
      { day: 7,  Fajr: "05:20"},
      { day: 8,  Fajr: "05:20"},
      { day: 9,  Fajr: "05:19"},
      { day: 10, Fajr: "05:18"},
      { day: 11, Fajr: "05:17"},
      { day: 12, Fajr: "05:16"},
      { day: 13, Fajr: "05:15"},
      { day: 14, Fajr: "05:14"},
      { day: 15, Fajr: "05:13"},
      { day: 16, Fajr: "05:12"},
      { day: 17, Fajr: "05:12"},
      { day: 18, Fajr: "05:11"},
      { day: 19, Fajr: "05:10"},
      { day: 20, Fajr: "05:09"},
      { day: 21, Fajr: "05:08"},
      { day: 22, Fajr: "05:07"},
      { day: 23, Fajr: "05:06"},
      { day: 24, Fajr: "05:05"},
      { day: 25, Fajr: "05:04"},
      { day: 26, Fajr: "05:03"},
      { day: 27, Fajr: "05:02"},
      { day: 28, Fajr: "05:01"},
      { day: 29, Fajr: "05:00"},
      { day: 30, Fajr: "04:59"}
    ];
	var makkahData = [
      { day: 1,  sunrise: "06:41", sunset: "18:25" },
      { day: 2,  sunrise: "06:40", sunset: "18:25" },
      { day: 3,  sunrise: "06:39", sunset: "18:25" },
      { day: 4,  sunrise: "06:39", sunset: "18:26" },
      { day: 5,  sunrise: "06:38", sunset: "18:26" },
      { day: 6,  sunrise: "06:37", sunset: "18:27" },
      { day: 7,  sunrise: "06:36", sunset: "18:27" },
      { day: 8,  sunrise: "06:35", sunset: "18:27" },
      { day: 9,  sunrise: "06:34", sunset: "18:28" },
      { day: 10, sunrise: "06:33", sunset: "18:28" },
      { day: 11, sunrise: "06:33", sunset: "18:28" },
      { day: 12, sunrise: "06:32", sunset: "18:29" },
      { day: 13, sunrise: "06:31", sunset: "18:29" },
      { day: 14, sunrise: "06:30", sunset: "18:30" },
      { day: 15, sunrise: "06:29", sunset: "18:30" },
      { day: 16, sunrise: "06:28", sunset: "18:30" },
      { day: 17, sunrise: "06:27", sunset: "18:31" },
      { day: 18, sunrise: "06:26", sunset: "18:31" },
      { day: 19, sunrise: "06:25", sunset: "18:31" },
      { day: 20, sunrise: "06:24", sunset: "18:31" },
      { day: 21, sunrise: "06:24", sunset: "18:32" },
      { day: 22, sunrise: "06:23", sunset: "18:32" },
      { day: 23, sunrise: "06:22", sunset: "18:32" },
      { day: 24, sunrise: "06:21", sunset: "18:33" },
      { day: 25, sunrise: "06:20", sunset: "18:33" },
      { day: 26, sunrise: "06:19", sunset: "18:33" },
      { day: 27, sunrise: "06:18", sunset: "18:34" },
      { day: 28, sunrise: "06:17", sunset: "18:34" },
      { day: 29, sunrise: "06:16", sunset: "18:34" },
      { day: 30, sunrise: "06:15", sunset: "18:35" }
    ];
	////add city 3 of 3
var cityLatitude = {
    "stuttgart": { "lat": 48.78, "alt": 245 },
    "dortmund": { "lat": 51.51, "alt": 86 },
    "bremen": { "lat": 53.08, "alt": 12 },
    "muenchen": { "lat": 48.14, "alt": 519 },
    "sibbhult": { "lat": 56.20, "alt": 120 },   // Added Sibbhult
    "kristianstad": { "lat": 56.03, "alt": 3 }, // Added Kristianstad
    "friedrichshafen": { "lat": 47.65, "alt": 399 },
    "duesseldorf": { "lat": 51.22, "alt": 38 },
    "essen": { "lat": 51.45, "alt": 116 },
    "leipzig": { "lat": 51.34, "alt": 118 },
    "freiburg": { "lat": 47.99, "alt": 278 },
    "berlin": { "lat": 52.52, "alt": 34 },
    "nuremberg": { "lat": 49.45, "alt": 309 },
    "karlsruhe": { "lat": 49.00, "alt": 115 },
    "mannheim": { "lat": 49.49, "alt": 97 },
    "frankfurt": { "lat": 50.11, "alt": 112 },
    "kiel": { "lat": 54.32, "alt": 5 },
    "hamburg": { "lat": 53.55, "alt": 6 },
    "koblenz": { "lat": 50.35, "alt": 64 },
    "ravensburg": { "lat": 47.78, "alt": 450 },
    "regensburg": { "lat": 49.02, "alt": 337 },
    "augsburg": { "lat": 48.37, "alt": 494 },
    "erfurt": { "lat": 50.98, "alt": 194 },
    "lindau": { "lat": 47.55, "alt": 401 },
    "konstanz": { "lat": 47.66, "alt": 405 },
    "tuebingen": { "lat": 48.52, "alt": 341 },
    "rostock": { "lat": 54.09, "alt": 14 },
    "flensburg": { "lat": 54.78, "alt": 19 },
	"ulm": { "lat": 48.40, "alt": 478 },
	"neu_ulm": { "lat": 48.39, "alt": 474 }
};
