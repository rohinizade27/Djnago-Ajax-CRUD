// Create Django Ajax Call
$("form#addUser").submit(function() {
    console.log("hello")
    var nameInput = $('input[name="name"]').val().trim();
    var addressInput = $('input[name="address"]').val().trim();
    var ageInput = $('input[name="age"]').val().trim();
    if (nameInput && addressInput && ageInput) {
        // Create Ajax Call
        $.ajax({
            //url: '{% url "crud_ajax_create" %}',
            url: '/ajax/crud/create/',
            data: {
                'name': nameInput,
                'address': addressInput,
                'age': ageInput
            },
            dataType: 'json',
            success: function (data) {
                if (data.user) {
                  appendToUsrTable(data.user);
                }
            }
        });
      } else {
        alert("All fields must have a valid value.");
    }
    $('form#addUser').trigger("reset");
    return false;
});
function appendToUsrTable(user) {
  $("#userTable > tbody:last-child").append(`
        <tr id="user-${user.id}">
            <td class="userName" name="name">${user.name}</td>
            '<td class="userAddress" name="address">${user.address}</td>
            '<td class="userAge" name="age">${user.age}</td>
            '<td align="center">
                <button class="btn btn-success form-control" onClick="editUser(${user.id})" data-toggle="modal" data-target="#myModal")">EDIT</button>
            </td>
            <td align="center">
                <button class="btn btn-danger form-control" onClick="deleteUser(${user.id})">DELETE</button>
            </td>
        </tr>
    `);
}

