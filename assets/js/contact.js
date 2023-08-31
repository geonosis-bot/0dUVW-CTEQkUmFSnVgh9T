// -----------------------------------------------------------------
// Constants
// -----------------------------------------------------------------
const submitFormURL =
  "https://api.golee.dev/hermes/mailer/send-email-from-organization-site";

// Base rules used in every form
const baseRules = {
  name: {
    required: true,
  },
  email: {
    required: true,
    email: true,
  },
  phone: {
    required: true,
    minlength: 9,
  },
  privacy: {
    required: true,
  },
};

// Base validation messages used in every form
const baseValidationMsg = {
  name: {
    required: "Campo obbligatorio",
  },
  email: {
    required: "Campo obbligatorio",
  },
  phone: {
    required: "Campo obbligatorio",
    minlenght: "Inserisci prefisso e numero (minimo 8 cifre)",
  },
  privacy: {
    required: "Per inviare la richiesta il consenso Privacy è necessario",
  },
};

// Compose form data
function createFormDataJson(form) {
  var formData = {};
  for (item of $(form).serializeArray()) {
    formData[item.name] = item.value;
  }
  formData['templateId'] = "d-d08314b7c9c2414cb1567088c8964d56";
  return JSON.stringify(formData);
}

// Handle response
function handleResponse(success, formId) {
  console.log(success);
  if (!!success) {
    $(`#${formId}`).hide();
    $("#form-success").fadeIn();
  } else {
    $("#form-error").fadeIn();
  }
}

// ---------------------------------------------------------------
// Init document
// ---------------------------------------------------------------
$(document).ready(function () {
  // ---------------------------------------------------------------
  // Contact form
  // ---------------------------------------------------------------
  $("#contactFormSupport form").validate({
    rules: {
      ...baseRules,
      message: {
        required: true,
        minlength: 20,
      },
    },
    messages: {
      ...baseValidationMsg,
      message: {
        required: "Campo obbligatorio",
        minlength: "Sono richiesti almeno 20 caratteri",
      },
    },
    submitHandler: function (form) {
      try {
        $.ajax({
          url: submitFormURL,
          data: createFormDataJson(form),
          processData: false,
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          type: "POST",
        }).done(function (res) {
          handleResponse(true, "contactFormSupport");
        });
      } catch (err) {
        handleResponse(false, "contactFormSupport");
      }
    },
  });
});
