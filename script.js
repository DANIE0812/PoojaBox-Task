
document.querySelector('#search').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}


// window.onload = function () {

//     function playReel(reel) {
//         for (var i = 0; i < reelContent.length; i++) {
//             reelContent[i].classList.remove("active");
//             reelContent[i].classList.remove("inactive");
//         }
//         if (reel < 0) {
//             reel = currentReel = reelContent.length - 1;
//         }
//         if (reel > reelContent.length - 1) {
//             reel = currentReel = 0;
//         }
//         if (currentActive != currentReel) {
//             reelContent[currentActive].classList.add('inactive')
//         }
//         reelContent[reel].classList.add('active')

//         currentActive = currentReel;

//         clearTimeout(reelTimer);
//         reelTimer = setTimeout(function () {
//             playReel(currentReel += 1);
//         }, reelSpeed);

//         reelLeftArrow.addEventListener('click', function () {
//             playReel(currentReel -= 1);
//         })
//         reelRightArrow.addEventListener('click' function () {
//             playReel(currentReel += 1);
//         });
//     }

// }
