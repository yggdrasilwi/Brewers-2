// 1. Wait for the page to finish loading
document.addEventListener('DOMContentLoaded', () => {

    // --- DONATION BUTTON INTERACTION ---
    // Select all buttons (like your Give $25, $50 buttons)
    const donationButtons = document.querySelectorAll('button');

    donationButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Change the text temporarily to show it worked
            const originalText = button.innerText;
            button.innerText = "Processing...";
            button.style.backgroundColor = "#006400"; // Deep green from your CSS
            
            setTimeout(() => {
                alert("Thank you for supporting the Brewers Community Foundation!");
                button.innerText = originalText;
                button.style.backgroundColor = ""; // Reset to CSS default
            }, 500);
        });
    });

    // --- FORM SUBMISSION INTERACTION ---
    // This targets your Grant Inquiry form
    const grantForm = document.querySelector('form');
    
    if (grantForm) {
        grantForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevents the page from refreshing
            
            // Get the name from the input field
            const nameInput = document.querySelector('input[type="text"]');
            const userName = nameInput ? nameInput.value : "Friend";

            alert(`Thank you, ${userName}! Your grant inquiry has been sent to the Foundation.`);
            grantForm.reset(); // Clears the form
        });
    }
});

// Get the button
const topBtn = document.getElementById("backToTop");

// When the user scrolls down 300px from the top, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // This makes it slide up instead of jumping
    });
});



