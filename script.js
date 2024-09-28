const books = [
    { 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        status: "Available",
        description: "A classic novel that explores themes of wealth, love, and the American Dream.",
        image: "https://m.media-amazon.com/images/I/712cIqJAiUL._UF1000,1000_QL80_.jpg" 
    },
    { 
        title: "1984", 
        author: "George Orwell", 
        status: "Borrowed",
        description: "A dystopian novel set in a totalitarian regime, depicting a world of surveillance and propaganda.",
        image: "https://m.media-amazon.com/images/I/612ADI+BVlL._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        status: "Available",
        description: "A story of racial injustice and childhood innocence in the Deep South.",
        image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg"
    },
    { 
        title: "Pride and Prejudice", 
        author: "Jane Austen", 
        status: "Available",
        description: "A romantic novel that delves into the complexities of love, family, and societal expectations.",
        image: "https://m.media-amazon.com/images/I/712P0p5cXIL._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "The Catcher in the Rye", 
        author: "J.D. Salinger", 
        status: "Borrowed",
        description: "A coming-of-age story capturing teenage angst and rebellion in mid-20th century America.",
        image: "https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "Moby Dick", 
        author: "Herman Melville", 
        status: "Available",
        description: "An epic tale of obsession and revenge, centered around the hunt for a giant white whale.",
        image: "https://m.media-amazon.com/images/I/81R91ODA9DL._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "War and Peace", 
        author: "Leo Tolstoy", 
        status: "Available",
        description: "A historical novel that intertwines the lives of several families during the Napoleonic wars.",
        image: "https://m.media-amazon.com/images/I/91teiIZ5vwL._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "The Odyssey", 
        author: "Homer", 
        status: "Available",
        description: "An ancient Greek epic that follows Odysseus's journey home after the fall of Troy.",
        image: "https://m.media-amazon.com/images/I/81g0AATkO9L._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "Crime and Punishment", 
        author: "Fyodor Dostoevsky", 
        status: "Borrowed",
        description: "A psychological thriller that delves into the mind of a murderer seeking redemption.",
        image: "https://m.media-amazon.com/images/I/71O2XIytdqL._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "The Brothers Karamazov", 
        author: "Fyodor Dostoevsky", 
        status: "Available",
        description: "A complex tale of faith, doubt, and the dynamics of family relations in 19th-century Russia.",
        image: "https://m.media-amazon.com/images/I/71OZJsgZzQL._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "Brave New World", 
        author: "Aldous Huxley", 
        status: "Borrowed",
        description: "A dystopian novel exploring the implications of technology, control, and the loss of individuality.",
        image: "https://m.media-amazon.com/images/I/91D4YvdC0dL._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "Jane Eyre", 
        author: "Charlotte Brontë", 
        status: "Available",
        description: "A story of an orphaned girl’s struggle for independence and love in Victorian England.",
        image: "https://m.media-amazon.com/images/I/81pwJjgcwwL._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "Wuthering Heights", 
        author: "Emily Brontë", 
        status: "Available",
        description: "A tragic tale of intense love and revenge set against the backdrop of the Yorkshire moors.",
        image: "https://m.media-amazon.com/images/I/81T34Sem-tL._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "Les Misérables", 
        author: "Victor Hugo", 
        status: "Available",
        description: "A sweeping epic of love, justice, and redemption set in post-revolutionary France.",
        image: "https://cdn.kobo.com/book-images/a6bdd3f5-ba60-4ad3-8f6b-5f1427021961/1200/1200/False/les-miserables-305.jpg"
    },
    { 
        title: "Don Quixote", 
        author: "Miguel de Cervantes", 
        status: "Borrowed",
        description: "A satirical novel following the adventures of a self-styled knight and his loyal squire.",
        image: "https://m.media-amazon.com/images/I/71mbJoazlCL._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "The Picture of Dorian Gray", 
        author: "Oscar Wilde", 
        status: "Available",
        description: "A philosophical novel that tells the story of a young man who remains eternally youthful while a portrait of him ages.",
        image: "https://m.media-amazon.com/images/I/71fm0Ap7JcL._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "The Alchemist", 
        author: "Paulo Coelho", 
        status: "Available",
        description: "A philosophical book about a shepherd named Santiago who dreams of finding treasure in Egypt, exploring themes of destiny and personal legend.",
        image: "https://m.media-amazon.com/images/I/61HAE8zahLL._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "The Hobbit", 
        author: "J.R.R. Tolkien", 
        status: "Available",
        description: "A fantasy novel that follows the journey of Bilbo Baggins as he embarks on an adventure to help a group of dwarves reclaim their homeland from a dragon.",
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/The_Hobbit_trilogy_dvd_cover.jpg/220px-The_Hobbit_trilogy_dvd_cover.jpg"
    },
    { 
        title: "Fahrenheit 451", 
        author: "Ray Bradbury", 
        status: "Available",
        description: "A dystopian novel set in a future where books are banned, and fireman burn any that are found, exploring themes of censorship and the power of literature.",
        image: "https://m.media-amazon.com/images/I/61l8LHt4MeL._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "The Handmaid's Tale", 
        author: "Margaret Atwood", 
        status: "Available",
        description: "A dystopian novel set in a totalitarian society that subjugates women, focusing on the story of Offred, a handmaid forced to bear children for the ruling class",
        image: "https://m.media-amazon.com/images/I/61su39k8NUL._AC_UF1000,1000_QL80_.jpg"
    },
    { 
        title: "Great Expectations", 
        author: "Charles Dickens", 
        status: "Available",
        description: "A coming-of-age tale that chronicles the life and fortunes of the orphaned Pip.",
        image: "https://m.media-amazon.com/images/I/91B16mv1ZyL._AC_UF1000,1000_QL80_.jpg"
    },

];

// Function to display the book list with images
function showBooks() {
    const bookList = document.getElementById('book-list');
    const bookContainer = document.querySelector('.book-container');
    bookContainer.innerHTML = ''; // Clear previous content

    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}" class="book-image">
            <h3>${book.title}</h3>
            <p><em>by ${book.author}</em></p>
            <p>${book.description}</p>
            <p><strong>Status:</strong> ${book.status}</p>
            <button ${book.status !== 'Available' ? 'disabled' : ''} onclick="borrowBook('${book.title}')">
                ${book.status === 'Available' ? 'Borrow' : 'Not Available'}
            </button>
        `;
        bookContainer.appendChild(bookCard);
    });

    bookList.classList.remove('hidden'); // Show the book list section
}

// Function to handle borrowing of a book
function borrowBook(bookTitle) {
    const bookIndex = books.findIndex(book => book.title === bookTitle);
    if (bookIndex !== -1) {
        books[bookIndex].status = 'Borrowed';
        alert(`You have borrowed "${bookTitle}"`);
        showBooks(); // Refresh the book list to reflect the new status
    }
}

// Simulated login functionality
document.getElementById('loginForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple authentication check (you can modify this for your needs)
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
        window.location.href = 'lend.html'; // Redirect to lend page on success
    } else {
        alert('Invalid username or password');
    }
});

// Simulated account creation functionality
document.getElementById('accountForm')?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Account created successfully! You can now log in.');
    window.location.href = 'login.html'; // Redirect to login page
});

// Show books on lend.html page load
if (document.getElementById('book-list')) {
    showBooks();
}
