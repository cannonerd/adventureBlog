describe("Clicker App", function () {
  var win = null;
  var doc = null;
  before(function (done) {
    var iframe = document.getElementById('clickerApp');
    iframe.src = "../src/clicker.html";
    iframe.onload = function () {
    win = iframe.contentWindow;
    doc = iframe.contentDocument;
    setTimeout(function () {
      done();
    }, 100);
    };
  });
  describe('Initially', function () {
    it('should have zero clicks', function () {
      chai.expect(win.clicks).to.be.a('number');
      chai.expect(win.clicks).to.equal(0);
    });
    it('should increment clicks when clicked', function () {
      var btn = doc.getElementById('clicker');
      btn.click();
      chai.expect(win.clicks).to.equal(1);
    });
  })
})