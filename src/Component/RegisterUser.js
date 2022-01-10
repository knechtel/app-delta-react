import NavBar from "./NavBar";
import React, { useState } from "react";
import DataGrid, {
  Column,
  FilterRow,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  Selection,
} from "devextreme-react/data-grid";


function RegisterUser() {
  const sales = [
    {
      orderId: 10248,
      region: "North America",
      country: "United States",
      city: "New York",
      amount: 1740,
      date: "2013/01/06",
    },
    {
      orderId: 10249,
      region: "North America",
      country: "United States",
      city: "Los Angeles",
      amount: 850,
      date: "2013/01/13",
    },
    {
      orderId: 10250,
      region: "North America",
      country: "United States",
      city: "Denver",
      amount: 2235,
      date: "2013/01/07",
    },
    {
      orderId: 10251,
      region: "North America",
      country: "Canada",
      city: "Vancouver",
      amount: 1965,
      date: "2013/01/03",
    },
    {
      orderId: 10252,
      region: "North America",
      country: "Canada",
      city: "Edmonton",
      amount: 880,
      date: "2013/01/10",
    },
    {
      orderId: 10253,
      region: "South America",
      country: "Brazil",
      city: "Rio de Janeiro",
      amount: 5260,
      date: "2013/01/17",
    },
    {
      orderId: 10254,
      region: "South America",
      country: "Argentina",
      city: "Buenos Aires",
      amount: 2790,
      date: "2013/01/21",
    },
    {
      orderId: 10255,
      region: "South America",
      country: "Paraguay",
      city: "Asuncion",
      amount: 3140,
      date: "2013/01/01",
    },
    {
      orderId: 10256,
      region: "Europe",
      country: "United Kingdom",
      city: "London",
      amount: 6175,
      date: "2013/01/24",
    },
    {
      orderId: 10257,
      region: "Europe",
      country: "Germany",
      city: "Berlin",
      amount: 4575,
      date: "2013/01/11",
    },
    {
      orderId: 10258,
      region: "Europe",
      country: "Spain",
      city: "Madrid",
      amount: 3680,
      date: "2013/01/12",
    },
    {
      orderId: 10259,
      region: "Europe",
      country: "Russian Federation",
      city: "Moscow",
      amount: 2260,
      date: "2013/01/01",
    },
    {
      orderId: 10260,
      region: "Asia",
      country: "China",
      city: "Beijing",
      amount: 2910,
      date: "2013/01/26",
    },
    {
      orderId: 10261,
      region: "Asia",
      country: "Japan",
      city: "Tokyo",
      amount: 8400,
      date: "2013/01/05",
    },
    {
      orderId: 10262,
      region: "Asia",
      country: "Korea (Republic of)",
      city: "Seoul",
      amount: 1325,
      date: "2013/01/14",
    },
    {
      orderId: 10263,
      region: "Australia",
      country: "Australia",
      city: "Sydney",
      amount: 3920,
      date: "2013/01/05",
    },
    {
      orderId: 10264,
      region: "Australia",
      country: "Australia",
      city: "Melbourne",
      amount: 2220,
      date: "2013/01/15",
    },
    {
      orderId: 10265,
      region: "Africa",
      country: "South Africa",
      city: "Pretoria",
      amount: 940,
      date: "2013/01/01",
    },
    {
      orderId: 10266,
      region: "Africa",
      country: "Egypt",
      city: "Cairo",
      amount: 1630,
      date: "2013/01/10",
    },
    {
      orderId: 10267,
      region: "North America",
      country: "Canada",
      city: "Edmonton",
      amount: 2910,
      date: "2013/01/23",
    },
    {
      orderId: 10268,
      region: "North America",
      country: "United States",
      city: "Los Angeles",
      amount: 2600,
      date: "2013/01/14",
    },
    {
      orderId: 10269,
      region: "Europe",
      country: "Spain",
      city: "Madrid",
      amount: 4340,
      date: "2013/01/26",
    },
    {
      orderId: 10270,
      region: "Europe",
      country: "United Kingdom",
      city: "London",
      amount: 6650,
      date: "2013/01/24",
    },
    {
      orderId: 10271,
      region: "North America",
      country: "Canada",
      city: "Edmonton",
      amount: 490,
      date: "2013/01/22",
    },
    {
      orderId: 10272,
      region: "North America",
      country: "United States",
      city: "New York",
      amount: 3390,
      date: "2013/01/25",
    },
    {
      orderId: 10273,
      region: "North America",
      country: "United States",
      city: "New York",
      amount: 5160,
      date: "2013/02/20",
    },
    {
      orderId: 10274,
      region: "North America",
      country: "United States",
      city: "Los Angeles",
      amount: 5750,
      date: "2013/02/12",
    },
    {
      orderId: 10275,
      region: "North America",
      country: "United States",
      city: "Denver",
      amount: 2805,
      date: "2013/02/13",
    },
    {
      orderId: 10276,
      region: "North America",
      country: "Canada",
      city: "Vancouver",
      amount: 2505,
      date: "2013/02/09",
    },
    {
      orderId: 10277,
      region: "North America",
      country: "Canada",
      city: "Edmonton",
      amount: 930,
      date: "2013/02/04",
    },
    {
      orderId: 10278,
      region: "South America",
      country: "Brazil",
      city: "Rio de Janeiro",
      amount: 1240,
      date: "2013/02/03",
    },
    {
      orderId: 10279,
      region: "South America",
      country: "Argentina",
      city: "Buenos Aires",
      amount: 315,
      date: "2013/02/04",
    },
    {
      orderId: 10280,
      region: "South America",
      country: "Paraguay",
      city: "Asuncion",
      amount: 2870,
      date: "2013/02/18",
    },
    {
      orderId: 10281,
      region: "Europe",
      country: "United Kingdom",
      city: "London",
      amount: 5150,
      date: "2013/02/18",
    },
    {
      orderId: 10282,
      region: "Europe",
      country: "Germany",
      city: "Berlin",
      amount: 2725,
      date: "2013/02/20",
    },
    {
      orderId: 10283,
      region: "Europe",
      country: "Spain",
      city: "Madrid",
      amount: 2840,
      date: "2013/02/04",
    },
    {
      orderId: 10284,
      region: "Europe",
      country: "Russian Federation",
      city: "Moscow",
      amount: 5840,
      date: "2013/02/13",
    },
    {
      orderId: 10285,
      region: "Asia",
      country: "China",
      city: "Beijing",
      amount: 6750,
      date: "2013/02/11",
    },
    {
      orderId: 10286,
      region: "Asia",
      country: "Japan",
      city: "Tokyo",
      amount: 1200,
      date: "2013/02/03",
    },
    {
      orderId: 10287,
      region: "Asia",
      country: "Korea (Republic of)",
      city: "Seoul",
      amount: 4550,
      date: "2013/02/08",
    },
    {
      orderId: 10288,
      region: "Australia",
      country: "Australia",
      city: "Sydney",
      amount: 6040,
      date: "2013/02/17",
    },
    {
      orderId: 10289,
      region: "Australia",
      country: "Australia",
      city: "Melbourne",
      amount: 2205,
      date: "2013/02/08",
    },
    {
      orderId: 10290,
      region: "Africa",
      country: "South Africa",
      city: "Pretoria",
      amount: 990,
      date: "2013/02/20",
    },
    {
      orderId: 10291,
      region: "Africa",
      country: "Egypt",
      city: "Cairo",
      amount: 700,
      date: "2013/02/11",
    },
    {
      orderId: 10292,
      region: "Australia",
      country: "Australia",
      city: "Melbourne",
      amount: 2325,
      date: "2013/02/15",
    },
    {
      orderId: 10293,
      region: "South America",
      country: "Argentina",
      city: "Buenos Aires",
      amount: 930,
      date: "2013/02/21",
    },
    {
      orderId: 10294,
      region: "North America",
      country: "Canada",
      city: "Edmonton",
      amount: 1560,
      date: "2013/02/04",
    },
    {
      orderId: 10295,
      region: "North America",
      country: "United States",
      city: "New York",
      amount: 1740,
      date: "2013/03/04",
    },
    {
      orderId: 10296,
      region: "North America",
      country: "United States",
      city: "Los Angeles",
      amount: 3575,
      date: "2013/03/20",
    },
    {
      orderId: 10297,
      region: "North America",
      country: "United States",
      city: "Denver",
      amount: 4500,
      date: "2013/03/04",
    },
    {
      orderId: 10298,
      region: "North America",
      country: "Canada",
      city: "Vancouver",
      amount: 1605,
      date: "2013/03/17",
    },
    {
      orderId: 10299,
      region: "North America",
      country: "Canada",
      city: "Edmonton",
      amount: 800,
      date: "2013/03/21",
    },
    {
      orderId: 10300,
      region: "South America",
      country: "Brazil",
      city: "Rio de Janeiro",
      amount: 640,
      date: "2013/03/08",
    },
    {
      orderId: 10301,
      region: "South America",
      country: "Argentina",
      city: "Buenos Aires",
      amount: 735,
      date: "2013/03/19",
    },
    {
      orderId: 10302,
      region: "South America",
      country: "Paraguay",
      city: "Asuncion",
      amount: 2520,
      date: "2013/03/20",
    },
    {
      orderId: 10303,
      region: "Europe",
      country: "United Kingdom",
      city: "London",
      amount: 6675,
      date: "2013/03/18",
    },
    {
      orderId: 10304,
      region: "Europe",
      country: "Germany",
      city: "Berlin",
      amount: 3625,
      date: "2013/03/25",
    },
    {
      orderId: 10305,
      region: "Europe",
      country: "Spain",
      city: "Madrid",
      amount: 1200,
      date: "2013/03/07",
    },
    {
      orderId: 10306,
      region: "Europe",
      country: "Russian Federation",
      city: "Moscow",
      amount: 2000,
      date: "2013/03/07",
    },
    {
      orderId: 10307,
      region: "Asia",
      country: "China",
      city: "Beijing",
      amount: 1410,
      date: "2013/03/10",
    },
    {
      orderId: 10308,
      region: "Asia",
      country: "Japan",
      city: "Tokyo",
      amount: 2700,
      date: "2013/03/19",
    },
    {
      orderId: 10309,
      region: "Asia",
      country: "Korea (Republic of)",
      city: "Seoul",
      amount: 5950,
      date: "2013/03/24",
    },
    {
      orderId: 10310,
      region: "Australia",
      country: "Australia",
      city: "Sydney",
      amount: 5120,
      date: "2013/03/08",
    },
    {
      orderId: 10311,
      region: "Australia",
      country: "Australia",
      city: "Melbourne",
      amount: 1980,
      date: "2013/03/17",
    },
    {
      orderId: 10312,
      region: "Africa",
      country: "South Africa",
      city: "Pretoria",
      amount: 1110,
      date: "2013/03/08",
    },
    {
      orderId: 10313,
      region: "Africa",
      country: "Egypt",
      city: "Cairo",
      amount: 980,
      date: "2013/03/21",
    },
    {
      orderId: 10314,
      region: "Australia",
      country: "Australia",
      city: "Sydney",
      amount: 5460,
      date: "2013/03/19",
    },
    {
      orderId: 10315,
      region: "Europe",
      country: "Germany",
      city: "Berlin",
      amount: 3800,
      date: "2013/03/12",
    },
    {
      orderId: 10316,
      region: "Australia",
      country: "Australia",
      city: "Melbourne",
      amount: 2610,
      date: "2013/03/04",
    },
    {
      orderId: 10317,
      region: "Europe",
      country: "Russian Federation",
      city: "Moscow",
      amount: 3080,
      date: "2013/03/22",
    },
    {
      orderId: 10318,
      region: "Asia",
      country: "Japan",
      city: "Tokyo",
      amount: 2010,
      date: "2013/03/23",
    },
    {
      orderId: 10319,
      region: "Asia",
      country: "China",
      city: "Beijing",
      amount: 1200,
      date: "2013/03/04",
    },
    {
      orderId: 10320,
      region: "North America",
      country: "United States",
      city: "New York",
      amount: 7680,
      date: "2013/04/15",
    },
    {
      orderId: 10321,
      region: "North America",
      country: "United States",
      city: "Los Angeles",
      amount: 1325,
      date: "2013/04/07",
    },
    {
      orderId: 10322,
      region: "North America",
      country: "United States",
      city: "Denver",
      amount: 2835,
      date: "2013/04/10",
    },
    {
      orderId: 10323,
      region: "North America",
      country: "Canada",
      city: "Vancouver",
      amount: 3660,
      date: "2013/04/10",
    },
    {
      orderId: 10324,
      region: "North America",
      country: "Canada",
      city: "Edmonton",
      amount: 390,
      date: "2013/04/12",
    },
    {
      orderId: 10325,
      region: "South America",
      country: "Brazil",
      city: "Rio de Janeiro",
      amount: 4420,
      date: "2013/04/08",
    },
    {
      orderId: 10326,
      region: "South America",
      country: "Argentina",
      city: "Buenos Aires",
      amount: 1755,
      date: "2013/04/13",
    },
    {
      orderId: 10327,
      region: "South America",
      country: "Paraguay",
      city: "Asuncion",
      amount: 2580,
      date: "2013/04/15",
    },
    {
      orderId: 10328,
      region: "Europe",
      country: "United Kingdom",
      city: "London",
      amount: 850,
      date: "2013/04/01",
    },
    {
      orderId: 10329,
      region: "Europe",
      country: "Germany",
      city: "Berlin",
      amount: 2825,
      date: "2013/04/10",
    },
    {
      orderId: 10330,
      region: "Europe",
      country: "Spain",
      city: "Madrid",
      amount: 540,
      date: "2013/04/06",
    },
    {
      orderId: 10331,
      region: "Europe",
      country: "Russian Federation",
      city: "Moscow",
      amount: 1520,
      date: "2013/04/08",
    },
    {
      orderId: 10332,
      region: "Asia",
      country: "China",
      city: "Beijing",
      amount: 8760,
      date: "2013/04/26",
    },
    {
      orderId: 10333,
      region: "Asia",
      country: "Japan",
      city: "Tokyo",
      amount: 1110,
      date: "2013/04/16",
    },
    {
      orderId: 10334,
      region: "Asia",
      country: "Korea (Republic of)",
      city: "Seoul",
      amount: 6850,
      date: "2013/04/19",
    },
    {
      orderId: 10335,
      region: "Australia",
      country: "Australia",
      city: "Sydney",
      amount: 1940,
      date: "2013/04/23",
    },
    {
      orderId: 10336,
      region: "Australia",
      country: "Australia",
      city: "Melbourne",
      amount: 1980,
      date: "2013/04/21",
    },
    {
      orderId: 10337,
      region: "Africa",
      country: "South Africa",
      city: "Pretoria",
      amount: 3090,
      date: "2013/04/03",
    },
    {
      orderId: 10338,
      region: "Africa",
      country: "Egypt",
      city: "Cairo",
      amount: 1640,
      date: "2013/04/24",
    },
    {
      orderId: 10339,
      region: "Australia",
      country: "Australia",
      city: "Melbourne",
      amount: 3585,
      date: "2013/04/01",
    },
    {
      orderId: 10340,
      region: "North America",
      country: "Canada",
      city: "Vancouver",
      amount: 1770,
      date: "2013/04/01",
    },
    {
      orderId: 10341,
      region: "Australia",
      country: "Australia",
      city: "Melbourne",
      amount: 4005,
      date: "2013/04/04",
    },
    {
      orderId: 10342,
      region: "North America",
      country: "Canada",
      city: "Edmonton",
      amount: 2870,
      date: "2013/04/02",
    },
    {
      orderId: 10343,
      region: "North America",
      country: "Canada",
      city: "Edmonton",
      amount: 960,
      date: "2013/04/20",
    },
    {
      orderId: 10344,
      region: "North America",
      country: "United States",
      city: "New York",
      amount: 8640,
      date: "2013/05/14",
    },
    {
      orderId: 10345,
      region: "North America",
      country: "United States",
      city: "Los Angeles",
      amount: 5450,
      date: "2013/05/24",
    },
    {
      orderId: 10346,
      region: "North America",
      country: "United States",
      city: "Denver",
      amount: 2535,
      date: "2013/05/07",
    },
    {
      orderId: 10347,
      region: "North America",
      country: "Canada",
      city: "Vancouver",
      amount: 1155,
      date: "2013/05/20",
    },
    {
      orderId: 10348,
      region: "North America",
      country: "Canada",
      city: "Edmonton",
      amount: 3140,
      date: "2013/05/18",
    },
    {
      orderId: 10349,
      region: "South America",
      country: "Brazil",
      city: "Rio de Janeiro",
      amount: 2260,
      date: "2013/05/19",
    },
    {
      orderId: 10350,
      region: "South America",
      country: "Argentina",
      city: "Buenos Aires",
      amount: 1215,
      date: "2013/05/23",
    },
    {
      orderId: 10351,
      region: "South America",
      country: "Paraguay",
      city: "Asuncion",
      amount: 1210,
      date: "2013/05/08",
    },
    {
      orderId: 10352,
      region: "Europe",
      country: "United Kingdom",
      city: "London",
      amount: 875,
      date: "2013/05/25",
    },
    {
      orderId: 10353,
      region: "Europe",
      country: "Germany",
      city: "Berlin",
      amount: 5400,
      date: "2013/05/03",
    },
    {
      orderId: 10354,
      region: "Europe",
      country: "Spain",
      city: "Madrid",
      amount: 5940,
      date: "2013/05/25",
    },
    {
      orderId: 10355,
      region: "Europe",
      country: "Russian Federation",
      city: "Moscow",
      amount: 4700,
      date: "2013/05/03",
    },
    {
      orderId: 10356,
      region: "Asia",
      country: "China",
      city: "Beijing",
      amount: 5520,
      date: "2013/05/12",
    },
    {
      orderId: 10357,
      region: "Asia",
      country: "Japan",
      city: "Tokyo",
      amount: 9210,
      date: "2013/05/22",
    },
    {
      orderId: 10358,
      region: "Asia",
      country: "Korea (Republic of)",
      city: "Seoul",
      amount: 7950,
      date: "2013/05/12",
    },
    {
      orderId: 10359,
      region: "Australia",
      country: "Australia",
      city: "Sydney",
      amount: 3740,
      date: "2013/05/24",
    },
    {
      orderId: 10360,
      region: "Australia",
      country: "Australia",
      city: "Melbourne",
      amount: 990,
      date: "2013/05/02",
    },
    {
      orderId: 10361,
      region: "Africa",
      country: "South Africa",
      city: "Pretoria",
      amount: 3190,
      date: "2013/05/03",
    },
    {
      orderId: 10362,
      region: "Africa",
      country: "Egypt",
      city: "Cairo",
      amount: 2430,
      date: "2013/05/11",
    },
    {
      orderId: 10363,
      region: "North America",
      country: "United States",
      city: "New York",
      amount: 7380,
      date: "2013/06/15",
    },
    {
      orderId: 10364,
      region: "North America",
      country: "United States",
      city: "Los Angeles",
      amount: 4475,
      date: "2013/06/08",
    },
    {
      orderId: 10365,
      region: "North America",
      country: "United States",
      city: "Denver",
      amount: 1290,
      date: "2013/06/10",
    },
    {
      orderId: 10366,
      region: "North America",
      country: "Canada",
      city: "Vancouver",
      amount: 2250,
      date: "2013/06/10",
    },
    {
      orderId: 10367,
      region: "North America",
      country: "Canada",
      city: "Edmonton",
      amount: 350,
      date: "2013/06/22",
    },
    {
      orderId: 10368,
      region: "South America",
      country: "Brazil",
      city: "Rio de Janeiro",
      amount: 5480,
      date: "2013/06/24",
    },
    {
      orderId: 10369,
      region: "South America",
      country: "Argentina",
      city: "Buenos Aires",
      amount: 2355,
      date: "2013/06/10",
    },
    {
      orderId: 10370,
      region: "South America",
      country: "Paraguay",
      city: "Asuncion",
      amount: 1960,
      date: "2013/06/23",
    },
    {
      orderId: 10371,
      region: "Europe",
      country: "United Kingdom",
      city: "London",
      amount: 4125,
      date: "2013/06/06",
    },
    {
      orderId: 10372,
      region: "Europe",
      country: "Germany",
      city: "Berlin",
      amount: 7925,
      date: "2013/06/12",
    },
    {
      orderId: 10373,
      region: "Europe",
      country: "Spain",
      city: "Madrid",
      amount: 1120,
      date: "2013/06/22",
    },
    {
      orderId: 10374,
      region: "Europe",
      country: "Russian Federation",
      city: "Moscow",
      amount: 5100,
      date: "2013/06/01",
    },
    {
      orderId: 10375,
      region: "Asia",
      country: "China",
      city: "Beijing",
      amount: 1500,
      date: "2013/06/25",
    },
    {
      orderId: 10376,
      region: "Asia",
      country: "Japan",
      city: "Tokyo",
      amount: 5130,
      date: "2013/06/10",
    },
    {
      orderId: 10377,
      region: "Asia",
      country: "Korea (Republic of)",
      city: "Seoul",
      amount: 2475,
      date: "2013/06/10",
    },
    {
      orderId: 10378,
      region: "Australia",
      country: "Australia",
      city: "Sydney",
      amount: 2100,
      date: "2013/06/06",
    },
    {
      orderId: 10379,
      region: "Australia",
      country: "Australia",
      city: "Melbourne",
      amount: 3570,
      date: "2013/06/10",
    },
    {
      orderId: 10380,
      region: "Africa",
      country: "South Africa",
      city: "Pretoria",
      amount: 550,
      date: "2013/06/02",
    },
    {
      orderId: 10381,
      region: "Africa",
      country: "Egypt",
      city: "Cairo",
      amount: 2850,
      date: "2013/06/26",
    },
    {
      orderId: 10382,
      region: "Europe",
      country: "Russian Federation",
      city: "Moscow",
      amount: 4280,
      date: "2013/06/19",
    },
    {
      orderId: 10383,
      region: "Australia",
      country: "Australia",
      city: "Sydney",
      amount: 1460,
      date: "2013/06/17",
    },
    {
      orderId: 10384,
      region: "North America",
      country: "Canada",
      city: "Edmonton",
      amount: 960,
      date: "2013/06/17",
    },
    {
      orderId: 10385,
      region: "Africa",
      country: "Egypt",
      city: "Cairo",
      amount: 1520,
      date: "2013/06/03",
    },
    {
      orderId: 10386,
      region: "Asia",
      country: "Japan",
      city: "Tokyo",
      amount: 6750,
      date: "2013/06/21",
    },
    {
      orderId: 10387,
      region: "North America",
      country: "United States",
      city: "New York",
      amount: 7260,
      date: "2013/07/14",
    },
    {
      orderId: 10388,
      region: "North America",
      country: "United States",
      city: "Los Angeles",
      amount: 2450,
      date: "2013/07/11",
    },
    {
      orderId: 10389,
      region: "North America",
      country: "United States",
      city: "Denver",
      amount: 3540,
      date: "2013/07/02",
    },
    {
      orderId: 10390,
      region: "North America",
      country: "Canada",
      city: "Vancouver",
      amount: 1950,
      date: "2013/07/03",
    },
  ];

  const selectedKeys = [
    10273, 10277, 10292, 10295, 10300, 10302, 10305, 10308, 10312, 10319, 10321,
    10323, 10326, 10328, 10331, 10334, 10335, 10341, 10351, 10353, 10356, 10362,
    10367, 10373, 10376, 10383, 10387,
  ];

  const tableDetailColumnExtensions = [
    { columnName: "startDate", width: 115 },
    { columnName: "dueDate", width: 115 },
    { columnName: "priority", width: 100 },
    { columnName: "status", width: 125 },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [serial, setSerial] = useState("");
  const [defeito, setDefeito] = useState("");
  const [idClient, setIdClient] = useState("");
  const [postId, setPostId] = useState(2);
  var id = 0;

  async function fetchFunction() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    };
    try {
      const response = await fetch(`http://localhost:8080/client-create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          cpf: cpf,
        }),
      });

      const json = await response.json();
      console.log("aqui");
      console.log(json.id);
      setPostId(json.id);

      id = json.id;
    } catch (err) {
      throw err;
      console.log(err);
    }
  }
  async function submitHandler(e) {
    e.preventDefault();
    await fetchFunction();
    setPostId(id);
    console.log(name + "aqui maiquel -------->" + id);
  }
  async function submitHandlerEquipment(e) {
    e.preventDefault();
    console.log(name + "send  maiquel  postId  -------->" + postId);
    alert("-> send " + id + " foi ");
  }
  const mystyle = {
    alignItems: "center",
    justifyContent: "center",
    padding: "40",
    width: "30%",
    marginLeft: "50px",
  };
  const styleH1 = {
    alignItems: "center",
    justifyContent: "center",
    padding: "40",
    width: "30%",
    marginLeft: "50px",
  };
  return (
    <>
      <NavBar />
      <h1 style={styleH1}>Cadastro de cliente</h1>
      <div>
        <form onSubmit={submitHandler}>
          <table style={mystyle}>
            <tr>
              <td>Nome</td>
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Cpf</td>
              <td>
                <input
                  type="text"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <button>Enviar</button>
            </tr>
          </table>
        </form>
        <form onSubmit={submitHandlerEquipment}>
          <h2 style={styleH1}>Aparelho </h2>
          <table style={mystyle}>
            <tr>
              <td>Marca</td>
              <td>
                <input
                  type="text"
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Modelo</td>
              <td>
                <input
                  type="text"
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Serial</td>
              <td>
                <input
                  type="text"
                  value={serial}
                  onChange={(e) => setSerial(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Defeito</td>
              <td>
                <input
                  type="text"
                  value={defeito}
                  onChange={(e) => setDefeito(e.target.value)}
                />
              </td>
            </tr>

            <tr>
              <button>Enviar</button>
            </tr>
          </table>
        </form>
        <h3 style={styleH1}>Aparelhos com mesma os</h3>
        <DataGrid
          dataSource={sales}
          keyExpr={"orderId"}
          allowColumnReordering={true}
          defaultSelectedRowKeys={selectedKeys}
        >
          <Grouping autoExpandAll={true} border="1" />
          <FilterRow visible={true} />
          <Selection mode={"multiple"} />

          <Column
            dataField={"orderId"}
            caption={"Order ID"}
            allowSorting={false}
            allowFiltering={false}
            allowGrouping={false}
            allowReordering={false}
            width={100}
          />
          <Column dataField={"city"} />
          <Column dataField={"country"} sortOrder={"asc"} />

          <Column
            dataField={"date"}
            dataType={"date"}
            selectedFilterOperation={">="}
            filterValue={"2013/04/01"}
            width={150}
          />
          <Column
            dataField={"amount"}
            format={"currency"}
            selectedFilterOperation={">="}
            filterValue={1000}
            width={100}
          />

          <Pager allowedPageSizes={[5, 10, 20]} showPageSizeSelector={true} />
          <Paging defaultPageSize={10} />
        </DataGrid>
      </div>
    </>
  );
}
export default RegisterUser;
