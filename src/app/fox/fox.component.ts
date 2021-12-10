import { Component } from "@angular/core";

@Component({

    selector: 'fox',
    templateUrl: './fox.component.html',
    styleUrls: ['./fox.component.css']
})

export class FoxComponent {

    sampleObject = {
        "webApp": {
            "servlet": [
                {
                    "servletName": "cofaxCDS",
                    "servletClass": "org.cofax.cds.CDSServlet",
                    "init-param": {
                        "configGlossary:installationAt": "Philadelphia, PA",
                        "configGlossary:adminEmail": "ksm@pobox.com",
                        "configGlossary:poweredBy": "Cofax",
                        "configGlossary:poweredByIcon": "/images/cofax.gif",
                        "configGlossary:staticPath": "/content/static",
                        "templateProcessorClass": "org.cofax.WysiwygTemplate",
                        "templateLoaderClass": "org.cofax.FilesTemplateLoader",
                        "templatePath": "templates",
                        "templateOverridePath": "",
                        "defaultListTemplate": "listTemplate.htm",
                        "defaultFileTemplate": "articleTemplate.htm",
                        "useJSP": false,
                        "jspListTemplate": "listTemplate.jsp",
                        "jspFileTemplate": "articleTemplate.jsp",
                        "cachePackageTagsTrack": 200,
                        "cachePackageTagsStore": 200,
                        "cachePackageTagsRefresh": 60,
                        "cacheTemplatesTrack": 100,
                        "cacheTemplatesStore": 50,
                        "cacheTemplatesRefresh": 15,
                        "cachePagesTrack": 200,
                        "cachePagesStore": 100,
                        "cachePagesRefresh": 10,
                        "cachePagesDirtyRead": 10,
                        "searchEngineListTemplate": "forSearchEnginesList.htm",
                        "searchEngineFileTemplate": "forSearchEngines.htm",
                        "searchEngineRobotsDb": "WEB-INF/robots.db",
                        "useDataStore": true,
                        "dataStoreClass": "org.cofax.SqlDataStore",
                        "redirectionClass": "org.cofax.SqlRedirection",
                        "dataStoreName": "cofax",
                        "dataStoreDriver": "com.microsoft.jdbc.sqlserver.SQLServerDriver",
                        "dataStoreUrl": "jdbc:microsoft:sqlserver://LOCALHOST:1433;DatabaseName=goon",
                        "dataStoreUser": "sa",
                        "dataStorePassword": "dataStoreTestQuery",
                        "dataStoreTestQuery": "SET NOCOUNT ON;select test='test';",
                        "dataStoreLogFile": "/usr/local/tomcat/logs/datastore.log",
                        "dataStoreInitConns": 10,
                        "dataStoreMaxConns": 100,
                        "dataStoreConnUsageLimit": 100,
                        "dataStoreLogLevel": "debug",
                        "maxUrlLength": 500
                    }
                },
                {
                    "servletName": "cofaxEmail",
                    "servletClass": "org.cofax.cds.EmailServlet",
                    "init-param": {
                        "mailHost": "mail1",
                        "mailHostOverride": "mail2"
                    }
                },
                {
                    "servletName": "cofaxAdmin",
                    "servletClass": "org.cofax.cds.AdminServlet"
                },
                {
                    "servletName": "fileServlet",
                    "servletClass": "org.cofax.cds.FileServlet"
                },
                {
                    "servletName": "cofaxTools",
                    "servletClass": "org.cofax.cms.CofaxToolsServlet",
                    "init-param": {
                        "templatePath": "toolstemplates/",
                        "log": 1,
                        "logLocation": "/usr/local/tomcat/logs/CofaxTools.log",
                        "logMaxSize": "",
                        "dataLog": 1,
                        "dataLogLocation": "/usr/local/tomcat/logs/dataLog.log",
                        "dataLogMaxSize": "",
                        "removePageCache": "/content/admin/remove?cache=pages&id=",
                        "removeTemplateCache": "/content/admin/remove?cache=templates&id=",
                        "fileTransferFolder": "/usr/local/tomcat/webapps/content/fileTransferFolder",
                        "lookInContext": 1,
                        "adminGroupID": 4,
                        "betaServer": true
                    }
                }
            ],
            "servlet-mapping": {
                "cofaxCDS": "/",
                "cofaxEmail": "/cofaxutil/aemail/*",
                "cofaxAdmin": "/admin/*",
                "fileServlet": "/static/*",
                "cofaxTools": "/tools/*"
            },
            "taglib": {
                "taglib-uri": "cofax.tld",
                "taglib-location": "/WEB-INF/tlds/cofax.tld"
            }
        }
    }

    sampleExample = [
        {
            "WHO": "Joe",
            "WEEK": [
                {
                    "NUMBER": 3,
                    "EXPENSE": [
                        {
                            "WHAT": "Beer",
                            "AMOUNT": 18.00
                        },
                        {
                            "WHAT": "Food",
                            "AMOUNT": 12.00
                        },
                        {
                            "WHAT": "Food",
                            "AMOUNT": 19.00
                        },
                        {
                            "WHAT": "Car",
                            "AMOUNT": 20.00
                        }
                    ]
                },
                {
                    "NUMBER": 4,
                    "EXPENSE": [
                        {
                            "WHAT": "Beer",
                            "AMOUNT": 19.00
                        },
                        {
                            "WHAT": "Beer",
                            "AMOUNT": 16.00
                        },
                        {
                            "WHAT": "Food",
                            "AMOUNT": 17.00
                        },
                        {
                            "WHAT": "Food",
                            "AMOUNT": 17.00
                        },
                        {
                            "WHAT": "Beer",
                            "AMOUNT": 14.00
                        }
                    ]
                },
                {
                    "NUMBER": 5,
                    "EXPENSE": [
                        {
                            "WHAT": "Beer",
                            "AMOUNT": 14.00
                        },
                        {
                            "WHAT": "Food",
                            "AMOUNT": 12.00
                        }
                    ]
                }
            ]
        },
        {
            "WHO": "Beth",
            "WEEK": [
                {
                    "NUMBER": 3,
                    "EXPENSE": [
                        {
                            "WHAT": "Beer",
                            "AMOUNT": 16.00
                        }
                    ]
                },
                {
                    "NUMBER": 4,
                    "EXPENSE": [
                        {
                            "WHAT": "Food",
                            "AMOUNT": 17.00
                        },
                        {
                            "WHAT": "Beer",
                            "AMOUNT": 15.00
                        }
                    ]
                },
                {
                    "NUMBER": 5,
                    "EXPENSE": [
                        {
                            "WHAT": "Food",
                            "AMOUNT": 12.00
                        },
                        {
                            "WHAT": "Beer",
                            "AMOUNT": 20.00
                        }
                    ]
                }
            ]
        },
        {
            "WHO": "Janet",
            "WEEK": [
                {
                    "NUMBER": 3,
                    "EXPENSE": [
                        {
                            "WHAT": "Car",
                            "AMOUNT": 19.00
                        },
                        {
                            "WHAT": "Food",
                            "AMOUNT": 18.00
                        },
                        {
                            "WHAT": "Beer",
                            "AMOUNT": 18.00
                        }
                    ]
                },
                {
                    "NUMBER": 4,
                    "EXPENSE": [
                        {
                            "WHAT": "Car",
                            "AMOUNT": 17.00
                        }
                    ]
                },
                {
                    "NUMBER": 5,
                    "EXPENSE": [
                        {
                            "WHAT": "Beer",
                            "AMOUNT": 14.00
                        },
                        {
                            "WHAT": "Car",
                            "AMOUNT": 12.00
                        },
                        {
                            "WHAT": "Beer",
                            "AMOUNT": 19.00
                        },
                        {
                            "WHAT": "Food",
                            "AMOUNT": 12.00
                        }
                    ]
                }
            ]
        }
    ]
 
    sampleData = { "page": 1, "results": [{ "adult": false, "backdrop_path": "/dssCw0mUmD4EriUmkwB3PnsGu4q.jpg", "genre_ids": [16, 28, 14], "id": 841755, "original_language": "en", "original_title": "Mortal Kombat Legends: Battle of the Realms", "overview": "The Earthrealm heroes must journey to the Outworld and fight for the survival of their homeland, invaded by the forces of evil warlord Shao Kahn, in the tournament to end all tournaments: the final Mortal Kombat.", "poster_path": "/ablrE8IbWcIrAxMmm4gnPn75AMS.jpg", "release_date": "2021-08-30", "title": "Mortal Kombat Legends: Battle of the Realms", "video": false, "vote_average": 7.4, "vote_count": 15, "popularity": 133.421, "media_type": "movie" }, { "title": "Shang-Chi and the Legend of the Ten Rings", "vote_average": 7.8, "overview": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.", "release_date": "2021-09-01", "adult": false, "backdrop_path": "/nDLylQOoIazGyYuWhk21Yww5FCb.jpg", "vote_count": 57, "genre_ids": [28, 12, 14], "video": false, "original_language": "en", "original_title": "Shang-Chi and the Legend of the Ten Rings", "poster_path": "/fNNZUUYZ3tPUUPlmQMLrxAv5QoV.jpg", "id": 566525, "popularity": 926.081, "media_type": "movie" }, { "genre_ids": [80, 18], "first_air_date": "2017-05-02", "original_language": "es", "original_name": "La casa de papel", "origin_country": ["ES"], "vote_average": 8.3, "overview": "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.", "vote_count": 13566, "name": "Money Heist", "id": 71446, "poster_path": "/MoEKaPFHABtA1xKoOteirGaHl1.jpg", "backdrop_path": "/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg", "popularity": 442.367, "media_type": "tv" }, { "adult": false, "backdrop_path": "/uO8fkyWgUZCKazswbwDyFUIuI7B.jpg", "genre_ids": [35, 14, 18, 10749], "id": 785457, "original_language": "en", "original_title": "Afterlife of the Party", "overview": "A social butterfly who dies during her birthday week is given a second chance to right her wrongs on Earth.", "poster_path": "/3Vz8iIXfeGLOuePYXDoEaivoTIU.jpg", "release_date": "2021-09-02", "title": "Afterlife of the Party", "video": false, "vote_average": 0.0, "vote_count": 0, "popularity": 38.637, "media_type": "movie" }, { "backdrop_path": "/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg", "genre_ids": [28, 80, 53], "original_language": "en", "original_title": "F9", "poster_path": "/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg", "id": 385128, "vote_average": 7.6, "vote_count": 3288, "overview": "Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.", "release_date": "2021-05-19", "video": false, "title": "F9", "adult": false, "popularity": 1325.124, "media_type": "movie" }, { "overview": "Taking inspiration from the comic books of the same name, each episode explores a pivotal moment from the Marvel Cinematic Universe and turns it on its head, leading the audience into uncharted territory.", "first_air_date": "2021-08-11", "backdrop_path": "/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg", "vote_count": 1116, "genre_ids": [16, 10759, 10765], "original_name": "What If...?", "origin_country": ["US"], "original_language": "en", "poster_path": "/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg", "name": "What If...?", "id": 91363, "vote_average": 8.6, "popularity": 3180.772, "media_type": "tv" }, { "overview": "Rescued as a child by the legendary assassin Moody and trained in the family business, Anna is the world’s most skilled contract killer. When Moody, the man who was like a father to her and taught her everything she needs to know about trust and survival, is brutally killed, Anna vows revenge. As she becomes entangled with an enigmatic killer whose attraction to her goes way beyond cat and mouse, their confrontation turns deadly and the loose ends of a life spent killing will weave themselves ever tighter.", "release_date": "2021-08-19", "adult": false, "backdrop_path": "/eKHLpng7XBexnHFvchMJ6Nd72lo.jpg", "vote_count": 95, "genre_ids": [28, 80, 53], "original_language": "en", "id": 645788, "original_title": "The Protégé", "poster_path": "/Ae3cbmy52HKCTebvdUCCF0vZGrK.jpg", "video": false, "title": "The Protégé", "vote_average": 6.9, "popularity": 267.014, "media_type": "movie" }, { "original_language": "en", "poster_path": "/lxCmHIN7TTO0sxeAmgDYxqzq8Ob.jpg", "vote_average": 8.9, "id": 107113, "overview": "Three strangers who share an obsession with true crime suddenly find themselves wrapped up in one.", "first_air_date": "2021-08-31", "vote_count": 48, "name": "Only Murders in the Building", "original_name": "Only Murders in the Building", "origin_country": ["US"], "genre_ids": [35, 80, 9648], "backdrop_path": "/kKKB3m7aLFqF4ogeSWhw6cXGzNf.jpg", "popularity": 97.535, "media_type": "tv" }, { "release_date": "2021-06-11", "adult": false, "backdrop_path": "/3fMwk6Oo9lZLcWTYWdiWVUu42kZ.jpg", "genre_ids": [36, 18], "vote_count": 11, "original_language": "en", "original_title": "12 Mighty Orphans", "poster_path": "/aIY2QF211NLB1AOjZPFImusCLI1.jpg", "vote_average": 7.7, "video": false, "id": 625169, "title": "12 Mighty Orphans", "overview": "Haunted by his mysterious past, a devoted high school football coach leads a scrawny team of orphans to the state championship during the Great Depression and inspires a broken nation along the way.", "popularity": 37.367, "media_type": "movie" }, { "release_date": "2021-08-27", "adult": false, "backdrop_path": "/o0UGl6icA4DbhmDNgdZ5AWvuTtM.jpg", "genre_ids": [35], "vote_count": 116, "original_language": "en", "original_title": "Vacation Friends", "id": 653349, "title": "Vacation Friends", "video": false, "vote_average": 7.5, "poster_path": "/uTgZuqUQbaCB6Wfk03N8IUEuzQf.jpg", "overview": "When a straight-laced couple that has fun with a rowdy couple on vacation in Mexico return to the States, they discover that the crazy couple they met in Mexico followed them back home and decide to play tricks on them.", "popularity": 365.338, "media_type": "movie" }, { "original_language": "en", "original_title": "The Suicide Squad", "poster_path": "/iXbWpCkIauBMStSTUT9v4GXvdgH.jpg", "video": false, "vote_average": 8.0, "overview": "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.", "release_date": "2021-07-28", "vote_count": 3277, "title": "The Suicide Squad", "adult": false, "backdrop_path": "/jlGmlFOcfo8n5tURmhC7YVd4Iyy.jpg", "id": 436969, "genre_ids": [28, 12, 14, 35], "popularity": 2994.676, "media_type": "movie" }, { "genre_ids": [16, 35, 10751], "original_language": "en", "id": 114501, "poster_path": "/e5kT33XH2gX7xBFIK1uUJAvU5dj.jpg", "vote_average": 8.0, "overview": "A series of shorts that follows the humorous misadventures of Dug, the lovable dog from Disney and Pixar’s “Up.” Each short features everyday events that occur in Dug's backyard, all through the exciting (and slightly distorted) eyes of our favorite talking dog.", "name": "Dug Days", "original_name": "Dug Days", "first_air_date": "2021-09-01", "vote_count": 1, "backdrop_path": "/pgWgB8AfFOtwKSSoGYbmWsO5Mfq.jpg", "origin_country": ["US"], "popularity": 56.099, "media_type": "tv" }, { "backdrop_path": "/wsztJfJvJW5nXxn5n0DIMzH2TDM.jpg", "genre_ids": [35, 10749], "id": 347626, "original_language": "en", "original_title": "He's All That", "poster_path": "/kW3AG5NHoyq52dcSbMiFB6LyHvk.jpg", "title": "He's All That", "vote_average": 7.1, "overview": "To get revenge on her ex-boyfriend, an influencer attempts to transform an unpopular classmate into prom king.", "release_date": "2021-08-27", "vote_count": 268, "video": false, "adult": false, "popularity": 694.275, "media_type": "movie" }, { "first_air_date": "2021-09-02", "backdrop_path": "/fQVsBMrzCIImbEXrlWXu8YHoqik.jpg", "genre_ids": [16, 35, 10759], "original_language": "en", "vote_count": 0, "original_name": "Q-Force", "origin_country": ["US"], "poster_path": "/1xurev96eS8jeGOuuud1zgPlfAf.jpg", "vote_average": 0.0, "name": "Q-Force", "overview": "A gay superspy and his scrappy LGBTQ squad fight to prove themselves to the agency that underestimated them. Today, West Hollywood… tomorrow, the world!", "id": 128036, "popularity": 33.522, "media_type": "tv" }, { "genre_ids": [28, 53], "original_language": "en", "id": 595743, "poster_path": "/6Y9fl8tD1xtyUrOHV2MkCYTpzgi.jpg", "video": false, "vote_average": 6.1, "overview": "An off-duty SAS soldier, Tom Buckingham, must thwart a terror attack on a train running through the Channel Tunnel. As the action escalates on the train, events transpire in the corridors of power that may make the difference as to whether Buckingham and the civilian passengers make it out of the tunnel alive.", "release_date": "2021-08-11", "vote_count": 64, "title": "SAS: Red Notice", "adult": false, "backdrop_path": "/zHHcindG4uVZLPLuYWoo4rnv6Ti.jpg", "original_title": "SAS: Red Notice", "popularity": 200.532, "media_type": "movie" }, { "original_language": "en", "original_title": "After We Fell", "poster_path": "/oOZITZodAja6optBgLh8ZZrgzbb.jpg", "video": false, "vote_average": 9.0, "overview": "Just as Tessa's life begins to become unglued, nothing is what she thought it would be. Not her friends nor her family. The only person that she should be able to rely on is Hardin, who is furious when he discovers the massive secret that she's been keeping. Before Tessa makes the biggest decision of her life, everything changes because of revelations about her family.", "release_date": "2021-09-01", "vote_count": 47, "title": "After We Fell", "adult": false, "backdrop_path": "/nksMy0Uc7Bdg9dAuAV2F2hWKglU.jpg", "id": 744275, "genre_ids": [10749, 18], "popularity": 633.934, "media_type": "movie" }, { "poster_path": "/w21lgYIi9GeUH5dO8l3B9ARZbCB.jpg", "vote_average": 8.1, "name": "The Walking Dead", "overview": "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.", "vote_count": 11481, "genre_ids": [10759, 18, 10765], "original_name": "The Walking Dead", "id": 1402, "first_air_date": "2010-10-31", "origin_country": ["US"], "original_language": "en", "backdrop_path": "/wvdWb5kTQipdMDqCclC6Y3zr4j3.jpg", "popularity": 988.387, "media_type": "tv" }, { "origin_country": ["US"], "first_air_date": "2011-10-05", "backdrop_path": "/rNyOeC4uh0YMjZwtrLPFGyVIvyI.jpg", "genre_ids": [18, 9648, 10765], "original_language": "en", "vote_count": 3905, "id": 1413, "overview": "An anthology horror drama series centering on different characters and locations, including a house with a murderous past, an asylum, a witch coven, a freak show, a hotel, a farmhouse in Roanoke, a cult, the apocalypse and a summer camp.", "poster_path": "/8NMACR0OE5bwC27rE15f8ManNBO.jpg", "vote_average": 8.1, "name": "American Horror Story", "original_name": "American Horror Story", "popularity": 440.545, "media_type": "tv" }, { "genre_ids": [99, 10768], "first_air_date": "2021-09-01", "original_language": "en", "original_name": "Turning Point: 9/11 and the War on Terror", "origin_country": ["US"], "vote_average": 8.0, "overview": "Modern history can be divided into two time frames: before 9/11 and after 9/11. This five-part docuseries is a cohesive chronicle of the September 11, 2001 attacks on the U.S., offering illuminating perspectives and personal stories of how the catastrophic events of that day changed the course of the nation.", "vote_count": 1, "name": "Turning Point: 9/11 and the War on Terror", "id": 131651, "poster_path": "/z8tHFIO5Ol02X08ZS3taPff3kE6.jpg", "backdrop_path": "/dFT49VA1lBF7ylHvvMQk2nQFN63.jpg", "popularity": 55.444, "media_type": "tv" }, { "backdrop_path": "/g1cMEQnEptUJ7Sv8SRjWBTTHyMv.jpg", "genre_ids": [27, 53], "id": 565028, "original_language": "en", "original_title": "Candyman", "poster_path": "/dqoshZPLNsXlC1qtz5n34raUyrE.jpg", "title": "Candyman", "vote_average": 6.3, "overview": "Anthony and his partner move into a loft in the now gentrified Cabrini-Green, and after a chance encounter with an old-timer exposes Anthony to the true story behind Candyman, he unknowingly opens a door to a complex past that unravels his own sanity and unleashes a terrifying wave of violence.", "release_date": "2021-08-25", "vote_count": 69, "video": false, "adult": false, "popularity": 246.947, "media_type": "movie" }], "total_pages": 1000, "total_results": 20000 }

}
