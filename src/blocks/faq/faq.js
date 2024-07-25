document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.faq__list')) {
        document.querySelector('.faq__list').addEventListener('click', function (e) {
            if (e.target.closest('.faq__item')) {
                e.target.closest('.faq__item').classList.toggle('active');
            }
        });
    }
});
