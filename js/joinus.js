document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.getElementById("signInForm");
    const signUpForm = document.getElementById("signUpForm");
    const showSignIn = document.getElementById("showSignIn");
    const showSignUp = document.getElementById("showSignUp");
    const switchToSignUp = document.getElementById("switchToSignUp");
    const switchToSignIn = document.getElementById("switchToSignIn");

    // Switch to Sign Up
    function showSignUpForm() {
        signInForm.classList.add("hidden");
        signUpForm.classList.remove("hidden");
        showSignUp.classList.add("active");
        showSignIn.classList.remove("active");
    }

    // Switch to Sign In
    function showSignInForm() {
        signUpForm.classList.add("hidden");
        signInForm.classList.remove("hidden");
        showSignIn.classList.add("active");
        showSignUp.classList.remove("active");
    }

    // Event Listeners
    showSignUp.addEventListener("click", showSignUpForm);
    showSignIn.addEventListener("click", showSignInForm);
    switchToSignUp.addEventListener("click", showSignUpForm);
    switchToSignIn.addEventListener("click", showSignInForm);
});
document.addEventListener("DOMContentLoaded", function () {
    const signInForm = document.getElementById("signInForm");
    const signUpForm = document.getElementById("signUpForm");
    const showSignIn = document.getElementById("showSignIn");
    const showSignUp = document.getElementById("showSignUp");
    const switchToSignUp = document.getElementById("switchToSignUp");
    const switchToSignIn = document.getElementById("switchToSignIn");

    // Default sign-in credentials (stored only once)
    if (!localStorage.getItem("users")) {
        const defaultUsers = [
            { email: "admin@example.com", password: "admin123" },
            { email: "user@example.com", password: "password123" }
        ];
        localStorage.setItem("users", JSON.stringify(defaultUsers));
    }

    // Toggle Sign-In & Sign-Up Forms
    function showSignUpForm() {
        signInForm.classList.add("hidden");
        signUpForm.classList.remove("hidden");
        showSignUp.classList.add("active");
        showSignIn.classList.remove("active");
    }

    function showSignInForm() {
        signUpForm.classList.add("hidden");
        signInForm.classList.remove("hidden");
        showSignIn.classList.add("active");
        showSignUp.classList.remove("active");
    }

    showSignUp.addEventListener("click", showSignUpForm);
    showSignIn.addEventListener("click", showSignInForm);
    switchToSignUp.addEventListener("click", showSignUpForm);
    switchToSignIn.addEventListener("click", showSignInForm);

    // Sign In Functionality
    document.querySelector("#signInForm form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const email = document.querySelector("#signInForm input[type='email']").value;
        const password = document.querySelector("#signInForm input[type='password']").value;

        let users = JSON.parse(localStorage.getItem("users"));
        const validUser = users.find(user => user.email === email && user.password === password);

        if (validUser) {
            alert("✅ Sign-in successful! Welcome to Rail-Tech Hub.");
        } else {
            alert("❌ Invalid email or password. Try again.");
        }
    });

    // Sign Up Functionality (Stores New Users Locally)
    document.querySelector("#signUpForm form").addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.querySelector("#signUpForm input[type='text']").value;
        const email = document.querySelector("#signUpForm input[type='email']").value;
        const password = document.querySelector("#signUpForm input[type='password']").value;

        let users = JSON.parse(localStorage.getItem("users"));

        // Check if email is already registered
        if (users.some(user => user.email === email)) {
            alert("⚠️ Email already registered. Please sign in.");
            return;
        }

        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert(`✅ Welcome, ${fullName}! Your account has been created.`);
        showSignInForm();
    });
});
document.querySelector("#signInForm form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.querySelector("#signInForm input[type='email']").value;
    const password = document.querySelector("#signInForm input[type='password']").value;

    let users = JSON.parse(localStorage.getItem("users"));
    const validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        alert("✅ Sign-in successful! Redirecting...");
        window.location.href = "index.html"; // Redirect to home page
    } else {
        alert("❌ Invalid email or password. Try again.");
    }
});
document.querySelector("#signInForm form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.querySelector("#signInForm input[type='email']").value;
    const password = document.querySelector("#signInForm input[type='password']").value;

    let users = JSON.parse(localStorage.getItem("users"));
    const validUser = users?.find(user => user.email === email && user.password === password);

    if (validUser) {
        alert("✅ Sign-in successful! Redirecting...");
        localStorage.setItem("isLoggedIn", "true"); // Store login status
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        alert("❌ Invalid email or password. Try again.");
    }
});
document.querySelector("#signInForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const email = document.querySelector("#signInForm input[type='email']").value;
    const password = document.querySelector("#signInForm input[type='password']").value;

    let users = JSON.parse(localStorage.getItem("users"));
    const validUser = users?.find(user => user.email === email && user.password === password);

    if (validUser) {
        alert("✅ Sign-in successful! Redirecting...");
        localStorage.setItem("isLoggedIn", "true"); // Store login status
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        alert("❌ Invalid email or password. Try again.");
    }
});