$(document).ready(function() {
    newFunction();
});

function newFunction() {
    var app = {
        settings: {
            container: $('.calendar'),
            calendar: $('.front'),
            days: $('.weeks span'),
            form: $('.back'),
            input: $('.back input'),
            buttons: $('.back button')
        },

        init: function () {
            instance = this;
            settings = this.settings;
            this.bindUIActions();
        },

        swap: function (currentSide, desiredSide) {
            settings.container.toggleClass('flip');
            currentSide.fadeOut(900, function() {
                currentSide.hide(); // Ensure it's completely hidden
                desiredSide.fadeIn(900); // Fade in the desired side
            });
        },

        bindUIActions: function () {
            settings.days.on('click', function () {
                instance.swap(settings.calendar, settings.form);
                settings.input.focus();
            });

            settings.buttons.on('click', function () {
                instance.swap(settings.form, settings.calendar);
            });
        }
    };

    app.init();
}