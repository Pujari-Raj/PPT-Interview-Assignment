document.addEventListener('DOMContentLoaded', function () {
    // Fetching the blogs from API-JSONPLACEHOLDER
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const blogList = document.getElementById('blog-list');

            data.forEach(blog => {
                const li = document.createElement('li');
                li.innerHTML = `<h3>${blog.title}</h3>
                                <p>${blog.body}</p>
                                <button class="delete_btn">Delete</button>`;
                blogList.appendChild(li);
            });

            // Attaching delete buttons for all blogs
            const deleteButtons = document.getElementsByClassName('delete-btn');
            for (let i = 0; i < deleteButtons.length; i++) {
                deleteButtons[i].addEventListener('click', deleteBlog);
            }
        });

    // For Adding new blog
    const addBlogForm = document.getElementById('add-blog-form');
    addBlogForm.addEventListener('submit', addBlog);

    // Function To add new blog
    function addBlog(event) {
        event.preventDefault();

        const titleInput = document.getElementById('title');
        const bodyInput = document.getElementById('body');

        // Creating new blog object
        const newBlog = {
            title: titleInput.value,
            body: bodyInput.value
        };

        // Clearing form inputs after adding new blog
        titleInput.value = '';
        bodyInput.value = '';

        // Adding new blog to the UI
        const blogList = document.getElementById('blog-list');
        const li = document.createElement('li');
        li.innerHTML = `<h3>${newBlog.title}</h3>
                        <p>${newBlog.body}</p>
                        <button class="delete_btn">Delete</button>`;
        blogList.appendChild(li);

        alert('new blog added');

        //  adding delete button for new blog
        const deleteButton = li.getElementsByClassName('delete-btn')[0];
        deleteButton.addEventListener('click', deleteBlog);
    }

    // Function to delete a blog
    function deleteBlog(event) {
        const blogItem = event.target.parentElement;
        alert('blog deleted successfully!');
        blogItem.remove();
    }
});
