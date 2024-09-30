const ulEl = document.querySelector("ul");

fetch("https://dummyjson.com/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    for (const product of data.products) {
      const listItem = document.createElement("li");
      listItem.innerText = product.title;
      const img = document.createElement("img");
      img.setAttribute("src", product.images[0]);
      const priceTag = document.createElement("p");
      priceTag.innerText = `${product.price}$`;
      listItem.appendChild(img);
      listItem.appendChild(priceTag);
      ulEl.appendChild(listItem);
    }
  });
