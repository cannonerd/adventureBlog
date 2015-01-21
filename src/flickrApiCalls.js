function getFlickrSetID (url)
{
    var setNumber = url.split('/').pop();
    if(setNumber === ""){
        setNumber = url.slice(0, - 1).split('/').pop();
    }
    return setNumber;
}

function getFlickrApi(setId, apiMethod, apiKey, callback)
{
    var flickrAPI = '';
    flickrAPI += 'https://api.flickr.com/services/rest/?';
    flickrAPI += '&method=' + apiMethod;
    flickrAPI += '&api_key=' +apiKey ;
    flickrAPI += '&' +setId;
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

function getTimestampFromSetPhoto (photoId, apiMethod, apiKey, callback)
{
    getFlickrApi(photoId,apiMethod,apiKey,function(photo){
        var dateForImage;
        if(photo.photo.dates.taken === ""){
            dateForImage  = photo.photo.dateuploaded;
        }
        else{
            dateForImage = photo.photo.dates.taken;
        }
        callback(dateForImage);
    });
}