const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');

var sectionIndex = 0;

function setIndex(index) {
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[index].classList.add('selected');
    slider.style.transform = 'translate(' + (index) * -25 + '%)';
    
}

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        sectionIndex = ind;
        setIndex(sectionIndex);
    })
})

leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    setIndex(sectionIndex);
})

rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    setIndex(sectionIndex);
})

