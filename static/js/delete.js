// Delete Django Ajax Call
function deleteUser(id) {
  var action = confirm("Are you sure you want to delete this user?");
  if (action != false) {
    $.ajax({
//        url: '{% url "crud_ajax_delete" %}',
          url: '/ajax/crud/delete/',
        data: {
            'id': id,
        },
        dataType: 'json',
        success: function (data) {
            if (data.deleted) {
              $("#userTable #user-" + id).remove();
            }
        }
    });
  }
}