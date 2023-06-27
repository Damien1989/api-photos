const url = "https://picsum.photos/v2/list";

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    });

