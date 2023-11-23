/**
 * Theme: Velonic - Responsive Bootstrap 5 Admin Dashboard
 * Author: Techzaa
 * Module/App: Inbox 
 */


 // Email Checked
$('input:checkbox').change(function(){
    if($(this).is(":checked")) {
        $(this).parent().parent().parent().parent().addClass("mail-selected");
    } else {
        $(this).parent().parent().parent().parent().removeClass("mail-selected");
    }
});

// Snow theme
var quill = new Quill('#snow-editor', {
    theme: 'snow',
    modules: {
        'toolbar': [['bold', 'italic', 'underline', 'strike'], [{ 'color': [] }], ['blockquote', 'code-block'], [{ 'list': 'ordered' }, { 'list': 'bullet' }],['link', 'image', 'video']]
    },
});