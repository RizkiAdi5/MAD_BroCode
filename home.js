let iconClicked = false; // Variabel global untuk melacak apakah ikon telah diklik

window.onload = function () {
  // Mengambil elemen DOM untuk kontrol video dan pertanyaan
  const playIcon = document.getElementById("playIcon");
  const backgroundVideo = document.getElementById("background-opening");

  // Mengambil elemen untuk bagian pembuka
  const openingSection = document.getElementById("opening");
  const questionOpening = document.getElementById("q_opening");

  // Mengambil elemen untuk pilihan A
  const openingA = document.getElementById("openingA");
  const videoA = document.getElementById("videoA");
  const questionA = document.getElementById("q_A");
  const openingA1 = document.getElementById("openingA1");
  const videoA1 = document.getElementById("videoA1");
  const openingA1E = document.getElementById("openingA1E");
  const videoA1E = document.getElementById("videoA1E");
  const questionA1 = document.getElementById("q_A1");
  const openingA2 = document.getElementById("openingA2");
  const videoA2 = document.getElementById("videoA2");
  const questionA2 = document.getElementById("q_A2");
  const openingA2E = document.getElementById("openingA2E");
  const videoA2E = document.getElementById("videoA2E");

  // Mengambil elemen untuk pilihan B
  const openingB = document.getElementById("openingB");
  const videoB = document.getElementById("videoB");
  const questionB = document.getElementById("question_B");
  const openingB1 = document.getElementById("openingB1");
  const videoB1 = document.getElementById("videoB1");
  const questionB1 = document.getElementById("q_B1");

  const openingB1E = document.getElementById("openingB1E");
  const videoB1E = document.getElementById("videoB1E");
  const openingB2 = document.getElementById("openingB2");
  const videoB2 = document.getElementById("videoB2");
  const questionB2 = document.getElementById("q_B2");
  const openingB2_1 = document.getElementById("openingB2_1");
  const videoB2_1 = document.getElementById("videoB2_1");
  const questionB2_1 = document.getElementById("q_B2_1");
  const openingB2_2 = document.getElementById("openingB2_2");
  const videoB2_2 = document.getElementById("videoB2_2");
  const questionB2_2 = document.getElementById("q_B2_2");
  const openingB2_E = document.getElementById("openingB2_E");
  const videoB2_E = document.getElementById("videoB2_E");

  // Event listener untuk menangkap klik pada ikon play
  playIcon.addEventListener("click", function () {
    iconClicked = true; // Tandai bahwa ikon telah diklik
    openingSection.style.display = "block"; // Tampilkan video
    backgroundVideo.play(); // Mulai video
    document.querySelector("#title").classList.remove("visible"); // Sembunyikan title
    document.querySelector("#Frst_button").classList.remove("visible"); // Sembunyikan button
  });

  // Set a 4-second delay untuk menampilkan judul dan tombol jika ikon belum diklik
  setTimeout(function () {
    if (!iconClicked) {
      document.querySelector("#title").classList.add("visible");
      document.querySelector("#Frst_button").classList.add("visible");
    }
  }, 4000); // 4000 milliseconds = 4 seconds

  // Tambahkan event listener untuk event 'ended' pada video pembuka
  backgroundVideo.addEventListener("ended", function () {
    questionOpening.style.display = "block"; // Tampilkan pertanyaan setelah video selesai
  });

  // Event listener untuk pilihan A
  document.getElementById("A").addEventListener("click", function () {
    openingA.style.display = "block"; // Tampilkan video A
    videoA.play(); // Mulai pemutaran video A
    questionOpening.style.display = "none"; // Sembunyikan pertanyaan pembuka

    // Tambahkan event listener untuk event 'ended' pada video A
    videoA.addEventListener("ended", function () {
      questionA.style.display = "block"; // Tampilkan pertanyaan setelah video A selesai
    });
  });

  // Event listener untuk pilihan A1
  document.getElementById("A1").addEventListener("click", function () {
    openingA1.style.display = "block"; // Tampilkan video A1
    videoA1.play(); // Mulai pemutaran video A1
    questionA.style.display = "none"; // Sembunyikan pertanyaan A

    // Event listener untuk video A1 selesai
    videoA1.addEventListener("ended", function () {
      questionA1.style.display = "block"; // Tampilkan pertanyaan setelah video A1 selesai
    });
  });

  // Event listener untuk pilihan A1E
  document.getElementById("q_A1E").addEventListener("click", function () {
    openingA1E.style.display = "block"; // Tampilkan video A1E
    videoA1E.play(); // Mulai pemutaran video A1E
    questionA1.style.display = "none"; // Sembunyikan pertanyaan A1

    // Event listener untuk video A1E selesai
    videoA1E.addEventListener("ended", function () {
      alert("ENDING"); // Tampilkan alert saat video A1E selesai
    });
  });
  // a2
  document.getElementById("A2").addEventListener("click", function () {
    openingA2.style.display = "block"; // Tampilkan video A1
    videoA2.play(); // Mulai pemutaran video A1
    questionA2.style.display = "none"; // Sembunyikan pertanyaan A

    // Event listener untuk video A1 selesai
    videoA2.addEventListener("ended", function () {
      questionA2.style.display = "block"; // Tampilkan pertanyaan setelah video A1 selesai
    });
  });
  // Event listener untuk pilihan A2E
  document.getElementById("q_A2").addEventListener("click", function () {
    openingA2E.style.display = "block"; // Tampilkan video A1E
    videoA2E.play(); // Mulai pemutaran video A1E

    // Event listener untuk video A1E selesai
    videoA2E.addEventListener("ended", function () {
      alert("ENDING"); // Tampilkan alert saat video A1E selesai
    });
  });
  // Event listener untuk pilihan B
  document.getElementById("B").addEventListener("click", function () {
    openingB.style.display = "block"; // Tampilkan video B
    videoB.play(); // Mulai pemutaran video B
    questionOpening.style.display = "none"; // Sembunyikan pertanyaan pembuka

    // Tambahkan event listener untuk event 'ended' pada video B
    videoB.addEventListener("ended", function () {
      questionB.style.display = "block"; // Tampilkan pertanyaan setelah video B selesai
    });
  });

  // Event listener untuk pilihan B1
  document.getElementById("B1").addEventListener("click", function () {
    openingB1.style.display = "block"; // Tampilkan video B1
    videoB1.play(); // Mulai pemutaran video B1
    questionB.style.display = "none"; // Sembunyikan pertanyaan B
    // Tambahkan event listener untuk event 'ended' pada video B1
    videoB1.addEventListener("ended", function () {
      questionB1.style.display = "block";
    });
  });

  //   CLICK B1E
  document.getElementById("q_B1").addEventListener("click", function () {
    openingB1E.style.display = "block"; // Tampilkan video A1E
    videoB1E.play(); // Mulai pemutaran video A1E
    questionB1.style.display = "none";
    // Event listener untuk video A1E selesai
    videoB1E.addEventListener("ended", function () {
      alert("ENDING"); // Tampilkan alert saat video A1E selesai
    });
  });

  //   b2
  document.getElementById("B2").addEventListener("click", function () {
    openingB2.style.display = "block"; // Tampilkan video B1
    videoB2.play(); // Mulai pemutaran video B1
    questionB.style.display = "none"; // Sembunyikan pertanyaan B
    // Tambahkan event listener untuk event 'ended' pada video B1
    videoB2.addEventListener("ended", function () {
      questionB2.style.display = "block";
    });
  });

  document.getElementById("q_B2").addEventListener("click", function () {
    openingB2_1.style.display = "block"; // Tampilkan video B1
    videoB2_1.play(); // Mulai pemutaran video B1
    questionB2.style.display = "none"; // Sembunyikan pertanyaan B
    // Tambahkan event listener untuk event 'ended' pada video B1
    videoB2_1.addEventListener("ended", function () {
      questionB2_1.style.display = "block";
    });
  });

  document.getElementById("q_B2_1").addEventListener("click", function () {
    openingB2_2.style.display = "block"; // Tampilkan video B1
    videoB2_2.play(); // Mulai pemutaran video B1
    questionB2_1.style.display = "none"; // Sembunyikan pertanyaan B
    // Tambahkan event listener untuk event 'ended' pada video B1
    videoB2_2.addEventListener("ended", function () {
      questionB2_2.style.display = "block";
    });
  });

  //   CLICK B2 ENDING
  document.getElementById("q_B2_2").addEventListener("click", function () {
    openingB2_E.style.display = "block"; // Tampilkan video A1E
    videoB2_E.play(); // Mulai pemutaran video A1E
    questionB2_2.style.display = "none";
    // Event listener untuk video A1E selesai
    videoA1E.addEventListener("ended", function () {
      alert("ENDING"); // Tampilkan alert saat video A1E selesai
    });
  });
};

// Array untuk menyimpan daftar video
const videos = [
  "asset/malin_bg.mp4",
  "asset/malin_bg2.mp4",
  "asset/malin_bg3.mp4",
  "asset/bg_main4.mp4",
];

let currentVideoIndex = 0; // Indeks video saat ini

// Referensi ke elemen video dan sumber video
const videoElement = document.getElementById("backgroundVideo");
const videoSource = document.getElementById("videoSource");

// Function untuk mengganti video dengan smooth transition
function changeVideo() {
  // Fade out video sebelum mengganti sumber
  videoElement.classList.add("fade-out");

  // Setelah transisi selesai, ganti video
  setTimeout(() => {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    videoSource.src = videos[currentVideoIndex];
    videoElement.load();

    // Fade in video setelah di-load
    videoElement.classList.remove("fade-out");
    videoElement.play();
  }, 500); // Sinkron dengan durasi transisi fade-out (0.5 detik)
}

// Event listener ketika video selesai diputar
videoElement.addEventListener("ended", changeVideo);

// Tunggu hingga DOM sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", function () {
  const playIcon = document.getElementById("playIcon");
  const backgroundVideo = document.getElementById("background-opening");
  const openingSection = document.getElementById("opening");

  // Tambahkan event listener untuk ikon
  playIcon.addEventListener("click", function () {
    openingSection.style.display = "block"; // Tampilkan video
    backgroundVideo.play(); // Mulai pemutaran video
    playIcon.style.display = "none"; // Sembunyikan ikon setelah video mulai diputar
  });
});
