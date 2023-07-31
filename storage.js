const fullName = document.getElementById('name');
const email = document.getElementById('email');
const comment = document.getElementById('textarea');

function populateStorage() {
  const data = {
    userName: fullName.value,
    userEmail: email.value,
    userComment: comment.value,
  };
  localStorage.setItem('form', JSON.stringify(data));
}

document.addEventListener('DOMContentLoaded', () => {
  const formData = localStorage.getItem('form');
  if (formData) {
    const updatedData = JSON.parse(formData);
    fullName.value = updatedData.userName;
    email.value = updatedData.userEmail;
    comment.value = updatedData.userComment;
  }
});

fullName.addEventListener('input', populateStorage);
email.addEventListener('input', populateStorage);
comment.addEventListener('input', populateStorage);
