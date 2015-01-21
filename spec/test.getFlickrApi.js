describe("getting flickr api", function(){
    describe("flickr requests", function(){
        it("set id is a string ", function(){
            var url = "https://www.flickr.com/photos/ihmis-suski/sets/72157649813813025/";
            chai.expect(getFlickrSetID(url)).to.be.a("string");
        });
        it("set id matches the id", function(){
            var url = "https://www.flickr.com/photos/ihmis-suski/sets/72157649813813025";
            chai.expect(getFlickrSetID(url)).to.equal('72157649813813025');
        });
        it("set id matches the id in various forms", function(){
            var url = "https://www.flickr.com/photos/ihmis-suski/sets/72157649813813025/";
            chai.expect(getFlickrSetID(url)).to.equal('72157649813813025');
        });
        //getFlickrSetPhotos

        it("gets response from Flickr", function(done){
            //In this test we get photoset photos
            var setId = "photoset_id=72157649813813025";
            var apiMethod= "flickr.photosets.getPhotos";
            var apiKey= "8d156cde97fe02e2f4a22324fd761996";
            getFlickrApi(setId, apiMethod, apiKey, function(photos){
                console.log(JSON.stringify(photos));
                done();
            } );
        });

        it("Get photos information", function(done){
            var apiMethod= "flickr.photos.getInfo";
            var apiKey= "8d156cde97fe02e2f4a22324fd761996";
            var photoId = "photo_id=16237436801";
            getFlickrApi(photoId, apiMethod, apiKey, function(photo){
                console.log(JSON.stringify(photo));
                done();
            } );
        });

        //getTimestampFromSetPhoto
        it("Get timestamp from photos information", function(done){
            var apiMethod= "flickr.photos.getInfo";
            var apiKey= "8d156cde97fe02e2f4a22324fd761996";
            var photoId = "photo_id=16237436801";
            getTimestampFromSetPhoto(photoId, apiMethod, apiKey, function(photo){
                console.log(photo);
                done();
            } );
        });
    })
});
