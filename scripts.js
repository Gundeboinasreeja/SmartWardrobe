// Array of responses with keywords, colors, and messages
const responses = [
    { keywords: ["casual", "day out"], response: "Try a floral midi dress(maroon/white) with a crossbody bag and hoop earrings." },
    { keywords: ["brunch", "friends"], response: "Go for a wrap dress, a small clutch, and statement earrings." },
    { keywords: ["coffee", "date"], response: "A cozy sweater with jeans, a tote bag, and simple studs." },
    { keywords: ["shopping", "day"], response: "Wear a loose, comfortable T-shirt dress, a backpack, and stud earrings." },
    { keywords: ["movies"], response: "Wear a denim jacket over a T-shirt and leggings, with a crossbody bag and small hoop earrings." },
    { keywords: ["picnic"], response: "A gingham dress, a woven straw bag, and pearl earrings." },
    { keywords: ["wedding","anniversary"], response: "An elegant saree with gold jewelry and a clutch bag." },
    { keywords: ["party", "evening"], response: "A sparkly cocktail dress with a small handbag and chandelier earrings./wear a fancy red saree with red stone earrings and with neckset, heels" },
    { keywords: ["gym"], response: "Wear a tank top and leggings with a duffle bag and no jewelry." },
    { keywords: ["work"], response: "A blazer with tailored pants, a tote bag, and stud earrings." },
    { keywords: ["interview","office meeting"], response: "A formal blouse with trousers, a structured bag, and simple jewelry." },
    { keywords: ["beach"], response: "A flowy maxi dress, a straw hat, and a beach tote with minimal jewelry." },
    { keywords: ["winter"], response: "A wool coat, scarf, and ankle boots with a handbag." },
    { keywords: ["summer"], response: "A sundress, sunglasses, and a shoulder bag with hoop earrings." },
    { keywords: ["dinner", "date"], response: "A fitted black dress, a clutch, and diamond earrings." },

    // Color-based responses
    { keywords: ["red","red colour","kurti"], response: "Consider a red gown with gold statement earrings, red stiletto heels, and a matching clutch bag." },
    { keywords: ["blue","blue color"], response: "A blue cocktail dress with silver hoops, navy blue pumps, and a crossbody bag would look stunning." },
    { keywords: ["green","green colour"], response: "How about a green sundress with pearl jewelry, green espadrilles, and a straw bag?" },
    { keywords: ["black","black colour"], response: "For a black outfit, go with a black jumpsuit, diamond studs, black ankle boots, and a black handbag." },
    { keywords: ["white","white colour"], response: "Try a white lace dress with delicate silver jewelry, white ballet flats, and a clutch bag." },
    { keywords: ["yellow","yellow color"], response: "A yellow maxi dress with floral jewelry, tan sandals, and a woven bag would be perfect!" },
    { keywords: ["pink","pink colour"], response: "Consider a pink blouse with gold earrings, nude heels, and a matching pink shoulder bag." },
    { keywords: ["purple","purple colour"], response: "A purple tunic with silver bangles, purple wedges, and a small clutch bag could be a chic look." },

    // More responses
    { keywords: ["college", "class"], response: "Go with a casual T-shirt, jeans, a tote bag, and stud earrings." },
    { keywords: ["office", "corporate"], response: "A crisp button-down shirt, formal pants, a structured bag, and stud earrings." },
    { keywords: ["swimming", "pool"], response: "Wear a one-piece swimsuit with a cover-up, flip-flops, and a waterproof bag." },
    { keywords: ["haldi", "function"], response: "A bright yellow lehenga with floral jewelry and a potli bag." },
    { keywords: ["freshers", "day"], response: "A stylish A-line dress with a clutch and minimal jewelry." },
    { keywords: ["college", "orientation"], response: "A casual blouse, jeans, a backpack, and hoop earrings." },
    // Bag Section Responses
    { keywords: ["casual", "day out"], response: "Try a crossbody bag with your casual outfit." },
    { keywords: ["brunch", "friends"], response: "A stylish clutch would be perfect for brunch." },
    { keywords: ["shopping", "day"], response: "Opt for a spacious tote bag to carry all your essentials." },
    { keywords: ["party", "evening"], response: "A small handbag with embellishments will elevate your evening look." },
    { keywords: ["beach"], response: "A large beach tote is ideal for a day at the beach." },

    // Shoes Section Responses
    { keywords: ["casual", "day out"], response: "Consider wearing comfortable sneakers or loafers." },
    { keywords: ["brunch", "friends"], response: "A pair of stylish sandals would complement your outfit." },
    { keywords: ["office", "corporate"], response: "Opt for classic pumps or loafers for a professional look." },
    { keywords: ["party", "evening"], response: "Stilettos or heeled sandals would be perfect for an evening out." },
    { keywords: ["gym"], response: "Wear supportive athletic shoes for your workout." },

    // Jewelry Section Responses
    { keywords: ["casual", "day out"], response: "Simple stud earrings or a delicate necklace would work well." },
    { keywords: ["brunch", "friends"], response: "Opt for statement earrings to add flair to your look." },
    { keywords: ["wedding"], response: "Consider elegant drop earrings and a matching bracelet." },
    { keywords: ["party", "evening"], response: "Chandelier earrings and a bold cuff bracelet can enhance your evening attire." },
    { keywords: ["beach"], response: "Minimalist jewelry like anklets or simple rings are perfect for the beach." },

    // Color-Based Responses
    // Bags
    { keywords: ["red"], response: "A red handbag can add a pop of color to any outfit." },
    { keywords: ["black"], response: "A classic black tote is versatile and stylish." },

    // Shoes
    { keywords: ["blue"], response: "Blue flats or heels can complement many outfits beautifully." },
    { keywords: ["white"], response: "White sneakers are trendy and go well with casual wear." },

    // Jewelry
    { keywords: ["gold"], response: "Gold jewelry pairs well with both casual and formal outfits." },
    { keywords: ["silver"], response: "Silver accessories can add elegance to any look." },
    { keywords: ["wedding"], response: "For a wedding, consider wearing a rich burgundy or royal blue to stand out." },
    { keywords: ["party"], response: "Bright colors like fuchsia or gold will make you the life of the party!" },
    { keywords: ["movie"], response: "Opt for a comfortable yet stylish outfit in shades of black or navy." },
    { keywords: ["picnic"], response: "Light colors like pastel pink or mint green are perfect for a picnic." },
    { keywords: ["office"], response: "Classic colors like charcoal gray or navy blue are ideal for office wear." },
    { keywords: ["shopping"], response: "Go for vibrant colors like coral or teal to brighten your shopping day." },
    { keywords: ["haldi", "function"], response: "A bright yellow outfit is perfect for a haldi function!" },

    // Color-based responses (existing)
    { keywords: ["red"], response: "Consider a red gown with gold statement earrings, red stiletto heels, and a matching clutch bag." },
    { keywords: ["blue"], response: "A blue cocktail dress with silver hoops, navy blue pumps, and a crossbody bag would look stunning." },
    { keywords: ["green"], response: "How about a green sundress with pearl jewelry, green espadrilles, and a straw bag?" },
    { keywords: ["black"], response: "For a black outfit, go with a black jumpsuit, diamond studs, black ankle boots, and a black handbag." },
    { keywords: ["white"], response: "Try a white lace dress with delicate silver jewelry, white ballet flats, and a clutch bag." },
    { keywords: ["yellow"], response: "A yellow maxi dress with floral jewelry, tan sandals, and a woven bag would be perfect!" },
    { keywords: ["pink"], response: "Consider a pink blouse with gold earrings, nude heels, and a matching pink shoulder bag." },
    { keywords: ["purple"], response: "A purple tunic with silver bangles, purple wedges, and a small clutch bag could be a chic look." },
    // Color suggestions based on occasions
    { keywords: ["seasonal"], response: "For a seasonal look, consider wearing earthy tones like olive green or burnt orange." },
    { keywords: ["occasion"], response: "A classic navy blue is always a sophisticated choice for any occasion." },
    { keywords: ["party"], response: "Bright colors like fuchsia or electric blue will make you stand out at a party!" },
    { keywords: ["function"], response: "For formal functions, opt for deep jewel tones like emerald green or royal blue." },
    { keywords: ["birthday"], response: "Celebrate your birthday in style with a vibrant red or cheerful yellow!" },
    { keywords: ["trip"], response: "For a trip, light and breezy colors like sky blue or coral are perfect for travel." }
];
// Show or hide sections based on the clicked sidebar link
function showSection(section) {
    document.querySelectorAll('.category-section').forEach(div => div.style.display = 'none');
    document.getElementById(section).style.display = 'block';
}

// Upload image to the respective section and store in local storage
function uploadImage(section) {
    const fileInput = document.getElementById(`${section}File`);
    const files = fileInput.files;
    const imagesContainer = document.getElementById(`${section}Images`);

    const color = prompt("Please enter the color of the item:");

    if (files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('uploaded-image');
            img.onclick = () => openModal(img.src, section);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
            deleteBtn.onclick = () => imgContainer.remove();

            const imgContainer = document.createElement('div');
            imgContainer.appendChild(img);
            imgContainer.appendChild(deleteBtn);
            imagesContainer.appendChild(imgContainer);

            // Store image name and color in data attributes
            imgContainer.dataset.imageName = file.name.toLowerCase();
            imgContainer.dataset.color = color ? color.toLowerCase() : "";

            // Save the image data to local storage
            const imageData = { src: e.target.result, name: file.name, color: imgContainer.dataset.color };
            saveImageToLocalStorage(section, imageData);

        };
        reader.readAsDataURL(file);
        fileInput.value = ""; // Clear the input
    } else {
        alert("Please choose a file first.");
    }
}

// Save image data to local storage by section
function saveImageToLocalStorage(section, imageData) {
    const savedImages = JSON.parse(localStorage.getItem(section)) || [];
    savedImages.push(imageData);
    localStorage.setItem(section, JSON.stringify(savedImages));
}

// Load images from local storage when the page loads
function loadImagesFromLocalStorage() {
    document.querySelectorAll('.category-section').forEach(section => {
        const sectionId = section.id;
        const savedImages = JSON.parse(localStorage.getItem(sectionId)) || [];
        const imagesContainer = document.getElementById(`${sectionId}Images`);

        savedImages.forEach(imageData => {
            const img = document.createElement('img');
            img.src = imageData.src;
            img.classList.add('uploaded-image');
            img.onclick = () => openModal(img.src, sectionId);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = "Delete";
            deleteBtn.onclick = () => {
                imgContainer.remove();
                removeImageFromLocalStorage(sectionId, imageData);
            };

            const imgContainer = document.createElement('div');
            imgContainer.appendChild(img);
            imgContainer.appendChild(deleteBtn);
            imgContainer.dataset.imageName = imageData.name.toLowerCase();
            imgContainer.dataset.color = imageData.color;
            imagesContainer.appendChild(imgContainer);
        });
    });
}

// Remove image from local storage by section and image data
function removeImageFromLocalStorage(section, imageData) {
    const savedImages = JSON.parse(localStorage.getItem(section)) || [];
    const updatedImages = savedImages.filter(img => img.src !== imageData.src);
    localStorage.setItem(section, JSON.stringify(updatedImages));
}

// Initialize the app
window.onload = function () {
    loadImagesFromLocalStorage();
};

// Handle chat input and responses
function handleChatInput(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Handle chatbot messaging and display matching images
function sendMessage() {
    const input = document.getElementById('chatbotInput');
    const message = input.value.toLowerCase();
    const chatbotBody = document.getElementById('chatbotBody');

    const userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.textContent = message;
    chatbotBody.appendChild(userMessage);

    input.value = ""; // Clear input field

    const response = responses.find(resp => resp.keywords.some(keyword => message.includes(keyword)));

    if (response) {
        displayChatbotResponse(response.response);

        const images = document.querySelectorAll('.uploaded-image');
        let matchFound = false;

        images.forEach(img => {
            if (img.parentElement.dataset.color && message.includes(img.parentElement.dataset.color)) {
                displayChatbotImage(img.src);
                matchFound = true;
            }
        });

        if (!matchFound) {
            displayChatbotResponse("I couldn’t find an exact match, but here’s a suggestion based on your request!");
        }
    } else {
        displayChatbotResponse("I'm here to help! Could you rephrase that?");
    }

    chatbotBody.scrollTop = chatbotBody.scrollHeight; // Scroll to bottom
}

// Helper function to display chatbot response
function displayChatbotResponse(text) {
    const botMessage = document.createElement("p");
    botMessage.classList.add("bot-message");
    botMessage.textContent = text;
    document.getElementById('chatbotBody').appendChild(botMessage);
}

// Helper function to display image in chatbot
function displayChatbotImage(src) {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("chatbot-image");
    document.getElementById('chatbotBody').appendChild(img);
}

// Track outfit in calendar
function trackOutfit(outfit) {
    const date = prompt("Please enter the date (YYYY-MM-DD) for tracking this outfit:");
    if (!date) return;

    const outfitHistory = JSON.parse(localStorage.getItem("outfitHistory")) || [];
    outfitHistory.push({ date, outfit });
    localStorage.setItem("outfitHistory", JSON.stringify(outfitHistory));

    alert(`Outfit tracked for ${date}`);
}

// View tracked outfits for a particular date
function viewTrackedOutfits() {
    const date = prompt("Enter the date (YYYY-MM-DD) to view outfits:");
    const outfitHistory = JSON.parse(localStorage.getItem("outfitHistory")) || [];
    const outfitsForDate = outfitHistory.filter(outfit => outfit.date === date);

    if (outfitsForDate.length > 0) {
        alert(`Outfits for ${date}:\n${outfitsForDate.map(outfit => outfit.outfit).join("\n")}`);
    } else {
        alert("No outfits tracked for this date.");
    }
}