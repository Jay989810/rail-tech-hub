function toggleMenu() {
  document.querySelector('.nav-menu').classList.toggle('show');
}

// Add New Discussion Post
function addPost() {
  let title = document.getElementById('post-title').value.trim();
  let content = document.getElementById('post-content').value.trim();

  if (title === '' || content === '') {
    alert('Please fill in all fields.');
    return;
  }

  let postContainer = document.getElementById('forum-posts');
  let newPost = document.createElement('div');
  newPost.classList.add('forum-post');

  newPost.innerHTML = `
    <h3>${title}</h3>
    <p>Posted by Anonymous | 0 Replies</p>
  `;

  postContainer.prepend(newPost); // Adds new post at the top
  document.getElementById('post-title').value = '';
  document.getElementById('post-content').value = '';
}