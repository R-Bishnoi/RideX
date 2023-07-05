const [
    user1,
    user2,
    user3,
    user4
] = [
    document.querySelector('.user-1'),
    document.querySelector('.user-2'),
    document.querySelector('.user-3'),
    document.querySelector('.user-4')
]
user1.addEventListener('click',()=>{
  document.querySelector('.user-reviews').innerHTML=`
  <h2>
  Awesome Job
</h2>
<div class="line-user"></div>
<h3>Ramdayal</h3>
<p>
    I have Used RideX To find the best &Cost Effective , <br>
    Ride. I am Also Contibute in our sustainable goal <br>
    and Carbon emission Goal . It was Bcz of RideX. <br>
    <br><br>
    Thank You RideX !.
</p>`;
})
user2.addEventListener('click',()=>{
  document.querySelector('.user-reviews').innerHTML=`
  <h2>
  Great Work
</h2>
<div class="line-user"></div>
<h3>Priyanka</h3>
<p>
I have Used RideX To find the best &Cost Effective , <br>
Ride. I am Also Contibute in our sustainable goal <br>
and Carbon emission Goal . It was Bcz of RideX. <br>
<br><br>
Thank You RideX !.
</p>
  `
})
user3.addEventListener('click',()=>{
  document.querySelector('.user-reviews').innerHTML = `
  <h2>
  Superb
</h2>
<div class="line-user"></div>
<h3>Vijay</h3>
<p>
  What A Nice Website . It is very HelpFul me When I'm Waiting for other<br>
  Public Transport. It Was Also Cost Effective. And My experience was very<br>
  Positive about RideX. ------ Nice Work RideX!
</p>
  `
})
user4.addEventListener('click',()=>{
  document.querySelector('.user-reviews').innerHTML = `
  <h2>
 Great work
</h2>
<div class="line-user"></div>
<h3>Joshep vilson</h3>
<p>
  I Am In India Last 5 month And I find out The RideX. <br>
  It Was Really cost effective for As I am Travelat. <br>
  Nice Service Upto time Info and Chat server etc. <br>
  <br><br>
  Great Work ! Appriciatble !!!
</p>`
})
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});