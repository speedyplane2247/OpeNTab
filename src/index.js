    console.log("Welcome to OpeNTab JS Console! You can customize things using customizeColor(r,g,b) to customize colors or customizeColorStick(r,g,b) to make these changes stick.")
    console.log("If you don't like your new color scheme, you can type resetColor() and reset the colors back to stock!")
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function resetColor() {
    console.log("Resetting Color...")
    customizeColorStick(0, 143, 179)
}
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function customizeColor(r,g,b,arg) {
    if (arg != "silent") {
console.log("Setting custom color...")
}
var sheet = window.document.styleSheets[0];
sheet.insertRule('body {background-color: rgb('+r+','+g+','+b+')}', sheet.cssRules.length);
}
function customizeColorStick(r,g,b) {
console.log("Setting custom color and keeping it...")
var sheet = window.document.styleSheets[0];
sheet.insertRule('body {background-color: rgb('+r+','+g+','+b+')}', sheet.cssRules.length);
setCookie("bColorR",r,341237498374);
setCookie("bColorG",g,341237498374);
setCookie("bColorB",b,341237498374);
}
window.onload = function() {
    customizeColor(getCookie("bColorR"),getCookie("bColorG"),getCookie("bColorB"),"silent")
}
function search() {
    var searchBox = document.getElementById("searchbox")
    var searchEngine = document.getElementById("searchengine")
    var searchText = "http://example.com/search.php?q=class"
    if (searchEngine.options.selectedIndex == 0) {
        searchText = "https://www.google.com/search?q="+encodeURIComponent(searchBox.value) // Google Search Query
    }
    if (searchEngine.options.selectedIndex == 1) {
        searchText = "https://search.yahoo.com/search?p="+encodeURIComponent(searchBox.value) // Yahoo Search Query
    }
    if (searchEngine.options.selectedIndex == 2) {
        searchText = "http://www.bing.com/search?q="+encodeURIComponent(searchBox.value) // Bing Search Query
    }
    if (searchEngine.options.selectedIndex == 3) {
        searchText = "https://duckduckgo.com/?q="+encodeURIComponent(searchBox.value) // DuckDuckGo Search Query
    }
    location.href = searchText

}