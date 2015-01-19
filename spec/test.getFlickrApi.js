describe("getting flickr api", function(){
    describe("flickr requests", function(){
        it("Should get photos from flickr based on set url ", function(){
            var url = "https://www.flickr.com/photos/ihmis-suski/sets/72157649813813025/";
            chai.expect(getFlickrSet(url)).to.be.a("string");
        });
    })
});