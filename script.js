// Mobile navigation

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#main-navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        const expanded =
            menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute(
            "aria-expanded",
            String(!expanded)
        );

        navigation.classList.toggle(
            "open",
            !expanded
        );

    });

}


// Contact form validation

const form = document.querySelector("#contact-form");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.querySelector("#name");

        const email =
            document.querySelector("#email");

        const message =
            document.querySelector("#message");

        const nameError =
            document.querySelector("#name-error");

        const emailError =
            document.querySelector("#email-error");

        const messageError =
            document.querySelector("#message-error");

        const status =
            document.querySelector("#form-status");


        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";
        status.textContent = "";


        let valid = true;


        if (name.value.trim() === "") {

            nameError.textContent =
                "Please enter your name.";

            valid = false;
        }


        if (
            email.value.trim() === "" ||
            !email.validity.valid
        ) {

            emailError.textContent =
                "Please enter a valid email address.";

            valid = false;
        }


        if (message.value.trim() === "") {

            messageError.textContent =
                "Please enter your message.";

            valid = false;
        }


        if (valid) {

            status.textContent =
                "Thank you! Your message has been validated successfully.";

            form.reset();

        }

    });

}