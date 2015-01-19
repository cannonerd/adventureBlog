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
    })
});