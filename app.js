// Array untuk menyimpan daftar video
const videos = [
    'asset/malin_bg.mp4',
    'asset/malin_bg2.mp4',
    'asset/malin_bg3.mp4',
    'asset/bg_main4.mp4'
  ];
  
  let currentVideoIndex = 0; // Indeks video saat ini
  
  // Referensi ke elemen video dan sumber video
  const videoElement = document.getElementById('backgroundVideo');
  const videoSource = document.getElementById('videoSource');
  
  // Function untuk mengganti video dengan smooth transition
  function changeVideo() {
    // Fade out video sebelum mengganti sumber
    videoElement.classList.add('fade-out');
    
    // Setelah transisi selesai, ganti video
    setTimeout(() => {
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;
      videoSource.src = videos[currentVideoIndex];
      videoElement.load();
      
      // Fade in video setelah di-load
      videoElement.classList.remove('fade-out');
      videoElement.play();
    }, 500); // Sinkron dengan durasi transisi fade-out (0.5 detik)
  }
  
  // Event listener ketika video selesai diputar
  videoElement.addEventListener('ended', changeVideo);
  
  // Icon untuk toggle tampilan team
  

//   tombol

const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const notificationSound = document.getElementById('notificationSound');

// Menambahkan event listener untuk tombol kiri
leftButton.addEventListener('click', () => {
    notificationSound.play();
});

// Menambahkan event listener untuk tombol kanan
rightButton.addEventListener('click', () => {
    notificationSound.play();
});

// Wait for the DOM to fully load
// Wait for the DOM to fully load
window.onload = function() {
  // Set a 7-second delay
  setTimeout(function() {
    // Make the box containing buttons visible
    document.querySelector('#title').style.visibility = 'visible';
  }, 7000); // 7000 milliseconds = 7 seconds
};
