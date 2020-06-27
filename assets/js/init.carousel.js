/**
 * mod_directorycarousel
 * Copyright 2020 Tom F. Vanbrabant
 * Licensed under: SEE LICENSE IN https://github.com/TVBZ/mod_directorycarousel/blob/master/LICENSE
 */


// Get module params
const dcModuleSettings = Joomla.getOptions('mod_directorycarousel');

jQuery(document).ready(function() {

    // Loop over each module
    const dcModules = Object.keys(dcModuleSettings);
    for (const id of dcModules) {

        const params = dcModuleSettings[id];
        const target = "#owl-carousel-" + id; 

        // Callback to evaluate true/false params
        function check(parameter) {
            return params[parameter] === "1";
        };

        // Initialize carousel
        const output = {
            items: params.items,
            margin: params.margin,
            // rtl: false,
            loop: check("loop"),
            center: check("center"),
            mouseDrag: check("mousedrag"),
            touchDrag: check("touchdrag"),
            // pullDrag: check("pulldrag"),
            // freeDrag: check("freedrag"),
            stagePadding: params.stagepadding,
            autoWidht: check("autowidht"),
            autoHeight: check("autoheight"),
            startPosition: params.startposition - 1,
            nav: check("nav"),
            rewind: check("rewind"),
            slideBy: params.slideby,
            dots: check("dots"),
            lazyLoad: check("lazyload"),
            autoplay: check("autoplay"),
            smartSpeed: params.smartspeed,
            autoplayTimeout: params.autoplaytimeout,
            autoplayHoverPause: check("autoplayhoverpause"),
            responsive: check("isresponsive") ? JSON.parse(params.responsive) : ""
        };

        console.log(output);
        jQuery(target).owlCarousel(output);
        console.log(target + " initialized.")

    };

});
