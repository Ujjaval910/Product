const productContainer = document.querySelector(".product-container");

const layoutReady = (cObj) => {
  return `
        <div class="card" key="${cObj.id}">
            <h2 class="card-title" title="${cObj.title}">
                ${cObj.title}
            </h2>
            <h3 class="card-subtitle">${cObj.category}</h3>
            <div class="card-image-container">
                <img src="${cObj.image}" alt="productImage" />
            </div>
            <p class="card-description">
                ${cObj.description}
            </p>
            <div class="card-footer">
                <p class="card-price">₹${cObj.price}</p>
                <button>Buy</button>
            </div>
        </div>
    `;
};

fetch("https://fakestoreapi.com/products?limit=6")
  .then((res) => res.json())
  .then((res) =>
    res.forEach((cObj) =>
      productContainer.insertAdjacentHTML("beforeend", layoutReady(cObj))
    )
  );
