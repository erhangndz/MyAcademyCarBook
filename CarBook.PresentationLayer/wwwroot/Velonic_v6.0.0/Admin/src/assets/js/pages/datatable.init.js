/**
 * Theme: Velonic - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Data tables 
 */


$(document).ready(function() {
    "use strict";

    // Default Datatable
    $('#basic-datatable').DataTable({
        keys: true,
        "language": {
            "paginate": {
                "previous": "<i class='ri-arrow-left-s-line'>",
                "next": "<i class='ri-arrow-right-s-line'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    //Buttons examples
    var table = $('#datatable-buttons').DataTable({
        lengthChange: false,
        buttons: ['copy', 'print'],
        "language": {
            "paginate": {
                "previous": "<i class='ri-arrow-left-s-line'>",
                "next": "<i class='ri-arrow-right-s-line'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Multi Selection Datatable
    $('#selection-datatable').DataTable({
        select: {
            style: 'multi'
        },
        "language": {
            "paginate": {
                "previous": "<i class='ri-arrow-left-s-line'>",
                "next": "<i class='ri-arrow-right-s-line'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    table.buttons().container()
            .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');


    // Alternative Pagination Datatable
    $('#alternative-page-datatable').DataTable({
        "pagingType": "full_numbers",
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Scroll Vertical Datatable
    $('#scroll-vertical-datatable').DataTable({
        "scrollY":        "350px",
        "scrollCollapse": true,
        "paging":         false,
        "language": {
            "paginate": {
                "previous": "<i class='ri-arrow-left-s-line'>",
                "next": "<i class='ri-arrow-right-s-line'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Scroll Vertical Datatable
    $('#scroll-horizontal-datatable').DataTable({
        "scrollX": true,
        "language": {
            "paginate": {
                "previous": "<i class='ri-arrow-left-s-line'>",
                "next": "<i class='ri-arrow-right-s-line'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Complex headers with column visibility Datatable
    $('#complex-header-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='ri-arrow-left-s-line'>",
                "next": "<i class='ri-arrow-right-s-line'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        },
        "columnDefs": [ {
            "visible": false,
            "targets": -1
        } ]
    });

    // Row created callback Datatable
    $('#row-callback-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='ri-arrow-left-s-line'>",
                "next": "<i class='ri-arrow-right-s-line'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        },
        "createdRow": function ( row, data, index ) {
            if ( data[5].replace(/[\$,]/g, '') * 1 > 150000 ) {
                $('td', row).eq(5).addClass('text-danger');
            }
        }
    });

    // State Saving Datatable
    $('#state-saving-datatable').DataTable({
        stateSave: true,
        "language": {
            "paginate": {
                "previous": "<i class='ri-arrow-left-s-line'>",
                "next": "<i class='ri-arrow-right-s-line'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Fixed header Datatable
    // $('#fixed-header-datatable').DataTable( {
    //     fixedHeader: true,
    // });

    // Fixed Columns Datatable
    $('#fixed-columns-datatable').DataTable( {
        scrollY: 300,
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        fixedColumns: true
    });

    $(".dataTables_length select").addClass('form-select form-select-sm');
    $(".dataTables_length label").addClass('form-label');

} );


$(document).ready(function() {
    var table = $('#fixed-header-datatable').DataTable( {
        responsive: true,
        "language": {
            "paginate": {
                "previous": "<i class='ri-arrow-left-s-line'>",
                "next": "<i class='ri-arrow-right-s-line'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    } );
 
    new $.fn.dataTable.FixedHeader( table );
} );
    