

$("#dashboard-nav").click(function (){
    clearClasses();
    $("#dashboard").removeClass('d-none');
    $("#dashboard-nav").find('a').addClass('active');
})
$("#customer-manage-nav").click(function (){
    clearClasses();
    $("#customer-manage").removeClass('d-none')
    $("#customer-manage-nav").find('a').addClass('active');
})
$("#item-manage-nav").click(function (){
    clearClasses();
    $("#item-manage").removeClass('d-none');
    $("#item-manage-nav").find('a').addClass('active');
})
$("#place-order-nav").click(function (){
    clearClasses();
    $("#place-order").removeClass('d-none');
    $("#place-order-nav").find('a').addClass('active');
})
$("#search-order-nav").click(function (){
    clearClasses();
    $("#search-order").removeClass('d-none');
    $("#search-order-nav").find('a').addClass('active');
})

function clearClasses(){
    $("#dashboard").addClass('d-none');
    $("#dashboard-nav").find('a').removeClass('active');
    $("#customer-manage").addClass('d-none');
    $("#customer-manage-nav").find('a').removeClass('active');
    $("#item-manage").addClass('d-none');
    $("#item-manage-nav").find('a').removeClass('active');
    $("#place-order").addClass('d-none');
    $("#place-order-nav").find('a').removeClass('active');
    $("#search-order").addClass('d-none');
    $("#search-order-nav").find('a').removeClass('active');
}