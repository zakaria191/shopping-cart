document.addEventListener("DOMContentLoaded", () => {
  const itemList = document.getElementById("item-list");
  const totalPrice = document.getElementById("total-price");

  itemList.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("plus-btn")) {
      const quantitySpan = target.previousElementSibling;
      const currentQuantity = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = currentQuantity + 1;
      updateTotalPrice();
    } else if (target.classList.contains("minus-btn")) {
      const quantitySpan = target.nextElementSibling;
      const currentQuantity = parseInt(quantitySpan.textContent);
      if (currentQuantity > 0) {
        quantitySpan.textContent = currentQuantity - 1;
        updateTotalPrice();
      }
    } else if (target.classList.contains("delete-btn")) {
      const item = target.closest(".item");
      itemList.removeChild(item);
      updateTotalPrice();
    } else if (target.classList.contains("like-btn")) {
      target.classList.toggle("active");
    }
  });

  function updateTotalPrice() {
    const items = document.querySelectorAll(".item");
    let total = 0;

    items.forEach((item) => {
      const price = parseFloat(item.querySelector(".item-price").textContent.slice(1));
      const quantity = parseInt(item.querySelector(".item-quantity").textContent);
      total += price * quantity;
    });

    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
  }
});
