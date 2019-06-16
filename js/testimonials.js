/*
#testimonial
    #testimonial-thumb
    #testimonial-name
    #testimonial-company
    #testimonial-text

*/
var webSiteLink = "http://127.0.0.1:8080/";
var testimonialTargetDiv = $('#testimonial');
var testimonialTargetName = $('#testimonial-name');
var testimonialTargetCompany = $('#testimonial-company');
var testimonialTargetText = $('#testimonial-text');
var testimonialTargetImage = $('#testimonial-image');
var testimonialNextButton = $('#testimonial-right-arrow')
var testimonialPrevButton = $('#testimonial-left-arrow')
var currentTestimonial = 0;
var tss = []
var testimonialTemplate = function () {
    return {
        "name": "N/A"
        , "company": "N/A"
        , "text": "N/A"
        , "image": "N/A"
    }
}

function retrieveTestimonials() {
    try {
        var TestimonialsData = [
            {
                name: "Abby Heniger 17 year old actress Buffalo, NY", company: "QUOTED", text: "There is no more guessing on what to do to pursue my film acting career. It was laid out for me and I am now on my path to being a working film actress! YAC IS THE BEST OVERNIGHT CAMP IN THE WORLD!!!", image: "../img/flower.jpg"
            },
            {
                name: "Nikki Gomez Mom/16 yr old daughter Houston, TX", company: "QUOTED", text: "Superb experience for my daughter (and whole family for that fact). She loves her new camp family and we loved the parent program.", image: "../img/flower2.jpg"
            },
            {
                name: "L. Carlson Parent Parent /14 yr old daughter Boston, MA", company: "QUOTED", text: "Price and promises were right on point. Well worth every penny!", image: "../img/download.jpg"
            }
        ];
        for (var i = 0; i <= TestimonialsData.length - 1; i++) {
            var t = new testimonialTemplate();
            t.name = TestimonialsData[i].name;
            t.company = TestimonialsData[i].company;
            t.text = TestimonialsData[i].text;
            t.image = TestimonialsData[i].image;
            tss.push(t);
        }
    }
    catch (err) {
        console.log("Error in Testimonial.js-->" + err.message);
    }
    finally {
        onPageReady();
    }
}
function viewTestimonial(no) {

    debugger
    if (no < tss.length) {
        var selectedTestimonial = tss[no];
        testimonialTargetName.html(selectedTestimonial.name);
        testimonialTargetCompany.html(selectedTestimonial.company);
        testimonialTargetText.html(selectedTestimonial.text);
        testimonialTargetImage.css("background-image", 'url("' + '../img/person.png' + '")');
        if (selectedTestimonial.image) {
            if (selectedTestimonial.image != "N/A") {
                testimonialTargetImage.css("background-image", 'url( "' + selectedTestimonial.image + '")');
            }
        }
    }
    else {
        console.log("Cannot access testimonial no. " + no + " out of total " + tss.length + " testimonials");
    }
}

function onPageReady() {
    testimonialNextButton.on('click', nextTestimonial);
    testimonialPrevButton.on('click', prevTestimonial);
    startChanger(6000);
}

function startChanger(timeOut) {
    viewTestimonial(0);
    setInterval(nextTestimonial, timeOut);
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % tss.length;
    viewTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1) % tss.length;
    if (currentTestimonial == -1) {
        currentTestimonial = tss.length - 1;
    }
    viewTestimonial(currentTestimonial);
}
$(document).ready(function () {
    retrieveTestimonials();
})
