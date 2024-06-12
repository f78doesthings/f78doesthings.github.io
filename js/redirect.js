const params = new URLSearchParams(location.search);
if (params.has("noredir")) {
    console.log(
        'Redirecting is disabled because the "noredir" search parameter was passed.'
    );
} else {
    location.replace(document.getElementById("target").href);
}
