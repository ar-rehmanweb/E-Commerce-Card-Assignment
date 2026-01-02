function Product(image, title, desc, price, stock, likes, reviews) {
  this.image = image;
  this.title = title;
  this.price = price;
  this.desc = desc;
  this.stock = stock;
  this.likes = likes;
  this.reviews = reviews;
}

var p1 = new Product(
  "https://static0.pocketlintimages.com/wordpress/wp-content/uploads/wm/2025/09/iphone-17-pro-header-final.jpg?w=1600&h=900&fit=crop",
  "iPhone 17 Pro Max",
  "This is the newly launched iphone 17 pro max in white color.",
  600000,
  1290,
  19202,
  [
    {
      name: "John Doe",
      rating: 4.5,
      comment: "This is a nice product",
    },
    {
      name: "Abdur Rehman",
      rating: 3.5,
      comment: "This is a bad product",
    },
    {
      name: "Wasif Tai",
      rating: 2.1,
      comment: "This is a not better than samsung",
    },
  ]
);

var p2 = new Product(
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nkIKdeN_AbywvZlRBnOfOAUnGFImMEINHQ&s",
  "Dell XPS 15",
  "InfinityEdge layout for boundless creativity.",
  410000,
  190,
  1202,
  [
    {
      name: "Muhammad Ali",
      rating: 3.5,
      comment: "This is a nice product",
    },
    {
      name: "Shaheen afridi",
      rating: 2.5,
      comment: "This is a bad product",
    },
    {
      name: "Babar Azam",
      rating: 2.1,
      comment: "This is a not better than apple macbook",
    },
  ]
);

var p3 = new Product(
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop",
  "Sony WH-1000XM5",
  "Industry-leading noise isolation headphones.",
  35000,
  300,
  5200,
  [
     { name: "Virat Kohli", rating: 5, comment: "Silence is golden." }
  ]
);

var products = [p1, p2, p3];

console.log(products);

var prodGrid = document.getElementById("prod-grid");


prodGrid.innerHTML = "";
for (var i = 0; i < products.length; i++) {
  var p = products[i];
  prodGrid.innerHTML += `<div class="prod-card">
            <div class="bg-image" style="background-image: url('${p.image}')">

            </div>
            <h3>${p.title}</h3>
            <p class="desc">${p.desc}</p>
            <p class="price">PKR ${p.price}</p>
            <div class="likes-reviews-container">
                <p>likes: ${p.likes}</p>
                <div style="display: flex; gap: 10px; align-items: center;">
                    <p>reviews: ${p.reviews.length}</p>
                    <button class="view-reviews-btn" onclick="openModal(${i})">View Reviews</button>
                </div>
            </div>
        </div>`;
}

var modal = document.getElementById("review-modal");
var modalImg = document.getElementById("modal-img");
var modalTitle = document.getElementById("modal-title");
var modalDesc = document.getElementById("modal-desc");
var modalPrice = document.getElementById("modal-price");
var reviewsList = document.getElementById("reviews-list");

function openModal(index) {
    var product = products[index];
    

    modalImg.src = product.image;
    modalTitle.textContent = product.title;
    modalDesc.textContent = product.desc;
    modalPrice.textContent = "PKR " + product.price;

    reviewsList.innerHTML = "";
    if (product.reviews.length === 0) {
        reviewsList.innerHTML = "<p>No reviews yet.</p>";
    } else {
        for (var j = 0; j < product.reviews.length; j++) {
            var review = product.reviews[j];
            reviewsList.innerHTML += `
                <div class="review-item">
                    <div class="review-header">
                        <span class="review-name">${review.name}</span>
                        <span class="review-rating">★ ${review.rating}</span>
                    </div>
                    <p class="review-comment">"${review.comment}"</p>
                </div>
            `;
        }
    }

    modal.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
}

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        closeModal();
    }
});
