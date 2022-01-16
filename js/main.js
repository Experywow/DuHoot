$(document).ready(function () {
    $(".hamburger.hamburger--spring").on("click", function (e) {
        e.preventDefault();
        $(".hamburger.hamburger--spring,.mobile-menu").toggleClass("is-active");
    });
});

$(document).ready(function () {
    $(".map-button").on("click", function (e) {
        e.preventDefault();
        $(".google-map").toggleClass("is-active");
    });
});

$(document).ready(function () {
    $('.search-form-select').select2({});
});





// $(function () {
//     $('.card-top').on('mouseover', function (e) {
//         e.preventDefault();
//         // $(this).find('img').addClass('is-active');
//         $(this).siblings('.card-info').find('.price').addClass('is-active');
//         $(this).siblings('.card-info').find('.rate-overall').addClass('is-active');
//         $(this).find('img').addClass('is-active');
//         $(this).find('card-title').addClass('is-active');
//         $('.card-top').addClass('is-active');
//     });
//     $('.card-top').on('mouseout', function (e) {
//         e.preventDefault();
//         $(this).siblings('.card-info').find('.price').removeClass('is-active');
//         $(this).siblings('.card-info').find('.rate-overall').removeClass('is-active');
//         $(this).find('img').removeClass('is-active');
//         $(this).find('card-title').removeClass('is-active');
//         $('.card-top').removeClass('is-active');
//     });
// });
