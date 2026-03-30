document.addEventListener('DOMContentLoaded', () => {
    // 1. Specific Donation Logic
    const donationButtons = document.querySelectorAll('.btn-donate'); // Only target donation buttons
    donationButtons.forEach(button => {
        button.addEventListener('click', () => {
            const originalText = button.innerText;
            button.innerText = "Processing...";
            button.disabled = true; // Prevent double-clicks
            
            setTimeout(() => {
                alert("Thank you for supporting the Brewers Community Foundation!");
                button.innerText = originalText;
                button.disabled = false;
            }, 800);
        });
    });

    // 2. Improved Form Handling
    const grantForm = document.getElementById('grant-form');
    if (grantForm) {
        grantForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const orgName = document.getElementById('org-name').value;
            const pillar = document.getElementById('pillar-select').value;

            alert(`Success! We've received the inquiry for ${orgName} regarding the ${pillar} pillar.`);
            grantForm.reset();
        });
    }
});

// 3. Back to Top Logic (Outside DOMContentLoaded is fine)
const topBtn = document.getElementById("backToTop");

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

const stories = [
    { text: "\"BCF's scholarship helped me become the first in my family to attend college.\"", author: "— Marcus, Education" },
    { text: "\"The meal program ensured my kids had dinner every night during a very tough winter.\"", author: "— Sarah, Basic Needs" },
    { text: "\"Having a safe park to play baseball in kept my son active and focused.\"", author: "— David, Recreation" }
];

let currentStory = 0;
const storyText = document.getElementById('story-text');
const storyAuthor = document.getElementById('story-author');

document.getElementById('nextStory').addEventListener('click', () => {
    currentStory = (currentStory + 1) % stories.length;
    updateStory();
});

document.getElementById('prevStory').addEventListener('click', () => {
    currentStory = (currentStory - 1 + stories.length) % stories.length;
    updateStory();
});

function updateStory() {
    storyText.innerText = stories[currentStory].text;
    storyAuthor.innerText = stories[currentStory].author;
}

const stories = [
    { 
        text: "\"BCF's scholarship helped me become the first in my family to attend college. I'm now a junior at UWM!\"", 
        author: "— Marcus, Education",
        image: "https://images.unsplash.com/photo-1523240715630-974bb7ad1bd2?q=80&w=2070" 
    },
    { 
        text: "\"The meal program ensured my kids had dinner every night during a very tough winter.\"", 
        author: "— Sarah, Basic Needs",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
    },
    { 
        text: "\"Having a safe park to play baseball in kept my son active and focused.\"", 
        author: "— David, Recreation",
        image: "https://images.unsplash.com/photo-1515003191147-3801648399af?q=80&w=2067"
    }
];

let currentStory = 0;
const storyText = document.getElementById('story-text');
const storyAuthor = document.getElementById('story-author');
const storyImage = document.getElementById('story-image');

document.getElementById('nextStory').addEventListener('click', () => {
    currentStory = (currentStory + 1) % stories.length;
    updateStory();
});

document.getElementById('prevStory').addEventListener('click', () => {
    currentStory = (currentStory - 1 + stories.length) % stories.length;
    updateStory();
});

function updateStory() {
    storyText.innerText = stories[currentStory].text;
    storyAuthor.innerHTML = `<strong>${stories[currentStory].author}</strong>`;
    storyImage.src = stories[currentStory].image;
}