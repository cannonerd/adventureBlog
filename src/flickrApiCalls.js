function getFlickrSetID (url)
{
    var setNumber = url.split('/').pop();
    if(setNumber === ""){
        setNumber = url.slice(0, - 1).split('/').pop();
    }
    return setNumber;
}

function getFlickrSetPhotos(setId, apiMethod, apiKey){
    var flickrAPI = '';
    flickrAPI += 'https://api.flickr.com/services/rest/?';
    flickrAPI += '&method=' + apiMethod;
    flickrAPI += '&api_key=' +apiKey  ;
    flickrAPI += '&photoset_id=' +setId  ;
    //photoset_id
    flickrAPI += '&format=json';
    return  flickrAPI;
    var xhr= new XMLHttpRequest();
    xhr.open("GET",flickrAPI,true);   //
    xhr.send();
    xhr.onreadystatechange=function(){

        return xhr;
    };


}