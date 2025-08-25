// Script para adicionar funcionalidade aos botões de adicionar ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.parentElement.querySelector('.product-title').textContent;
        alert(`Produto "${productName}" adicionado ao carrinho!`);
    });
});

// Script para o formulário de contato
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`);
    this.reset();
});