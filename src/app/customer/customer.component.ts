import { Component } from "@angular/core";

@Component({


    selector: 'customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']

})

export class CustomerComponent {

   /*  sampleObject = {
        "webApp": {
            "servlet": [
                {
                    "servletName": "cofaxCDS",
                    "servlet-class": "org.cofax.cds.CDSServlet",
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
                    "servlet-class": "org.cofax.cds.EmailServlet",
                    "init-param": {
                        "mailHost": "mail1",
                        "mailHostOverride": "mail2"
                    }
                },
                {
                    "servletName": "cofaxAdmin",
                    "servlet-class": "org.cofax.cds.AdminServlet"
                },
                {
                    "servletName": "fileServlet",
                    "servlet-class": "org.cofax.cds.FileServlet"
                },
                {
                    "servletName": "cofaxTools",
                    "servlet-class": "org.cofax.cms.CofaxToolsServlet",
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
 */
    title: string = 'basic-bootstrap';
    //Global Variable
    typedText: any = "";
    updatedText: any = "";
    familyList: any[] = [];
    selectedIndex: any = -1;

    // exampleVariable : number = 1;

    onButtonClick() {
        /*   console.log("family", this.familyList); */
        this.familyList.push(this.typedText);

        this.typedText = "";


    }

    onIconClick(receivedFamilyName: any, index: any) {
        // console.log("family", receivedFamilyName);
        // console.log("family index", index);
        this.familyList.splice(index, 1)

    }

    onEditIconClick(index: any) {
        //index is local variable
        // console.log("iconclick", index);
        this.updatedText = this.familyList[index];
        this.selectedIndex = index;
        //taken new variable selectedIndex to assign index for Update Click button//
    }

    onUpdateClick() {
        // console.log(this.updatedText);
        this.familyList[this.selectedIndex] = this.updatedText;
        this.updatedText = "";

    }

}

