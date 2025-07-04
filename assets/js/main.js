

//KV 커지는 영상

window.addEventListener('scroll', () => {
  const videoDiv = document.querySelector('.video');
  if (window.scrollY >= 200) {
    videoDiv.classList.add('expanded');
  } else {
    videoDiv.classList.remove('expanded');
  }
});




 






