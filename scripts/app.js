
var input = document.querySelector('input[type=file]');
var canvas = document.getElementById('ImgCan');
var img ;
var frameFilter = new Image();
frameFilter.src = "images/frame.png";
context = canvas.getContext('2d');


var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;



input.onchange = function () {
  var file = input.files[0];
  //console.log(file);
  var imgURL = URL.createObjectURL(file);
  
  img = new Image();
  img.src=imgURL;
  console.log(file.height);
 
  img.onload =function(){
    canvas.height = y;
    canvas.width = x;
  	context.drawImage(img, 0, 0, img.width, img.height ,
                           0, 0, canvas.width, canvas.height);

    context.drawImage(frameFilter, 0, 0, frameFilter.width, frameFilter.height ,
                             0, 0, canvas.width, canvas.height);

  }
  // upload(file);
  //displayAsImage(file);
};




// function displayAsImage(file) {
//   var imgURL = URL.createObjectURL(file),

   //   img = document.createElement('img');

//  img.onload = function() {
//     URL.revokeObjectURL(imgURL)
//   };
//   base_image = new Image();
//   base_image.src = imgURL;
//   context.drawImage(base_image, 100, 100);
//  // img.src = imgURL;
// }


// function upload(file) {
//   var form = new FormData(),
//       xhr = new XMLHttpRequest();

//   form.append('image', file);
//   xhr.open('post', 'server.php', true);
//   xhr.send(form);
// }



// var canvas = document.querySelector('canvas');
// fitToContainer(canvas);

// function fitToContainer(canvas){
//   // Make it visually fill the positioned parent
//   canvas.style.width ='100%';
//   canvas.style.height='100%';
//   // ...then set the internal size to match
//   canvas.width  = canvas.offsetWidth;
//   canvas.height = canvas.offsetHeight;
// }