const data = {
    "ሰዎች": 14460,
    "ኢትዮጵያ": 12738,
    "ከተማ": 11262,
    "ክልል": 10712,
    "አቶ": 9604,
    "ቤት": 9428,
    "ትምህርት": 7764,
    "አበባ": 7697,
    "ሲሆን": 7288,
    "መንግስት": 7105,
    "ስራ": 7040,
    "ከፍተኛ": 6955,
    "ዛሬ": 6849,
    "ተማሪዎች": 6471,
    "መሆኑን": 6394,
    "ቀን": 6354,
    "ፖሊስ": 5994,
    "ሰዓት": 5473,
    "እንዲሁም": 5137,
    "መረጃ": 5129,
    "ሰላም": 4970,
    "ብር": 4969,
    "ተለያዩ": 4647,
    "አገልግሎት": 4299,
    "ቁጥር": 4265,
    "ቫይረስ": 4251,
    "ዩኒቨርሲቲ": 4221,
    "ደግሞ": 4185,
    "ሚኒስትር": 4183,
    "ዞን": 4149,
    "ሀገር": 4141,
    "ጠቅላይ": 4034,
    "ጤና": 3957,
    "ምርመራ": 3867,
    "ኮሮና": 3826,
    "ዓመት": 3772,
    "ህዝብ": 3710,
    "ሚኒስቴር": 3638,
    "ችግር": 3615,
    "አባላት": 3565,
    "ሚል": 3561,
    "ትግራይ": 3401,
    "ምክር": 3385,
    "ሺህ": 3355,
    "ሲሉ": 3280,
    "ምርጫ": 3264,
    "አስተዳደር": 3259,
    "መሆኑ": 3247,
    "ድጋፍ": 3238,
    "ቫይረሱ": 3218,
    "ጉዳት": 3214,
    "መግለጫ": 3208,
    "አካላት": 3151,
    "ቁጥጥር": 3128,
    "ወረዳ": 3105,
    "ክልሉ": 3090,
    "ደረጃ": 3050,
    "አካባቢ": 2998,
    "ልዩ": 2976,
    "ዓለም": 2940,
    "ዶክተር": 2934,
    "ፀጥታ": 2803,
    "መሰረት": 2740,
    "አቀፍ": 2726,
    "ዚህ": 2723,
    "ኩል": 2681,
    "ሥራ": 2667,
    "ድረስ": 2654,
    "መንግሥት": 2632,
    "ውይይት": 2624,
    "አፍሪካ": 2614,
    "ተቋማት": 2608,
    "ክፍል": 2599,
    "ዕለት": 2576,
    "ቢሮ": 2556,
    "ህይወት": 2549,
    "አካል": 2538,
    "ምክትል": 2532,
    "ሆነው": 2531,
    "ቤቱ": 2530,
    "አደጋ": 2518,
    "አማራ": 2491,
    "ፈተና": 2466,
    "ቤቶች": 2462,
    "እንደሆነ": 2456,
    "ፍርድ": 2454,
    "ጉዳዮች": 2446,
    "አሜሪካ": 2438,
    "አጠቃላይ": 2415,
    "ጥቃት": 2402,
    "ይፋ": 2397,
    "ግጭት": 2393,
    "ያሉ": 2372,
    "ቀናት": 2368,
    "ጨምሮ": 2360,
    "ጥሪ": 2333,
    "አየር": 2329,
    "ህግ": 2325,
    "ወር": 2313,
    "ህክምና": 2306,
    "መከላከያ": 2297,
    "ሚሊዮን": 2294,
    "ሚገኙ": 2283,
    "ዜጎች": 2273,
    "ምንም": 2237,
    "ተብሎ": 2164,
    "ኃይል": 2155,
    "ርካታ": 2137,
    "ኦሮሚያ": 2105,
    "ደቡብ": 2098,
    "አህመድ": 2088,
    "ውሳኔ": 2079,
    "ወንጀል": 2033,
    "ገንዘብ": 2002,
    "ዋጋ": 1990,
    "ጥያቄ": 1979,
    "አካባቢዎች": 1973,
    "ድርጅት": 1957,
    "ተከትሎ": 1943,
    "ኮሚሽን": 1931,
    "ሀገሪቱ": 1917,
    "ማህበራዊ": 1898,
    "ነዋሪዎች": 1895,
    "መቶ": 1863,
    "እስካሁን": 1857,
    "ያለውን": 1856,
    "ባለፉት": 1844,
    "ጦር": 1842,
    "መያዛቸው": 1824,
    "ያሉት": 1822,
    "ቃል": 1814,
    "ቡድን": 1809,
    "ለማድረግ": 1805,
    "አካባቢው": 1788,
    "ሪፖርት": 1787,
    "ይህን": 1783,
    "ዛሬው": 1782,
    "ግንኙነት": 1775,
    "አስቸኳይ": 1755,
    "ባንክ": 1752,
    "ሱዳን": 1740,
    "አብይ": 1734,
    "ፖለቲካ": 1703,
    "ውጤት": 1683,
    "ዝግጅት": 1673,
    "ንግድ": 1665,
    "ብሔራዊ": 1654,
    "ልማት": 1648,
    "ጥረት": 1634,
    "ምግብ": 1630,
    "ኃላፊ": 1629,
    "ሀገራት": 1617,
    "እርምጃ": 1610,
    "ፓርቲ": 1594,
    "ወጣቶች": 1594,
    "ደህንነት": 1581,
    "መልዕክት": 1572,
    "ግለሰቦች": 1556,
    "ሰላማዊ": 1551,
    "ላብራቶሪ": 1551,
    "ተያዙ": 1546,
    "እንቅስቃሴ": 1525,
    "ምላሽ": 1517,
    "ተመለከተ": 1498,
    "ኮሚቴ": 1497,
    "ቀደም": 1492,
    "ጦርነት": 1492,
    "ሆስፒታል": 1490,
    "ድምፅ": 1476,
    "ፕሬዝዳንት": 1447,
    "ዓል": 1439,
    "አመት": 1434,
    "ሚዲያ": 1415,
    "አመራሮች": 1413,
    "ተያያዘ": 1401,
    "ሰብዓዊ": 1395,
    "ከተሞች": 1365,
    "ሆኖ": 1363,
    "ብሄራዊ": 1358,
    "ሚገኘው": 1354,
    "ሳምንት": 1351,
    "ስልክ": 1348,
    "መብት": 1327,
    "ዐቢይ": 1321,
    "ሰጡት": 1312,
    "መስጠት": 1309,
    "ቲክቫህ": 1300,
    "ንብረት": 1294,
    "ሂደት": 1285,
    "ቤተሰብ": 1279,
    "መልኩ": 1274,
    "ፌደራል": 1267,
    "ብሎ": 1264,
    "አገር": 1263,
    "ሆኑ": 1254,
    "አደባባይ": 1247,
    "ባለው": 1242,
    "ጉባኤ": 1242,
    "ግንባታ": 1238,
    "ጸጥታ": 1234,
    "ከባድ": 1234,
    "ኃይሎች": 1233,
    "ጣም": 1232,
    "አባል": 1231,
    "ቦርድ": 1229,
    "እርዳታ": 1208,
    "ነዳጅ": 1207,
    "ሞት": 1204,
    "ጉዞ": 1197,
    "ከተማው": 1197,
    "ስብሰባ": 1196,
    "መኪና": 1195,
    "ትራንስፖርት": 1195,
    "ስጋት": 1192,
    "ሕዝብ": 1188,
    "ሚኒስትሩ": 1181,
    "ጎንደር": 1180,
    "ተግባር": 1175,
    "ያላቸው": 1160,
    "ስምምነት": 1158,
    "ትኩረት": 1155,
    "ኤርትራ": 1138,
    "መደበኛ": 1137,
    "ጥንቃቄ": 1137,
    "ዳይሬክተር": 1134,
    "ውሃ": 1115,
    "ክልሎች": 1114,
    "መልካም": 1113,
    "ሰልፍ": 1107,
    "ፌዴራል": 1103,
    "ዝርዝር": 1097,
    "ዓመታት": 1097,
    "መፍትሄ": 1095,
    "ክስ": 1090,
    "ወራት": 1088,
    "ሶስት": 1087,
    "ዘመን": 1084,
    "ተማሪ": 1080,
    "ተወካዮች": 1079,
    "ተማሪዎችን": 1074,
    "መረጃዎች": 1074,
    "ሳይሆን": 1071,
    "ሰዎችን": 1070,
    "መኖሪያ": 1070,
    "ህይወታቸው": 1068,
    "ግል": 1064,
    "ግለሰብ": 1062,
    "ስም": 1061,
    "ህብረት": 1061,
    "ምሽት": 1060,
    "ጣቢያ": 1059,
    "ሴቶች": 1056,
    "ሀገራችን": 1044,
    "መቐለ": 1043,
    "አምባሳደር": 1041,
    "ከተማዋ": 1033,
    "መስቀል": 1027,
    "አራት": 1023,
    "እሳት": 1023,
    "ዩኒቨርሲቲው": 1023,
    "ሰሜን": 1015,
    "ሀዋሳ": 1015,
    "ሰራተኞች": 1015,
    "ሰራዊት": 1013,
    "ነፃ": 1007,
    "ቤተ": 1006,
    "ሕግ": 1004,
    "ተለይ": 1001,
    "ኦሮሞ": 997,
    "አንዱ": 996,
    "ንግግር": 993,
    "ፕሮግራም": 989,
    "መሆናቸውን": 984,
    "ኢትዮጵያን": 983,
    "ዙር": 976,
    "ውጪ": 976,
    "ከበሽታው": 975,
    "ቀበሌ": 973,
    "ሁለቱ": 972,
    "ምዕራብ": 972,
    "ማህበረሰብ": 971,
    "ቀጣይ": 970,
    "ሆኑት": 963,
    "ተደረገ": 952,
    "ክትትል": 949,
    "ተደረገው": 948,
    "አዋጅ": 947,
    "ቅርቡ": 946,
    "እየተካሄደ": 944,
    "ሜትር": 942,
    "ዘርፍ": 940,
    "እየተደረገ": 939,
    "ህወሓት": 936,
    "ታሪክ": 934,
    "ኢትዮጵያውያን": 934,
    "አለም": 926,
    "ነጥብ": 920,
    "መገናኛ": 920,
    "ቀድሞ": 918,
    "ክፍለ": 914
}