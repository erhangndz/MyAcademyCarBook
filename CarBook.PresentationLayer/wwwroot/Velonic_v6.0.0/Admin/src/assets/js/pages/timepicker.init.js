/**
 * Theme: Velonic - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Time Picker
 */

$('#timepicker').timepicker({
    "showSeconds": true,
    icons: {
        up: 'ri-arrow-up-s-line',
        down: 'ri-arrow-down-s-line'
    },
    appendWidgetTo: "#timepicker-input-group1"
});

$('#timepicker2').timepicker({
    "showSeconds": true,
    showMeridian: false,
    icons: {
        up: 'ri-arrow-up-s-line',
        down: 'ri-arrow-down-s-line'
    },
    appendWidgetTo: "#timepicker-input-group2"
});

$('#timepicker3').timepicker({
    "showSeconds": true,
    minuteStep: 15,
    icons: {
        up: 'ri-arrow-up-s-line',
        down: 'ri-arrow-down-s-line'
    },
    appendWidgetTo: "#timepicker-input-group3"
});

//Flat picker
$('#basic-datepicker').flatpickr();

$('#datetime-datepicker').flatpickr({
    enableTime: true,
    dateFormat: "Y-m-d H:i"
});

$('#humanfd-datepicker').flatpickr({
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
});

$('#minmax-datepicker').flatpickr({
    minDate: "2020-01",
    maxDate: "2020-03"
});

$('#disable-datepicker').flatpickr({
    onReady: function () {
        this.jumpToDate("2025-01")
    },
    disable: ["2025-01-10", "2025-01-21", "2025-01-30", new Date(2025, 4, 9)],
    dateFormat: "Y-m-d",
});

$('#multiple-datepicker').flatpickr({
    mode: "multiple",
    dateFormat: "Y-m-d"
});

$('#conjunction-datepicker').flatpickr({
    mode: "multiple",
    dateFormat: "Y-m-d",
    conjunction: " :: "
});

$('#range-datepicker').flatpickr({
    mode: "range"
});

$('#inline-datepicker').flatpickr({
    inline: true
});

$('#basic-timepicker').flatpickr({
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i"
});

$('#24hours-timepicker').flatpickr({
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
});

$('#minmax-timepicker').flatpickr({
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    minDate: "16:00",
    maxDate: "22:30",
});

$('#preloading-timepicker').flatpickr({
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    defaultDate: "01:45"
});