function Request() {
    this.headers = {};
    this.body = null;
    this.method = "GET";
    this.url = "";
    this.selectedTabUrl = "";   // current selected tab's url

    this.xhr = null;
    this.nameE = null;		// element
    this.valueE = null;
    this.hname = "";		// header name
    this.hvalue = "";		// header value
    this.result = "";
}

Request.request = new Request();

function main()
{
    console.log("staring main()");
}
