$(document).ready(function () {
    const socket = io('http://localhost:3000');
    const owl = $(".owl-carousel").owlCarousel({
        autoWidth: true,
        nav: true,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    });

    function changePage(i) {
        owl.trigger("to.owl.carousel", [i, 300]);
    }

    let i = 0;
    changePage(i);

    socket.on('getPage', (data) => {
        changePage(i = data);
    })

    owl.on('changed.owl.carousel', function (event) {
        socket.emit('changePage', event.item.index);
    })

});

