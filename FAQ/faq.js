document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;
        
        // Toggle 'active' class to show/hide answer
        faqItem.classList.toggle('active');
    });
});
