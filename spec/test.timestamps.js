/*dis is the great test file.
* Here we be testing timestamps.
*/

describe("timestamp handling", function(){
  describe("correcting timestamps to baseline", function(){
    /*here will be our first test for timestamps*/
    it("Should keep correct timestamps as they are", function(){
      var time = new Date("2014-11-21T14:05:12Z");
      var corrected = correctTimestamp(time, 0);
      if(time.getTime() !== corrected.getTime()){
        throw new Error ("Times don't match");
      }
    });

    it("Should alter the timestamps by negative hour", function(){
      var time = new Date("2014-11-21T14:05:12Z");
      /*we give the reduced time in minutes*/
      var corrected = correctTimestamp(time, -60);
      /*calculate minutes to milliseconds so that the DateObject time is reduced correctly*/
      chai.expect(corrected.getTime()).to.equal(time.getTime()-60*60*1000);
    });

    it("Should alter the timestamps by a positive hour", function(){
      var time = new Date("2014-11-21T14:05:12Z");
      var corrected = correctTimestamp(time, 60);
      chai.expect(corrected.getTime()).to.equal(time.getTime()+60*60*1000);
    });
  });
});