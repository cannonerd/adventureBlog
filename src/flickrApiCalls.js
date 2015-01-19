function getFlickrSetID (url)
{
    var setNumber = url.split('/').pop();
    if(setNumber === ""){
        setNumber = url.slice(0, - 1).split('/').pop();
    }
    return setNumber;
}

function getFlickrSetPhotos(setId, apiMethod, apiKey, callback){
    var flickrAPI = '';
    flickrAPI += 'https://api.flickr.com/services/rest/?';
    flickrAPI += '&method=' + apiMethod;
    flickrAPI += '&api_key=' +apiKey ;
    flickrAPI += '&photoset_id=' +setId;
    flickrAPI += '&format=json';
    flickrAPI += '&nojsoncallback=1';

    var xhr= new XMLHttpRequest();
    xhr.open("GET",flickrAPI,true);
    xhr.send();
    xhr.onreadystatechange=function(){
        if (xhr.readyState !== 4) {
            // Not complete yet
            return;
        }
        var data = JSON.parse(xhr.responseText);
        // Send data to callback. Note: XHR is asynchronous
        callback(data);
    };


}