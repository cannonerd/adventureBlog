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

        it("gets response from Flickr flickr.photosets.getPhotos", function(done){
            var setId = "72157649813813025";
            var apiMethod= "flickr.photosets.getPhotos";
            var apiKey= "8d156cde97fe02e2f4a22324fd761996";

            getFlickrSetPhotos(setId, apiMethod, apiKey, done);
        });
        it('should take less than 10000ms', function(done){
            this.timeout(10000);
            var setId = "72157649813813025";
            var apiMethod= "flickr.photosets.getPhotos";
            var apiKey= "8d156cde97fe02e2f4a22324fd761996";

            getFlickrSetPhotos(setId, apiMethod, apiKey, done);
        })


    })
});