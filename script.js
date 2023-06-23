fetch("https://picsum.photos/v2/list")
    .then(reponse => reponse.json())
    .then(reponse2 => console.log(reponse.url))
