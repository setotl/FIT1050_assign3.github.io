Fancybox.bind("[data-fancybox]");

// if clicked, call function
$('button').click(filterItems);

function filterItems() {
    let button = this;          
    let selector = $(button).data('filter');      //get value of THIS BUTTON'S data-filter sttribute
    console.log(selector);

    $('#gallery-45 img').not(selector).hide(100);      // first hide all exisiting entities
    $(selector).show(100);             // only show the selected filter
}