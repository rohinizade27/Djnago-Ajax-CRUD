// Update Django Ajax Call
$("form#updateUser").submit(function() {
    var idInput = $('input[name="formId"]').val().trim();
    var nameInput = $('input[name="formName"]').val().trim();
    var addressInput = $('input[name="formAddress"]').val().trim();
    var ageInput = $('input[name="formAge"]').val().trim();
    if (nameInput && addressInput && ageInput) {
        // Create Ajax Call
        $.ajax({
//            url: '{% url "crud_ajax_update" %}',
              url: '/ajax/crud/update/',
            data: {
                'id': idInput,
                'name': nameInput,
                'address': addressInput,
                'age': ageInput
            },
            dataType: 'json',
            success: function (data) {
                if (data.user) {
                  updateToUserTabel(data.user);
                }
            }
        });
       } else {
        alert("All fields must have a valid value.");
    }
    $('form#updateUser').trigger("reset");
    $('#myModal').modal('hide');
    return false;
});

function editUser(id) {
  if (id) {
    tr_id = "#user-" + id;
    name = $(tr_id).find(".userName").text();
    address = $(tr_id).find(".userAddress").text();
    age = $(tr_id).find(".userAge").text();
    $('#form-id').val(id);
    $('#form-name').val(name);
    $('#form-address').val(address);
    $('#form-age').val(age);
  }
}
function updateToUserTabel(user){
    $("#userTable #user-" + user.id).children(".userData").each(function() {
        var attr = $(this).attr("name");
        if (attr == "name") {
          $(this).text(user.name);
        } else if (attr == "address") {
          $(this).text(user.address);
        } else {
          $(this).text(user.age);
        }
      });
}
