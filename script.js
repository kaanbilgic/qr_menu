// Tüm kategori başlıklarını seç
const categoryTitles = document.querySelectorAll('.category-title');

// Her başlık için tıklama olayı ekle
categoryTitles.forEach(title => {
    title.addEventListener('click', () => {
        // Tıklanan başlığın altındaki içerik kısmını al
        const categoryContent = title.nextElementSibling;

        // İçeriği göster ya da gizle
        if (categoryContent.style.display === 'block') {
            categoryContent.style.display = 'none';
        } else {
            categoryContent.style.display = 'block';
        }
    });
});
