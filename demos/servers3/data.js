data = [{"t":0,"command":"create goroutine","name":"main"},
{"t":604854,"command":"create goroutine","name":"pool #5","parent":"main"},
{"t":780473,"command":"create goroutine","name":"parse #12","parent":"pool #5"},
{"t":839089,"command":"create goroutine","name":"server #6","parent":"main"},
{"t":945319,"command":"create goroutine","name":"worker #9","parent":"pool #5"},
{"t":950299,"command":"create goroutine","name":"worker #10","parent":"pool #5"},
{"t":996863,"command":"create goroutine","name":"worker #11","parent":"pool #5"},
{"t":1048868,"command":"create goroutine","name":"worker #8","parent":"pool #5"},
{"t":12786709,"command":"create goroutine","name":"handler #13","parent":"server #6"},
{"t":12873928,"command":"send to channel","from":"handler #13","to":"pool #5","ch":"ch","value":"[::1]:52445","duration":47650},
{"t":12947490,"command":"send to channel","from":"pool #5","to":"worker #10","ch":"wch","value":11,"duration":39003},
{"t":13010390,"command":"send to channel","from":"worker #10","to":"parse #12","ch":"results","value":12,"duration":14669},
{"t":117263481,"command":"stop goroutine","name":"handler #13"},
{"t":135438149,"command":"create goroutine","name":"handler #14","parent":"server #6"},
{"t":135495332,"command":"send to channel","from":"handler #14","to":"pool #5","ch":"ch","value":"[::1]:52446","duration":37700},
{"t":135560583,"command":"send to channel","from":"pool #5","to":"worker #11","ch":"wch","value":11,"duration":32320},
{"t":135619252,"command":"send to channel","from":"worker #11","to":"parse #12","ch":"results","value":12,"duration":18618},
{"t":235666168,"command":"stop goroutine","name":"handler #14"},
{"t":254324910,"command":"create goroutine","name":"handler #18","parent":"server #6"},
{"t":254406808,"command":"send to channel","from":"handler #18","to":"pool #5","ch":"ch","value":"[::1]:52447","duration":49695},
{"t":254483724,"command":"send to channel","from":"pool #5","to":"worker #8","ch":"wch","value":11,"duration":28069},
{"t":254533362,"command":"send to channel","from":"worker #8","to":"parse #12","ch":"results","value":12,"duration":17607},
{"t":354848478,"command":"stop goroutine","name":"handler #18"},
{"t":374674924,"command":"create goroutine","name":"handler #19","parent":"server #6"},
{"t":374726744,"command":"send to channel","from":"handler #19","to":"pool #5","ch":"ch","value":"[::1]:52448","duration":34978},
{"t":374794473,"command":"send to channel","from":"pool #5","to":"worker #9","ch":"wch","value":11,"duration":70676},
{"t":374947430,"command":"send to channel","from":"worker #9","to":"parse #12","ch":"results","value":12,"duration":23218},
{"t":479375160,"command":"stop goroutine","name":"handler #19"},
{"t":495019413,"command":"create goroutine","name":"handler #15","parent":"server #6"},
{"t":495080728,"command":"send to channel","from":"handler #15","to":"pool #5","ch":"ch","value":"[::1]:52449","duration":42022},
{"t":495150660,"command":"send to channel","from":"pool #5","to":"worker #10","ch":"wch","value":11,"duration":34834},
{"t":495211954,"command":"send to channel","from":"worker #10","to":"parse #12","ch":"results","value":12,"duration":20917},
{"t":599513719,"command":"stop goroutine","name":"handler #15"},
{"t":614658178,"command":"create goroutine","name":"handler #16","parent":"server #6"},
{"t":614709038,"command":"send to channel","from":"handler #16","to":"pool #5","ch":"ch","value":"[::1]:52450","duration":42021},
{"t":614777054,"command":"send to channel","from":"pool #5","to":"worker #11","ch":"wch","value":11,"duration":30459},
{"t":614829881,"command":"send to channel","from":"worker #11","to":"parse #12","ch":"results","value":12,"duration":16019},
{"t":716233246,"command":"stop goroutine","name":"handler #16"},
{"t":732162833,"command":"create goroutine","name":"handler #20","parent":"server #6"},
{"t":732221439,"command":"send to channel","from":"handler #20","to":"pool #5","ch":"ch","value":"[::1]:52451","duration":38362},
{"t":732287618,"command":"send to channel","from":"pool #5","to":"worker #8","ch":"wch","value":11,"duration":34640},
{"t":732348123,"command":"send to channel","from":"worker #8","to":"parse #12","ch":"results","value":12,"duration":19090},
{"t":833360304,"command":"stop goroutine","name":"handler #20"},
{"t":851584693,"command":"create goroutine","name":"handler #21","parent":"server #6"},
{"t":851640810,"command":"send to channel","from":"handler #21","to":"pool #5","ch":"ch","value":"[::1]:52452","duration":40318},
{"t":851711400,"command":"send to channel","from":"pool #5","to":"worker #9","ch":"wch","value":11,"duration":33198},
{"t":851771120,"command":"send to channel","from":"worker #9","to":"parse #12","ch":"results","value":12,"duration":18774},
{"t":955433209,"command":"stop goroutine","name":"handler #21"},
{"t":969692691,"command":"create goroutine","name":"handler #22","parent":"server #6"},
{"t":969741103,"command":"send to channel","from":"handler #22","to":"pool #5","ch":"ch","value":"[::1]:52453","duration":40367},
{"t":969808714,"command":"send to channel","from":"pool #5","to":"worker #10","ch":"wch","value":11,"duration":30579},
{"t":969862749,"command":"send to channel","from":"worker #10","to":"parse #12","ch":"results","value":12,"duration":19141},
{"t":1073399988,"command":"stop goroutine","name":"handler #22"},
{"t":1199051493,"command":"create goroutine","name":"handler #23","parent":"server #6"},
{"t":1199109248,"command":"send to channel","from":"handler #23","to":"pool #5","ch":"ch","value":"[::1]:52454","duration":40542},
{"t":1199176884,"command":"send to channel","from":"pool #5","to":"worker #11","ch":"wch","value":11,"duration":31799},
{"t":1199233094,"command":"send to channel","from":"worker #11","to":"parse #12","ch":"results","value":12,"duration":38134},
{"t":1303665924,"command":"stop goroutine","name":"handler #23"},
{"t":1322089201,"command":"create goroutine","name":"handler #34","parent":"server #6"},
{"t":1322179878,"command":"send to channel","from":"handler #34","to":"pool #5","ch":"ch","value":"[::1]:52455","duration":41593},
{"t":1322254222,"command":"send to channel","from":"pool #5","to":"worker #8","ch":"wch","value":11,"duration":38896},
{"t":1322319342,"command":"send to channel","from":"worker #8","to":"parse #12","ch":"results","value":12,"duration":19448},
{"t":1425828631,"command":"stop goroutine","name":"handler #34"},
{"t":1449790171,"command":"create goroutine","name":"handler #35","parent":"server #6"},
{"t":1449840320,"command":"send to channel","from":"handler #35","to":"pool #5","ch":"ch","value":"[::1]:52456","duration":39649},
{"t":1449926138,"command":"send to channel","from":"pool #5","to":"worker #9","ch":"wch","value":11,"duration":35606},
{"t":1449985819,"command":"send to channel","from":"worker #9","to":"parse #12","ch":"results","value":12,"duration":18890},
{"t":1552896431,"command":"stop goroutine","name":"handler #35"},
{"t":1568258434,"command":"create goroutine","name":"handler #36","parent":"server #6"},
{"t":1568319914,"command":"send to channel","from":"handler #36","to":"pool #5","ch":"ch","value":"[::1]:52457","duration":42807},
{"t":1568393211,"command":"send to channel","from":"pool #5","to":"worker #10","ch":"wch","value":11,"duration":34641},
{"t":1568456068,"command":"send to channel","from":"worker #10","to":"parse #12","ch":"results","value":12,"duration":20296},
{"t":1673444164,"command":"stop goroutine","name":"handler #36"},
{"t":1692880929,"command":"create goroutine","name":"handler #37","parent":"server #6"},
{"t":1693004114,"command":"send to channel","from":"handler #37","to":"pool #5","ch":"ch","value":"[::1]:52458","duration":159428},
{"t":1693195769,"command":"send to channel","from":"pool #5","to":"worker #11","ch":"wch","value":11,"duration":30579},
{"t":1693266859,"command":"send to channel","from":"worker #11","to":"parse #12","ch":"results","value":12,"duration":25352},
{"t":1794776149,"command":"stop goroutine","name":"handler #37"},
{"t":1808922089,"command":"create goroutine","name":"handler #24","parent":"server #6"},
{"t":1808981048,"command":"send to channel","from":"handler #24","to":"pool #5","ch":"ch","value":"[::1]:52459","duration":59502},
{"t":1809067608,"command":"send to channel","from":"pool #5","to":"worker #8","ch":"wch","value":11,"duration":29706},
{"t":1809122564,"command":"send to channel","from":"worker #8","to":"parse #12","ch":"results","value":12,"duration":16398},
{"t":1913373208,"command":"stop goroutine","name":"handler #24"},
{"t":1932692884,"command":"create goroutine","name":"handler #25","parent":"server #6"},
{"t":1932740142,"command":"send to channel","from":"handler #25","to":"pool #5","ch":"ch","value":"[::1]:52460","duration":38948},
{"t":1932801770,"command":"send to channel","from":"pool #5","to":"worker #9","ch":"wch","value":11,"duration":27518},
{"t":1932856520,"command":"send to channel","from":"worker #9","to":"parse #12","ch":"results","value":12,"duration":18188},
{"t":2002569312,"command":"stop goroutine","name":"main"}];
