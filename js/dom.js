
//## getElementById and getElementByClassName Uses.

document.getElementById('apply-background').addEventListener('click', function () {
    // console.log('apply background');
    const friends = document.getElementsByClassName('friend-name');
    // console.log(friends);
    for (const friend of friends) {
        // console.log(friend);
        friend.style.backgroundColor = 'lightblue';
    }
});

//## specific akta element  a stye use kora
document.getElementById('center-btn').addEventListener('click', function () {
    // console.log('centering');
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';

})

//## add an element using evet listner
document.getElementById('add-friend'), addEventListener('click', function () {
    // console.log('adding');
    const friendContainer = document.getElementById('friends');
    const friendadd = document.createElement('div');
    friendadd.classList.add('friend');

    friendadd.innerHTML = `
<h3 class="friend-name">New Friend</h3>
 <p>Someting new Added</p>
`;

    friendContainer.appendChild(friendadd);

})
