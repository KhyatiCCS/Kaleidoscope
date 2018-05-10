var images = [
  "http://www.wsupress.wayne.edu/sites/default/files/27X23.3924.Merged.jpg",
  "http://www.trbimg.com/img-555a6588/turbine/la-trb-michigan-tour-explores-art-and-architecture-of-detroit-20150516",
  "http://www.6am-group.com/wp-content/uploads/2016/02/DetroitSkyline.jpg",
];


// Let's create graphemescope object inside the container
var container = $("#container");
var scope = new Graphemescope( container[0] );


var index = 0;
function changePicture() {
    scope.setImage(images[index]);
    index = (index + 1) % images.length;
};

setInterval(changePicture, 10000);
changePicture();

$(window).mousemove(function(event) {
  var factorx = event.pageX / $(window).width();
  var factory = event.pageY / $(window).height()

  // This will move kaleidoscope
  scope.angleTarget = factorx;
  scope.zoomTarget  = 1.0 + 0.5 * factory;
});


var resizeHandler = function() {
  container.height( $(window).height() );
  container.width( $(window).width() );
};

$(window).resize(resizeHandler);
$(window).resize();

container.click(changePicture);
