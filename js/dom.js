
//getElementById and getElementByClassName Uses.

document.getElementById('apply-background').addEventListener('click', function () {
    // console.log('apply background');
    const friends = document.getElementsByClassName('friend-name');
    // console.log(friends);
    for (const friend of friends) {
        // console.log(friend);
        friend.style.backgroundColor = 'lightblue';
    }
});

document.getElementById('center-btn').addEventListener('click', function () {
    // console.log('centering');
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';

})