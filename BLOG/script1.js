function rand(min, max) {
    return Math.floor(Math.random() * max) + min;
  }
  
  document.querySelectorAll('.post:not(.featured)').forEach((post) => {
    post.querySelector('.image').style.backgroundImage = `url("")`;
  });