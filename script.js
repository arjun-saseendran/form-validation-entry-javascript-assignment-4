$(function () {

    $.validator.addMethod("customEmail", function (value, element) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return this.optional(element) || emailPattern.test(value);
    }, "Please enter a valid email address");

    $("form[name='registration']").validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
                maxlength: 50
            },
            email: {
                required: true,
                email: true
            },
            mobile: {
                required: true,
                minlength: 10,
                maxlength: 14
            },
            age: {
                required: true,
                number: true,
                range: [18, 120]
            },
            gender: {
                required: true,
                minlength: 4,
                maxlength: 15
            },
            address: {
                maxlength: 50
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must be at least 3 characters long",
                maxlength: "Your name must be no more than 50 characters long"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address" // Error message for invalid email
            },
            mobile: {
                required: "Please enter your mobile number",
                minlength: "Your mobile number must be at least 10 characters long",
                maxlength: "Your mobile number must be no more than 14 characters long"
            },
            age: {
                required: "Please enter your age",
                number: "Please enter a valid number",
                range: "Your age must be between 18 and 120"
            },
            gender: {
                required: "Please select your gender",
                minlength: "Gender description must be at least 4 characters long",
                maxlength: "Gender description must be no more than 15 characters long"
            },
            address: {
                maxlength: "Address must be no more than 50 characters long"
            }
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});