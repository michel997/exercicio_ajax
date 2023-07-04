$(document).ready(function() {
        const endpoint = `https://api.github.com/users/ogiansouza`

        fetch(endpoint)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (json) {
            const followers = json.followers
            const follow = json.following
            const repo = json.public_repos

            $('#followers').html(followers);
            $('#follow').html(follow);
            $('#repo').html(repo);
        })
})
