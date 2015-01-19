function getFlickrSetID (url)
{
    var setNumber = url.split('/').pop();
    if(setNumber === ""){
        setNumber = url.slice(0, - 1).split('/').pop();
    }
    return setNumber;
}

function getFlickrSetPhotos(id, apiMethod, apiKey){
    var flickrAPI = '';
    flickrAPI += 'https://api.flickr.com/services/rest/?';
    flickrAPI += '&method="' + apiMethod+'"';
    flickrAPI += '&api_key="' +apiKey +'"' ;
    flickrAPI += '&format=json';
    var xhr= new XMLHttpRequest();
    xhr.open("GET",flickrAPI,true);   //
    xhr.send();
    xhr.onreadystatechange=function(){

        return xhr;
    };


}