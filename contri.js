var teamMember = [{
    name: 'Raja Harsh Vardhan Singh',
    image: 'https://github.com/rhvsingh.png',
    github: 'https://github.com/rhvsingh',
    twitter: 'https://twitter.com/rhvsingh'
}];

var contributors = document.querySelectorAll('.contributors')[0];

for (let i = 0; i < teamMember.length; i++) {
    let divCreate = document.createElement('div');
    divCreate.className = 'contri_box';
    divCreate.innerHTML = '<div class="contri-card"><div class="contri-card-inner"><div class="contri-card-front"><img src="' + teamMember[i].image + '" alt="' + teamMember[i].name + '" /></div><div class="contri-card-back"><div style="position:relative;transform-style:preserve-3d;"><span>' + teamMember[i].name + '</span><div> <li><a href="' + teamMember[i].github + '" target="_blank"><i class="fab fa-github"></i></a></li><li><a href="' + teamMember[i].twitter + '" target="_blank"><i class="fab fa-twitter"></i></a></li></div></div></div></div></div>';
    contributors.append(divCreate);
}

$('.faq-heading').click(function() {
    $(this).parent('li').toggleClass('the-active').find('.faq-text').slideToggle();
});