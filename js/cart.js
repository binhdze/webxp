<script>
    document.addEventListener('DOMContentLoaded', function () {
        const cartContainer = document.getElementById('cart-items');

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                const name = this.dataset.name;
                const price = this.dataset.price;
                const img = this.dataset.img;

                const cartItemHTML = `
                    <div class="single-cart-item">
                        <a href="#" class="product-image">
                            <img src="${img}" class="cart-thumb" alt="">
                            <div class="cart-item-desc">
                                <span class="product-remove"><i class="fa fa-close" aria-hidden="true"></i></span>
                                <span class="badge">Mới</span>
                                <h6>${name}</h6>
                                <p class="price">VNĐ ${parseInt(price).toLocaleString()}</p>
                            </div>
                        </a>
                    </div>
                `;

                cartContainer.insertAdjacentHTML('beforeend', cartItemHTML);
            });
        });
    });
</script>
