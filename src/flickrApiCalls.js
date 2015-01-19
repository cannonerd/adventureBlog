function getFlickrSetID (url)
{
    var setNumber = url.split('/').pop();
    if(setNumber === ""){
        setNumber = url.slice(0, - 1).split('/').pop();
    }
    return setNumber;
}
