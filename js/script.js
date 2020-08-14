$(document).ready(function(){

//Solution Content Reveal : Home
var serviceLink = document.querySelectorAll("#services a.serviceLink");

for (var i = 0 ; i < serviceLink.length; i++) {

  serviceLink[i].addEventListener("click", function(e){
    e.preventDefault();
    this.previousElementSibling.style.display = "block";
    this.previousElementSibling.classList.add("fadeIn");
    this.style.display = "none";
    this.nextElementSibling.style.display = "block";
    this.nextElementSibling.classList.add("fadeIn");
  });

}

//Clients Content Reveal : Home
var clientBox = document.querySelectorAll("#clients .clientBox");

for (var i = 0 ; i < clientBox.length; i++) {

  clientBox[i].addEventListener("mouseover", function(e){
    e.preventDefault();
    this.lastElementChild.style.bottom = "0px";
    this.lastElementChild.classList.add('slideUpOverlay');
    this.lastElementChild.classList.remove('slideDownOverlay');
  });

  clientBox[i].addEventListener("mouseout", function(e){
    e.preventDefault();
    this.lastElementChild.classList.remove('slideUpOverlay');
    this.lastElementChild.style.bottom = "-285px";
    this.lastElementChild.classList.add('slideDownOverlay');
  });

}

//About Content Reveal : Home : Desktop
var aboutListItem = document.querySelectorAll('.aboutList li');
var team = document.getElementById('team');
var experience = document.getElementById('experience');
var goals = document.getElementById('goals');

for (var i = 0 ; i < aboutListItem.length; i++) {

  aboutListItem[i].addEventListener("click", function(){
    if (this.innerText === "25+ Years of Experience") {
      aboutListItem[0].classList.remove('active');
      aboutListItem[2].classList.remove('active');
      this.classList.add('active');
      team.style.display = "none";
      goals.style.display = "none";
      experience.style.display = "block";
      experience.classList.add("fadeIn");
    }

    else if (this.innerText === "Our Team") {
      aboutListItem[1].classList.remove('active');
      aboutListItem[2].classList.remove('active');
      this.classList.add('active');
      team.style.display = "block";
      team.classList.add("fadeIn");
      goals.style.display = "none";
      experience.style.display = "none";
    }

    else if (this.innerText === "Our Goal") {
      aboutListItem[0].classList.remove('active');
      aboutListItem[1].classList.remove('active');
      this.classList.add('active');
      team.style.display = "none";
      goals.style.display = "block";
      goals.classList.add("fadeIn");
      experience.style.display = "none";
    }
  });

}

//About Content Reveal : Home : Mobile
var accordionHeader = document.querySelectorAll('#aboutNav .card-header');

for (var i = 0 ; i < accordionHeader.length; i++) {

  accordionHeader[i].addEventListener("click", function(){
    console.dir(this);

    if(this.classList === "active"){
            this.classList.add('active');
        }
        else{
            this.classList.remove('active');
        }

  });
}

// Solutions Reveal : Services
var solutionsBox = document.querySelectorAll('.serviceContent a');
var serviceContentRow = document.getElementById('serviceContentRow');
var serviceCarousel = document.getElementById('serviceCarousel');

for (var i = 0 ; i < solutionsBox.length; i++) {
  solutionsBox[i].addEventListener("click", function(e){
    e.preventDefault();
    // console.dir(this.previousElementSibling.innerText);
    serviceContentRow.style.display = "none";
    serviceCarousel.style.display = "block";
    serviceCarousel.classList.add('fadeIn');

    if (this.previousElementSibling.innerText === "Microsoft & Quickbooks Training") {
      console.dir(serviceCarousel.children[1].children[1]);
      serviceCarousel.firstElementChild.children[0].classList.remove('active');
      serviceCarousel.firstElementChild.children[1].classList.remove('active');
      serviceCarousel.firstElementChild.children[2].classList.remove('active');

      serviceCarousel.firstElementChild.children[1].classList.add('active');

      serviceCarousel.children[1].children[0].classList.remove('active');
      serviceCarousel.children[1].children[2].classList.remove('active');
      serviceCarousel.children[1].children[1].classList.add('active');
    }

    else if (this.previousElementSibling.innerText === "Business Auditing & Advisory") {
      serviceCarousel.firstElementChild.children[0].classList.remove('active');
      serviceCarousel.firstElementChild.children[1].classList.remove('active');
      serviceCarousel.firstElementChild.children[2].classList.remove('active');

      serviceCarousel.firstElementChild.children[2].classList.add('active');

      serviceCarousel.children[1].children[0].classList.remove('active');
      serviceCarousel.children[1].children[1].classList.remove('active');
      serviceCarousel.children[1].children[2].classList.add('active');
    }

    else if (this.previousElementSibling.innerText === "Small Business & Services Notary") {
      serviceCarousel.firstElementChild.children[0].classList.remove('active');
      serviceCarousel.firstElementChild.children[1].classList.remove('active');
      serviceCarousel.firstElementChild.children[2].classList.remove('active');

      serviceCarousel.firstElementChild.children[0].classList.add('active');

      serviceCarousel.children[1].children[2].classList.remove('active');
      serviceCarousel.children[1].children[1].classList.remove('active');
      serviceCarousel.children[1].children[0].classList.add('active');
    }
  });

}

// Clients Reveal : Clients

var clientLogos = document.querySelectorAll('#clientsBox .clientLogos .clientLogosBox li');
var testimonial1 = document.getElementById('client1');
var testimonial2 = document.getElementById('client2');
var testimonial3 = document.getElementById('client3');
var testimonial4 = document.getElementById('client4');

for (var i = 0 ; i < clientLogos.length; i++) {

  clientLogos[i].addEventListener("click", function(){

    console.dir(this.attributes[0].nodeValue);

    if (this.attributes[0].nodeValue === "ufo") {
      testimonial1.style.display = "block";
      testimonial1.classList.add('fadeIn');
      testimonial2.style.display = "none";
      testimonial2.classList.remove('fadeIn');
      testimonial2.classList.add('fadeOut');
      testimonial3.style.display = "none";
      testimonial3.classList.remove('fadeIn');
      testimonial3.classList.add('fadeOut');
      testimonial4.style.display = "none";
      testimonial4.classList.remove('fadeIn');
      testimonial4.classList.add('fadeOut');
    }
    else if (this.attributes[0].nodeValue === "ufo1") {
      testimonial1.style.display = "none";
      testimonial1.classList.remove('fadeIn');
      testimonial1.classList.add('fadeOut');
      testimonial2.style.display = "block";
      testimonial2.classList.add('fadeIn');
      testimonial3.style.display = "none";
      testimonial3.classList.remove('fadeIn');
      testimonial3.classList.add('fadeOut');
      testimonial4.style.display = "none";
      testimonial4.classList.remove('fadeIn');
      testimonial4.classList.add('fadeOut');
    }
    else if (this.attributes[0].nodeValue === "ufo2") {
      testimonial1.style.display = "none";
      testimonial1.classList.remove('fadeIn');
      testimonial1.classList.add('fadeOut');
      testimonial2.style.display = "none";
      testimonial2.classList.remove('fadeIn');
      testimonial2.classList.add('fadeOut');
      testimonial3.style.display = "block";
      testimonial3.classList.add('fadeIn');
      testimonial4.style.display = "none";
      testimonial4.classList.remove('fadeIn');
      testimonial4.classList.add('fadeOut');
    }
    else if (this.attributes[0].nodeValue === "ufo3") {
      testimonial1.style.display = "none";
      testimonial1.classList.remove('fadeIn');
      testimonial1.classList.add('fadeOut');
      testimonial2.style.display = "none";
      testimonial2.classList.remove('fadeIn');
      testimonial2.classList.add('fadeOut');
      testimonial3.style.display = "none";
      testimonial3.classList.remove('fadeIn');
      testimonial3.classList.add('fadeOut');
      testimonial4.style.display = "block";
      testimonial4.classList.add('fadeIn');
    }

  });

}

// Team Members Reveal : About Us

var teamMembers = document.querySelectorAll('.teamImgBox .teamImgBoxContainer');
var member1 = document.getElementById('member1');

for (var i = 0 ; i < teamMembers.length; i++) {

  teamMembers[i].addEventListener("click", function(e){
    console.dir(this.attributes[0].nodeValue);
    if (this.attributes[0].nodeValue === "tm1") {
      member1.style.display = "block";
      member1.classList.add('fadeIn');
      member2.style.display = "none";
      member2.classList.remove('fadeIn');
      member3.style.display = "none";
      member3.classList.remove('fadeIn');
      member4.style.display = "none";
      member4.classList.remove('fadeIn');
      member5.style.display = "none";
      member5.classList.remove('fadeIn');
      member6.style.display = "none";
      member6.classList.remove('fadeIn');
    }
    else if (this.attributes[0].nodeValue === "tm2") {
      member1.style.display = "none";
      member1.classList.remove('fadeIn');
      member2.style.display = "block";
      member2.classList.add('fadeIn');
      member3.style.display = "none";
      member3.classList.remove('fadeIn');
      member4.style.display = "none";
      member4.classList.remove('fadeIn');
      member5.style.display = "none";
      member5.classList.remove('fadeIn');
      member6.style.display = "none";
      member6.classList.remove('fadeIn');
    }
    else if (this.attributes[0].nodeValue === "tm3") {
      member1.style.display = "none";
      member1.classList.remove('fadeIn');
      member2.style.display = "none";
      member2.classList.remove('fadeIn');
      member3.style.display = "block";
      member3.classList.add('fadeIn');
      member4.style.display = "none";
      member4.classList.remove('fadeIn');
      member5.style.display = "none";
      member5.classList.remove('fadeIn');
      member6.style.display = "none";
      member6.classList.remove('fadeIn');
    }
    else if (this.attributes[0].nodeValue === "tm4") {
      member1.style.display = "none";
      member1.classList.remove('fadeIn');
      member2.style.display = "none";
      member2.classList.remove('fadeIn');
      member3.style.display = "none";
      member3.classList.remove('fadeIn');
      member4.style.display = "block";
      member4.classList.add('fadeIn');
      member5.style.display = "none";
      member5.classList.remove('fadeIn');
      member6.style.display = "none";
      member6.classList.remove('fadeIn');
    }
    else if (this.attributes[0].nodeValue === "tm5") {
      member1.style.display = "none";
      member1.classList.remove('fadeIn');
      member2.style.display = "none";
      member2.classList.remove('fadeIn');
      member3.style.display = "none";
      member3.classList.remove('fadeIn');
      member4.style.display = "none";
      member4.classList.remove('fadeIn');
      member5.style.display = "block";
      member5.classList.add('fadeIn');
      member6.style.display = "none";
      member6.classList.remove('fadeIn');
    }
    else if (this.attributes[0].nodeValue === "tm6") {
      member1.style.display = "none";
      member1.classList.remove('fadeIn');
      member2.style.display = "none";
      member2.classList.remove('fadeIn');
      member3.style.display = "none";
      member3.classList.remove('fadeIn');
      member4.style.display = "none";
      member4.classList.remove('fadeIn');
      member5.style.display = "none";
      member5.classList.remove('fadeIn');
      member6.style.display = "block";
      member6.classList.add('fadeIn');
    }


  });

}

//Solution Content Reveal : Home

});
