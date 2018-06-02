$(function() {var videohtml5 = $('.videoGallery .videohtml5');
var videohd = $('.videoGallery .videohd');
var videofullhd = $('.videoGallery .videofullhd');
var videopentech = $('.videoGallery .videopentech');
var liHeight = $('.videoGallery li').height();
var ytVideo = $('.videoGallery .ytVideo');
  var dailyMvideo = $('.videoGallery .dailyMvideo');
  var uolVideo = $('.videoGallery .uolVideo');
  var html5bgvideo = $('.videoGallery .html5bgvideo');

  var linksVisitados = Visitados();
  linksVisitados.forEach(function(link) {
      var li = document.querySelector(`[data-videoid="${link}"]`);
      li && li.parentElement.classList.add('visitado');
  });

  function Visitados(link) {
      var linksVisitados = JSON.parse(localStorage.linksVisitados || '[]');
	  if (!link) return linksVisitados;
      linksVisitados.push(link);
      localStorage.linksVisitados = JSON.stringify(linksVisitados);
  }

// BLOGGER
videohtml5.click(function(){
var videoID = $(this).attr('data-videoID');
var videos = $('<div class="meuVideo"> <video width="100%" controls="controls" autoplay="true" poster="//i.imgur.com/SoclbRY.png" src="https://www.blogger.com/video-play.mp4?contentId='+ videoID +'" type="video/mp4"></video> </div>');


$('.meuVideo, .nowPlaying').remove();
$(this).parents().eq(2).append(videos);
$('<i class="nowPlaying">Reproduzindo ...</i>').insertAfter(this);
});

// Youtube Video
  ytVideo.click(function() {
      $(this).closest('li').addClass('visitado');
      var videoID = $(this).attr('data-videoID');
      Visitados(videoID);
      var videos = $('<div class="meuVideo"> <iframe width="100%"    height="315" src="https://www.youtube.com/embed/' + videoID + '?autoplay=1" frameborder="0" allowfullscreen></iframe> </div>');

      $('.meuVideo, .nowPlaying').remove();
      $(this).parents().eq(2).append(videos);
      $('<i class="nowPlaying">Reproduzindo ...</i>').insertAfter(this);
  });
  
  
  // Pentech Video
  videopentech.click(function() {
      $(this).closest('li').addClass('visitado');
      var videoID = $(this).attr('data-videoID');
      Visitados(videoID);

      var videos = $('<div class="meuVideo"> <video width="100%"  controls="controls" autoplay="true" src="https://ns3100761.ip-54-36-175.eu/' + videoID + '" type="video/mp4"" frameborder="0" allowfullscreen></video> </div>');

      $('.meuVideo, .nowPlaying').remove();
      $(this).parents().eq(2).append(videos);
      $('<i class="nowPlaying">Reproduzindo ...</i>').insertAfter(this);


  });
 
  
// HTML5 Video
dailyMvideo.click(function(){
 $(this).closest('li').addClass('visitado');
      var videoID = $(this).attr('data-videoID');
      Visitados(videoID);
var videoID = $(this).attr('data-videoID');
var videos = $('<div class="meuVideo" > <video  width="100%" controls="controls" autoplay="true" src="https://2.bp.blogspot.com/'+ videoID +'=m18" type="video/mp4"></video> </div>');

$('.meuVideo, .nowPlaying').remove();
$(this).parents().eq(2).append(videos);
$('<i class="nowPlaying">Reproduzindo ...</i>').insertAfter(this);
});


// HTML5 Video
html5bgvideo.click(function(){
 $(this).closest('li').addClass('visitado');
      var videoID = $(this).attr('data-videoID');
      Visitados(videoID);
var videoID = $(this).attr('data-videoID');
var videos = $('<div class="meuVideo" > <video  width="100%" controls="controls" autoplay="true" src="http://www.blogger.com/video-play.mp4?contentId='+ videoID +'" type="video/mp4"></video> </div>');

$('.meuVideo, .nowPlaying').remove();
$(this).parents().eq(2).append(videos);
$('<i class="nowPlaying">Reproduzindo ...</i>').insertAfter(this);
});


  // UOL Video
  uolVideo.click(function() {
      $(this).closest('li').addClass('visitado');
      var videoID = $(this).attr('data-videoID');
      Visitados(videoID);

      var videos = $('<div class="meuVideo"> <video width="100%"  controls="controls" autoplay="true" src="http://video25.mais.uol.com.br/' + videoID + '.mp4?r=//mais.uol.com.br" type="video/mp4"" frameborder="0" allowfullscreen></video> </div>');

      $('.meuVideo, .nowPlaying').remove();
      $(this).parents().eq(2).append(videos);
      $('<i class="nowPlaying">Reproduzindo ...</i>').insertAfter(this);


  });

// SISTEMA HD
videohd.click(function(){
var videoID = $(this).attr('data-videoID');
var videos = $('<div class="meuVideo"> <video  width="100%" controls="controls" autoplay="true" src="https://ns5001921.ip-192-99-16.net/Uploads/Animes/B'+ videoID +'" type="video/mp4"></video> </div>');

$('.meuVideo, .nowPlaying').remove();
$(this).parents().eq(2).append(videos);
$('<i class="nowPlaying">? Reproduzindo ...</i>').insertAfter(this);
});




// Sistema Full HD
videofullhd.click(function(){
var videoID = $(this).attr('data-videoID');
var videos = $('<div class="meuVideo"> <video  width="100%" controls="controls" autoplay="true" src="'+ videoID +'" type="video/mp4"></video> </div>');

$('.meuVideo, .nowPlaying').remove();
$(this).parents().eq(2).append(videos);
$('<i class="nowPlaying">? Reproduzindo ...</i>').insertAfter(this);
});


// Fechar Videos
$('.close').click(function(){
$('.meuVideo, .nowPlaying').remove();
});

 $('.close01').click(function() {
      $('.meuVideo, .nowPlaying').remove();
  });

})
