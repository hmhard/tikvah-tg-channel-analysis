const pair_data = {
    "አዲስ-አበባ": 5351,
    "ኮሮና-ቫይረስ": 3431,
    "ምክር-ቤት": 2375,
    "ቁጥጥር-ስር": 2154,
    "አበባ-ከተማ": 1785,
    "ጠቅላይ-ሚኒስትር": 1738,
    "ፍርድ-ቤት": 1605,
    "አማራ-ክልል": 1442,
    "ላብራቶሪ-ምርመራ": 1396,
    "ትግራይ-ክልል": 1371,
    "ውጭ-ጉዳይ": 1289,
    "ጋር-በተያያዘ": 1259,
    "ከተማ-አስተዳደር": 1258,
    "ሰዎች-ቁጥር": 1113,
    "ዓለም-አቀፍ": 1095,
    "ከፍተኛ-ትምህርት": 1070,
    "ነገር-ግን": 1014,
    "ዛሬው-ዕለት": 955,
    "አብይ-አህመድ": 954,
    "ኦሮሚያ-ክልል": 906,
    "ሰዎች-ህይወት": 882,
    "ፖሊስ-ኮሚሽን": 863,
    "ሙሉ-በሙሉ": 837,
    "ሰዎች-በኮሮና": 830,
    "አየር-መንገድ": 813,
    "ሚኒስትር-ዶክተር": 806,
    "ተያዙ-ሰዎች": 802,
    "ሚሊዮን-ብር": 782,
    "ትምህርት-ሚኒስቴር": 764,
    "ሰዎች-በቫይረሱ": 761,
    "ዶክተር-አብይ": 751,
    "ቫይረሱ-የተያዙ": 740,
    "ቫይረስ-መያዛቸው": 740,
    "ምንም-አይነት": 719,
    "ምርጫ-ቦርድ": 715,
    "ከዚህ-ቀደም": 679,
    "ትምህርት-ተቋማት": 671,
    "ሰዓት-ውስጥ": 648,
    "ትምህርት-ቤቶች": 643,
    "መከላከያ-ሰራዊት": 617,
    "አሁን-ላይ": 616,
    "ምክር-ቤቱ": 614,
    "ውጭ-ሀገር": 612,
    "እና-ሌሎች": 604,
    "ሟቾች-ቁጥር": 602,
    "ቫይረሱ-መያዛቸው": 600,
    "አበባ-ፖሊስ": 598,
    "ከአዲስ-አበባ": 597,
    "ተወካዮች-ምክር": 589,
    "ላይ-ጉዳት": 578,
    "ብር-በላይ": 574,
    "ክፍለ-ከተማ": 569,
    "ኃላፊ-አቶ": 556,
    "ሺህ-ብር": 555,
    "ዐቢይ-አህመድ": 552,
    "ሰዎች-ላይ": 540,
    "ጤና-ሚኒስቴር": 540,
    "ጉዳይ-ሚኒስቴር": 535,
    "ማህበራዊ-ሚዲያ": 533,
    "ቤተሰብ-አባላት": 531,
    "ጋር-በመሆን": 528,
    "ጉዳዮች-ላይ": 528,
    "ኢትዮጵያ-አየር": 527,
    "ጽህፈት-ቤት": 525,
    "ሰው-ህይወት": 522,
    "ትምህርት-ቤት": 520,
    "ጋር-ተያይዞ": 514,
    "ጉዳይ-ሚኒስትር": 503,
    "ሀገር-አቀፍ": 499,
    "ሺህ-በላይ": 499,
    "አስቸኳይ-ጊዜ": 499,
    "አካላት-ጋር": 496,
    "ኤፍ-ኤም": 489,
    "ደቡብ-ክልል": 478,
    "ዋና-ዳይሬክተር": 474,
    "ባህር-ዳር": 473,
    "መስቀል-አደባባይ": 464,
    "ጠቅላይ-ሚኒስትሩ": 464,
    "ወደ-አዲስ": 463,
    "ከተማ-አስተዳደሩ": 447,
    "ፀጥታ-ችግር": 432,
    "ከበሽታው-ያገገሙ": 431,
    "ለይቶ-ማቆያ": 428,
    "ህዳሴ-ግድብ": 425,
    "ወደ-ኢትዮጵያ": 424,
    "አፍሪካ-ህብረት": 424,
    "ጉዞ-ታሪክ": 422,
    "ህገ-ወጥ": 419,
    "ባወጣው-መግለጫ": 418,
    "ፍርድ-ቤቱ": 418,
    "ሰብዓዊ-መብት": 416,
    "ዩኒቨርሲቲ-ተማሪዎች": 416,
    "ቁጥጥር-ሥር": 415,
    "ጋር-በመተባበር": 413,
    "ጋር-ውይይት": 407,
    "አሁኑ-ወቅት": 404,
    "ምርመራ-ተደርጎ": 400,
    "አቀፍ-ደረጃ": 399,
    "ሀገር-ውስጥ": 395,
    "ሀዋሳ-ከተማ": 395,
    "ከፍተኛ-ፍርድ": 393,
    "ቤተ-ክርስቲያን": 391,
    "ብቻ-ሳይሆን": 390,
    "እሳት-አደጋ": 387,
    "ከዚህ-በፊት": 386,
    "ፌደራል-ፖሊስ": 386,
    "ኢትዮጵያ-መንግስት": 384,
    "ርዕሰ-መስተዳድር": 383,
    "አፋር-ክልል": 381,
    "ጉሙዝ-ክልል": 380,
    "ደቡብ-አፍሪካ": 379,
    "ቲክቫህ-ኢትዮጵያ": 378,
    "ክልል-ባለፉት": 378,
    "ቤት-ውስጥ": 373,
    "ስራ-ላይ": 372,
    "ሰው-ጋር": 370,
    "ሶማሌ-ክልል": 367,
    "ስራ-አስፈፃሚ": 366,
    "ትምህርት-ቢሮ": 359,
    "ቃል-አቀባይ": 357,
    "ዋና-ስራ": 356,
    "ዛሬው-እለት": 355,
    "አለም-አቀፍ": 354,
    "አንድ-ሰው": 353,
    "ሚወስደው-መንገድ": 351,
    "ዐቢይ-አሕመድ": 351,
    "ሁኔታ-ላይ": 348,
    "ጊዜ-ውስጥ": 346,
    "ጤና-ድርጅት": 346,
    "ከተያዘ-ሰው": 345,
    "ትላንትናው-ዕለት": 344,
    "ነው-ሲሉ": 343,
    "ዳይሬክተር-አቶ": 341,
    "ታከለ-ኡማ": 341,
    "ጦር-መሳሪያ": 336,
    "ተገኘው-መረጃ": 335,
    "አካል-ጉዳት": 334,
    "መማር-ማስተማር": 332,
    "ህዝብ-ተወካዮች": 330,
    "ሰላም-እና": 329,
    "ቢሮ-ኃላፊ": 325,
    "እግር-ኳስ": 325,
    "ምክትል-ከንቲባ": 325,
    "ንግድ-ባንክ": 325,
    "ላይ-ሰዎች": 324,
    "ተለያዩ-አካባቢዎች": 324,
    "ቢሊዮን-ብር": 323,
    "ሀገር-መከላከያ": 322,
    "ትምህርት-ዘመን": 320,
    "ሰጡት-መግለጫ": 320,
    "ጊዜ-አዋጅ": 318,
    "ህዝብ-ግንኙነት": 317,
    "ኢትዮጵያ-ውስጥ": 316,
    "ላይ-ከፍተኛ": 316,
    "አንድ-ቀን": 313,
    "አሁን-ሰዓት": 313,
    "መገናኛ-ብዙሃን": 311,
    "ሰጡት-ቃል": 310,
    "ሰዓት-ጀምሮ": 305,
    "ቅዱስ-ሲኖዶስ": 304,
    "ያገገሙ-ሰዎች": 303,
    "ኪሎ-ሜትር": 302,
    "ፀጥታ-አካላት": 302,
    "ሚሊየን-ብር": 299,
    "መያዛቸው-ሲረጋገጥ": 299,
    "ወደ-ሀገር": 298,
    "ስነ-ስርዓት": 297,
    "መኖሪያ-ቤት": 297,
    "ወደ-መስቀል": 296,
    "አቃቤ-ህግ": 295,
    "ባሕር-ዳር": 292,
    "ሆኑት-አቶ": 290,
    "ሀገር-የጉዞ": 290,
    "ከዛሬ-ጀምሮ": 289,
    "መርሃ-ግብር": 287,
    "ጋር-ግንኙነት": 287,
    "ምን-ያህል": 286,
    "ጉዳይ-ላይ": 286,
    "ፖለቲካ-ፓርቲዎች": 286,
    "ወደ-ስራ": 285,
    "ፀጥታ-ኃይሎች": 285,
    "ብሔራዊ-ምርጫ": 285,
    "ያሉ-ሲሆን": 284,
    "ማረሚያ-ቤት": 284,
    "ፌዴራል-ፖሊስ": 283,
    "ቤኒሻንጉል-ጉሙዝ": 283,
    "ፅህፈት-ቤት": 280,
    "ጤና-ቢሮ": 280,
    "ሰዎች-ከበሽታው": 280,
    "ኢትዮ-ቴሌኮም": 278,
    "ህይወታቸው-ያለፈ": 278,
    "ሌላ-በኩል": 275,
    "አጠቃላይ-በቫይረሱ": 275,
    "ጋዜጣዊ-መግለጫ": 273,
    "መጀመሪያ-ደረጃ": 273,
    "ደረጃ-ላይ": 273,
    "ሰላማዊ-ሰልፍ": 272,
    "ጠቅላይ-አቃቤ": 272,
    "ክልላዊ-መንግስት": 271,
    "ሰዎች-ደግሞ": 270,
    "ቅድመ-ዝግጅት": 268,
    "ክልል-መንግስት": 267,
    "ፖሊስ-መምሪያ": 267,
    "ሸዋ-ዞን": 267,
    "ላይ-ነው": 267,
    "ልዩ-ኃይል": 267,
    "ከፍተኛ-አመራሮች": 264,
    "ሰላማዊ-መንገድ": 263,
    "ዕጣ-ቁጥር": 261,
    "እጅግ-በጣም": 260,
    "ሚል-መሪ": 259,
    "ቀይ-መስቀል": 255,
    "ምዘናና-ፈተናዎች": 254,
    "ንብረት-ላይ": 253,
    "ለመጀመሪያ-ጊዜ": 252,
    "ጎንደር-ዞን": 252,
    "መኖሪያ-ቤቶች": 252,
    "ሰዎች-በፅኑ": 252,
    "ትራፊክ-አደጋ": 251,
    "ትራንስፖርት-አገልግሎት": 251,
    "ያገኘነው-መረጃ": 250,
    "መንግስት-እና": 250,
    "መከላከያ-ሠራዊት": 250,
    "ጋራ-መኖሪያ": 248,
    "ወደ-ትግራይ": 248,
    "ፖሊስ-አባላት": 247,
    "ዳር-ከተማ": 247,
    "ወንጀል-ችሎት": 247,
    "በሽታው-ከተያዘ": 245,
    "ክልሉ-መንግስት": 244,
    "ኤሌክትሪክ-ኃይል": 244,
    "ሚመለከተው-አካል": 243,
    "ልዩ-ልዩ": 242,
    "መንገድ-ላይ": 241,
    "ኢትዮጵያ-እና": 240,
    "መንግስታት-ድርጅት": 240,
    "ጎንደር-ከተማ": 240,
    "ምክትል-ርዕሰ": 240,
    "ሚኒስትር-አቶ": 240,
    "አቶ-ጌታቸው": 239,
    "ጠቅላይ-ሚንስትር": 238,
    "አቶ-ጃዋር": 238,
    "እንኳን-ደስ": 237,
    "ምክንያት-በማድረግ": 236,
    "አበባ-ዩኒቨርሲቲ": 235,
    "ሙሉ-ለሙሉ": 235,
    "መስተዳድር-አቶ": 235,
    "ሰዓት-ላይ": 233,
    "ነው-ያሉት": 233,
    "ትምህርት-ምዘናና": 232
}