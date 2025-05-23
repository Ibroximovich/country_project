

const countries = [
    {
        id: 1,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg",
        isLiked:false,
        isBasket:false
    },
    {
    id: 11,
    name: "Brazil",
    capital: "Brasília",
    population: 213993437,
    flag: "https://flagcdn.com/br.svg",
    isLiked: false,
    isBasket: false
    },
    {
        id: 12,
        name: "China",
        capital: "Beijing",
        population: 1444216107,
        flag: "https://flagcdn.com/cn.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 13,
        name: "Egypt",
        capital: "Cairo",
        population: 104124440,
        flag: "https://flagcdn.com/eg.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 14,
        name: "France",
        capital: "Paris",
        population: 67391582,
        flag: "https://flagcdn.com/fr.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 15,
        name: "Germany",
        capital: "Berlin",
        population: 83240525,
        flag: "https://flagcdn.com/de.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 16,
        name: "India",
        capital: "New Delhi",
        population: 1393409038,
        flag: "https://flagcdn.com/in.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 17,
        name: "Indonesia",
        capital: "Jakarta",
        population: 276361783,
        flag: "https://flagcdn.com/id.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 18,
        name: "Iran",
        capital: "Tehran",
        population: 85028760,
        flag: "https://flagcdn.com/ir.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 19,
        name: "Italy",
        capital: "Rome",
        population: 60367477,
        flag: "https://flagcdn.com/it.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 20,
        name: "Japan",
        capital: "Tokyo",
        population: 125960000,
        flag: "https://flagcdn.com/jp.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 21,
        name: "Kazakhstan",
        capital: "Astana",
        population: 19091949,
        flag: "https://flagcdn.com/kz.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 22,
        name: "Mexico",
        capital: "Mexico City",
        population: 126014024,
        flag: "https://flagcdn.com/mx.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 23,
        name: "Netherlands",
        capital: "Amsterdam",
        population: 17441139,
        flag: "https://flagcdn.com/nl.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 24,
        name: "Nigeria",
        capital: "Abuja",
        population: 206139587,
        flag: "https://flagcdn.com/ng.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 25,
        name: "Norway",
        capital: "Oslo",
        population: 5421241,
        flag: "https://flagcdn.com/no.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 26,
        name: "Pakistan",
        capital: "Islamabad",
        population: 225199937,
        flag: "https://flagcdn.com/pk.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 27,
        name: "Russia",
        capital: "Moscow",
        population: 146171015,
        flag: "https://flagcdn.com/ru.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 28,
        name: "Saudi Arabia",
        capital: "Riyadh",
        population: 35340680,
        flag: "https://flagcdn.com/sa.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 29,
        name: "South Korea",
        capital: "Seoul",
        population: 51269185,
        flag: "https://flagcdn.com/kr.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 30,
        name: "United States",
        capital: "Washington, D.C.",
        population: 331893745,
        flag: "https://flagcdn.com/us.svg",
        isLiked: false,
        isBasket: false
    },
     {
        id: 31,
        name: "Argentina",
        capital: "Buenos Aires",
        population: 45195774,
        flag: "https://flagcdn.com/ar.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 32,
        name: "Bangladesh",
        capital: "Dhaka",
        population: 164689383,
        flag: "https://flagcdn.com/bd.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 33,
        name: "Belgium",
        capital: "Brussels",
        population: 11555997,
        flag: "https://flagcdn.com/be.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 34,
        name: "Chile",
        capital: "Santiago",
        population: 19116209,
        flag: "https://flagcdn.com/cl.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 35,
        name: "Colombia",
        capital: "Bogotá",
        population: 50882884,
        flag: "https://flagcdn.com/co.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 36,
        name: "Czech Republic",
        capital: "Prague",
        population: 10708981,
        flag: "https://flagcdn.com/cz.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 37,
        name: "Denmark",
        capital: "Copenhagen",
        population: 5831404,
        flag: "https://flagcdn.com/dk.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 38,
        name: "Finland",
        capital: "Helsinki",
        population: 5536146,
        flag: "https://flagcdn.com/fi.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 39,
        name: "Greece",
        capital: "Athens",
        population: 10724599,
        flag: "https://flagcdn.com/gr.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 40,
        name: "Hungary",
        capital: "Budapest",
        population: 9660351,
        flag: "https://flagcdn.com/hu.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 41,
        name: "Iraq",
        capital: "Baghdad",
        population: 40222503,
        flag: "https://flagcdn.com/iq.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 42,
        name: "Ireland",
        capital: "Dublin",
        population: 4994724,
        flag: "https://flagcdn.com/ie.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 43,
        name: "Israel",
        capital: "Jerusalem",
        population: 9216900,
        flag: "https://flagcdn.com/il.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 44,
        name: "Jordan",
        capital: "Amman",
        population: 10203140,
        flag: "https://flagcdn.com/jo.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 45,
        name: "Kenya",
        capital: "Nairobi",
        population: 53771296,
        flag: "https://flagcdn.com/ke.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 46,
        name: "Lebanon",
        capital: "Beirut",
        population: 6825445,
        flag: "https://flagcdn.com/lb.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 47,
        name: "Malaysia",
        capital: "Kuala Lumpur",
        population: 32365999,
        flag: "https://flagcdn.com/my.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 48,
        name: "Morocco",
        capital: "Rabat",
        population: 36910558,
        flag: "https://flagcdn.com/ma.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 49,
        name: "New Zealand",
        capital: "Wellington",
        population: 5084300,
        flag: "https://flagcdn.com/nz.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 50,
        name: "Peru",
        capital: "Lima",
        population: 32971846,
        flag: "https://flagcdn.com/pe.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 51,
        name: "Philippines",
        capital: "Manila",
        population: 113531445,
        flag: "https://flagcdn.com/ph.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 52,
        name: "Poland",
        capital: "Warsaw",
        population: 37846611,
        flag: "https://flagcdn.com/pl.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 53,
        name: "Portugal",
        capital: "Lisbon",
        population: 10276617,
        flag: "https://flagcdn.com/pt.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 54,
        name: "South Africa",
        capital: "Pretoria",
        population: 59308690,
        flag: "https://flagcdn.com/za.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 55,
        name: "Spain",
        capital: "Madrid",
        population: 46754778,
        flag: "https://flagcdn.com/es.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 56,
        name: "Sweden",
        capital: "Stockholm",
        population: 10353442,
        flag: "https://flagcdn.com/se.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 57,
        name: "Switzerland",
        capital: "Bern",
        population: 8654622,
        flag: "https://flagcdn.com/ch.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 58,
        name: "Thailand",
        capital: "Bangkok",
        population: 69950850,
        flag: "https://flagcdn.com/th.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 59,
        name: "Turkey",
        capital: "Ankara",
        population: 84339067,
        flag: "https://flagcdn.com/tr.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 60,
        name: "Uzbekistan",
        capital: "Tashkent",
        population: 34501505,
        flag: "https://flagcdn.com/uz.svg",
        isLiked: false,
        isBasket: false
    },
     {
        id: 61,
        name: "Afghanistan",
        capital: "Kabul",
        population: 38928346,
        flag: "https://flagcdn.com/af.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 62,
        name: "Albania",
        capital: "Tirana",
        population: 2877797,
        flag: "https://flagcdn.com/al.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 63,
        name: "Algeria",
        capital: "Algiers",
        population: 43053054,
        flag: "https://flagcdn.com/dz.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 64,
        name: "Andorra",
        capital: "Andorra la Vella",
        population: 77265,
        flag: "https://flagcdn.com/ad.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 65,
        name: "Angola",
        capital: "Luanda",
        population: 31825295,
        flag: "https://flagcdn.com/ao.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 66,
        name: "Armenia",
        capital: "Yerevan",
        population: 2963243,
        flag: "https://flagcdn.com/am.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 67,
        name: "Austria",
        capital: "Vienna",
        population: 9006398,
        flag: "https://flagcdn.com/at.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 68,
        name: "Azerbaijan",
        capital: "Baku",
        population: 10139177,
        flag: "https://flagcdn.com/az.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 69,
        name: "Bahamas",
        capital: "Nassau",
        population: 393244,
        flag: "https://flagcdn.com/bs.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 70,
        name: "Bahrain",
        capital: "Manama",
        population: 1701575,
        flag: "https://flagcdn.com/bh.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 71,
        name: "Barbados",
        capital: "Bridgetown",
        population: 287375,
        flag: "https://flagcdn.com/bb.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 72,
        name: "Belize",
        capital: "Belmopan",
        population: 397621,
        flag: "https://flagcdn.com/bz.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 73,
        name: "Benin",
        capital: "Porto-Novo",
        population: 12123200,
        flag: "https://flagcdn.com/bj.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 74,
        name: "Bhutan",
        capital: "Thimphu",
        population: 771608,
        flag: "https://flagcdn.com/bt.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 75,
        name: "Bolivia",
        capital: "Sucre",
        population: 11673029,
        flag: "https://flagcdn.com/bo.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 76,
        name: "Bosnia and Herzegovina",
        capital: "Sarajevo",
        population: 3280819,
        flag: "https://flagcdn.com/ba.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 77,
        name: "Botswana",
        capital: "Gaborone",
        population: 2351627,
        flag: "https://flagcdn.com/bw.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 78,
        name: "Brunei",
        capital: "Bandar Seri Begawan",
        population: 437479,
        flag: "https://flagcdn.com/bn.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 79,
        name: "Bulgaria",
        capital: "Sofia",
        population: 6948445,
        flag: "https://flagcdn.com/bg.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 80,
        name: "Burkina Faso",
        capital: "Ouagadougou",
        population: 20903273,
        flag: "https://flagcdn.com/bf.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 81,
        name: "Burundi",
        capital: "Gitega",
        population: 11890784,
        flag: "https://flagcdn.com/bi.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 82,
        name: "Cambodia",
        capital: "Phnom Penh",
        population: 16718965,
        flag: "https://flagcdn.com/kh.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 83,
        name: "Cameroon",
        capital: "Yaoundé",
        population: 26545863,
        flag: "https://flagcdn.com/cm.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 84,
        name: "Cape Verde",
        capital: "Praia",
        population: 555987,
        flag: "https://flagcdn.com/cv.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 85,
        name: "Central African Republic",
        capital: "Bangui",
        population: 4829767,
        flag: "https://flagcdn.com/cf.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 86,
        name: "Chad",
        capital: "N'Djamena",
        population: 16425864,
        flag: "https://flagcdn.com/td.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 87,
        name: "Costa Rica",
        capital: "San José",
        population: 5094118,
        flag: "https://flagcdn.com/cr.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 88,
        name: "Croatia",
        capital: "Zagreb",
        population: 4105267,
        flag: "https://flagcdn.com/hr.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 89,
        name: "Cuba",
        capital: "Havana",
        population: 11326616,
        flag: "https://flagcdn.com/cu.svg",
        isLiked: false,
        isBasket: false
    },
    {
        id: 90,
        name: "Cyprus",
        capital: "Nicosia",
        population: 1207359,
        flag: "https://flagcdn.com/cy.svg",
        isLiked: false,
        isBasket: false
    }


]