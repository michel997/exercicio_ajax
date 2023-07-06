$(document).ready(function() {
        const user = 'michel997'
        const endpoint = `https://api.github.com/users/${user}`

        fetch(endpoint)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (json) {
            const followers = json.followers
            const follow = json.following
            const repo = json.public_repos
            const url = json.html_url
            const name = json.name
            const username = json.login
            const image = json.avatar_url

            $('#followers').html(followers);
            $('#follow').html(follow);
            $('#repo').html(repo);
            $('#name').html(name);
            $('#user').html(username)
            $('#github_link').attr('href', url);
            $('#img').attr('src', image)
        })
})
