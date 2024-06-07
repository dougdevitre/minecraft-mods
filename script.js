document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");
    const scoreForm = document.getElementById("scoreForm");
    const friendForm = document.getElementById("friendForm");

    registrationForm.addEventListener("submit", handleRegistration);
    scoreForm.addEventListener("submit", handleScoreSubmission);
    friendForm.addEventListener("submit", handleFriendAddition);

    displayData();

    function handleRegistration(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ username, email });
        localStorage.setItem("users", JSON.stringify(users));

        displayData();
        registrationForm.reset();
    }

    function handleScoreSubmission(event) {
        event.preventDefault();
        const player = document.getElementById("player").value;
        const score = parseInt(document.getElementById("score").value);

        let scores = JSON.parse(localStorage.getItem("scores")) || [];
        scores.push({ player, score });
        localStorage.setItem("scores", JSON.stringify(scores));

        displayData();
        scoreForm.reset();
    }

    function handleFriendAddition(event) {
        event.preventDefault();
        const yourUsername = document.getElementById("yourUsername").value;
        const friendUsername = document.getElementById("friendUsername").value;

        let friends = JSON.parse(localStorage.getItem("friends")) || [];
        friends.push({ yourUsername, friendUsername });
        localStorage.setItem("friends", JSON.stringify(friends));

        displayData();
        friendForm.reset();
    }

    function displayData() {
        const userList = document.getElementById("userList");
        const scoreList = document.getElementById("scoreList");
        const friendList = document.getElementById("friendList");

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const scores = JSON.parse(localStorage.getItem("scores")) || [];
        const friends = JSON.parse(localStorage.getItem("friends")) || [];

        userList.innerHTML = users.map(user => `<li>${user.username} (${user.email})</li>`).join("");
        scoreList.innerHTML = scores.map(score => `<li>${score.player}: ${score.score}</li>`).join("");
        friendList.innerHTML = friends.map(friend => `<li>${friend.yourUsername} is friends with ${friend.friendUsername}</li>`).join("");
    }
});
