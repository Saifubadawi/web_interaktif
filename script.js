const products = [
    {
        name: "Stroberi",
        image: "img/foto produk.png",
        bgImage: "url('https://i.pinimg.com/736x/e2/bb/e7/e2bbe74c4066dafbf2b23ebf7d904b50.jpg')"
    },
    {
        name: "Coklat",
        image: "img/produk 2.png",
        bgImage: "url('https://i.pinimg.com/736x/68/92/0d/68920d63b30bcfd4167c7b00bb11105f.jpg')"
    },
    {
        name: "Banana",
        image: "img/produk3.png",
        bgImage: "url('https://i.pinimg.com/736x/66/b9/a8/66b9a8c366ccc96f83115e6481a4c29d.jpg')"

    },
    {
        name: "adit",
        image: "img/adit.png",
        bgImage: "url('https://i.pinimg.com/736x/f0/82/19/f082191dddcf73155bc8a6774c7b73e2.jpg')"

    }
];

function nextProduct(index) {
    const product = products[index];
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-image").src = product.image;
    document.querySelector(".container").style.backgroundImage = product.bgImage;

    ketikTeks(product.name, "product-name");
}

