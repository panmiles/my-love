
 // ปุ่มรับความรัก
function showLove() {
  document.getElementById("message").innerText =
    "รักนะที่รัก 💗 อยู่ให้เค้ารักไปนาน ๆ เลย";
}

// ระบบเปิดและปิดเพลง
function toggleMusic() {
  const music = document.getElementById("music");
  const button = document.getElementById("musicButton");

  music.volume = 0.25;

  if (music.paused) {
    music.play().then(() => {
      button.innerText = "⏸ ปิดเพลง";
    }).catch(() => {
      button.innerText = "🎵 ลองเปิดเพลงอีกครั้ง";
    });
  } else {
    music.pause();
    button.innerText = "🎵 เปิดเพลงรัก";
  }
}

// เปิดจดหมายรัก
function openLetter() {
  const letter = document.getElementById("letterMessage");
  letter.classList.toggle("show");
}

// นับวันครบรอบ
function updateLoveDays() {
  const start = new Date(2026, 3, 19);
  const today = new Date();

  start.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const days = Math.floor(
    (today - start) / 86400000
  );

  document.getElementById("loveDays").innerText =
    days >= 0
      ? days + " วัน 💗"
      : "กำลังรอวันเริ่มต้น 💕";
}

// สร้างหัวใจลอย
function createHeart() {
  const heart = document.createElement("div");

  heart.className = "floating-heart";
  heart.innerText = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize =
    (15 + Math.random() * 25) + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

// เริ่มระบบ
updateLoveDays();

setInterval(updateLoveDays, 60000);
setInterval(createHeart, 600);

let lovePlayer;

function onYouTubeIframeAPIReady() {
  lovePlayer = new YT.Player("youtubePlayer", {
    videoId: "cAMYFCV-Fgk",

    playerVars: {
      autoplay: 1,
      controls: 1,
      playsinline: 1,
      loop: 1,
      playlist: "cAMYFCV-Fgk",
      mute: 0
    },

    events: {
      onReady: function(event) {
        event.target.setVolume(25);
        event.target.playVideo();

        document.getElementById("musicStatus").innerText =
          "🎵 เพลงของเรากำลังเล่นที่ระดับเสียง 25% 💗";
      },

      onStateChange: function(event) {
        if (event.data === YT.PlayerState.PLAYING) {
          lovePlayer.setVolume(25);
        }
      }
    }
  });
}

function closeWelcome() {
  const popup = document.getElementById("welcomePopup");
  popup.style.opacity = "0";

  setTimeout(() => {
    popup.style.display = "none";
  }, 500);
}

const welcomeText =
  "เว็บไซต์นี้ตั้งใจทำขึ้นมาเพื่อเธอโดยเฉพาะเลยนะ ❤️ ขอบคุณที่เข้ามาเป็นความสุขของกันและกัน";

let typingIndex = 0;

function typeWelcomeMessage() {
  const message = document.getElementById("typingMessage");

  if (!message || typingIndex >= welcomeText.length) return;

  message.textContent += welcomeText.charAt(typingIndex);
  typingIndex++;

  setTimeout(typeWelcomeMessage, 75);
}

typeWelcomeMessage();

// หัวใจลอยในหน้าต้อนรับ
function createWelcomeHeart() {
  const popup = document.getElementById("welcomePopup");

  if (!popup || popup.style.display === "none") return;

  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = ["💗", "💕", "💖", "💘"][
    Math.floor(Math.random() * 4)
  ];

  heart.style.left = Math.random() * 95 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createWelcomeHeart, 700);

function toggleLoveLetter() {
  const envelope = document.getElementById("loveEnvelope");
  const button = document.getElementById("openLoveLetter");

  envelope.classList.toggle("open");

  if (envelope.classList.contains("open")) {
    button.textContent = "ปิดจดหมาย 💗";
  } else {
    button.textContent = "เปิดจดหมาย 💌";
  }
}

function moveNoButton() {
  const button = document.getElementById("noButton");
  const area = document.querySelector(".game-buttons");

  const maxX = Math.max(0, area.clientWidth - button.offsetWidth);
  const maxY = 100;

  button.style.position = "relative";
  button.style.left = (Math.random() * maxX - maxX / 2) + "px";
  button.style.top = (Math.random() * maxY - maxY / 2) + "px";
}

function loveAccepted() {
  const result = document.getElementById("gameResult");

  result.innerHTML =
    "เย้!! เค้าก็รักที่รักที่สุดเลย ❤️🥰<br>ขอกอดหนึ่งทีได้ไหม 💗";

  document.querySelector(".game-buttons").style.display = "none";

  for (let i = 0; i < 35; i++) {
    setTimeout(createGameHeart, i * 100);
  }
}

function createGameHeart() {
  const heart = document.createElement("div");

  heart.className = "game-heart";
  heart.textContent = ["❤️", "💗", "💕", "💖", "💘"][
    Math.floor(Math.random() * 5)
  ];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (20 + Math.random() * 25) + "px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 3000);
}

function openGift() {
  const gift = document.getElementById("giftContainer");
  const message = document.getElementById("giftMessage");
  const hint = document.getElementById("giftHint");

  if (gift.classList.contains("open")) return;

  gift.classList.add("open");

  hint.textContent = "ของขวัญจากใจเค้า 💕";

  setTimeout(() => {
    message.classList.add("show");

    for (let i = 0; i < 20; i++) {
      setTimeout(createGameHeart, i * 120);
    }
  }, 700);
}


let currentPhotoIndex = 0;

function openMemoryPhoto(imageSrc, caption) {
  const photos = document.querySelectorAll(".album-item img");

  currentPhotoIndex = Array.from(photos).findIndex(
    img => img.src === imageSrc
  );

  if (currentPhotoIndex < 0) {
    currentPhotoIndex = 0;
  }

  showMemoryPhoto(currentPhotoIndex, caption);

  document.getElementById("memoryModal").classList.add("show");
  createPhotoHearts();
}

function showMemoryPhoto(index, firstCaption) {
  const items = document.querySelectorAll(".album-item");
  
  if (items.length === 0) return;

  currentPhotoIndex =
    (index + items.length) % items.length;

  const item = items[currentPhotoIndex];
  const img = item.querySelector("img");
  const caption = item.querySelector("p");

  document.getElementById("memoryFullImage").src = img.src;

  document.getElementById("memoryCaption").textContent =
    firstCaption || caption.textContent;
}

function changeMemoryPhoto(direction) {
  showMemoryPhoto(currentPhotoIndex + direction);
}

function closeMemoryPhoto() {
  document.getElementById("memoryModal").classList.remove("show");
}

let touchStartX = 0;
let touchEndX = 0;

const photoModal = document.getElementById("memoryModal");

photoModal.addEventListener("touchstart", function(event) {
  touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

photoModal.addEventListener("touchend", function(event) {
  touchEndX = event.changedTouches[0].screenX;

  const distance = touchEndX - touchStartX;

  if (Math.abs(distance) < 50) return;

  if (distance < 0) {
    changeMemoryPhoto(1);
  } else {
    changeMemoryPhoto(-1);
  }
}, { passive: true });

function createPhotoHearts() {
  const hearts = ["💗", "💕", "💖", "✨", "💘"];

  for (let i = 0; i < 12; i++) {
    const heart = document.createElement("span");

    heart.className = "photo-heart";
    heart.textContent =
      hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 90 + 5 + "vw";
    heart.style.top = Math.random() * 70 + 15 + "vh";
    heart.style.animationDelay = Math.random() * 0.8 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2700);
  }
}

/* ==================================
   MY LOVE CHAT 💗
   Firebase Login + Real-time Chat
================================== */

(function () {
  // ป้องกันการสร้างระบบซ้ำ
  if (document.getElementById("mlc-chat-root")) return;

  // 1. สร้างหน้าต่างแชต
  const mlcStyle = document.createElement("style");

  mlcStyle.textContent = `
    #mlc-open {
      position: fixed;
      right: 18px;
      bottom: 18px;
      z-index: 10020;
      width: auto;
      background: #ed78a8;
      color: white;
      border: 0;
      border-radius: 30px;
      padding: 14px 20px;
      box-shadow: 0 5px 18px #d88ba888;
    }

    #mlc-panel {
      display: none;
      position: fixed;
      right: 18px;
      bottom: 85px;
      width: 360px;
      max-width: calc(100vw - 24px);
      height: 520px;
      max-height: calc(100dvh - 110px);
      background: #fff7fb;
      border: 2px solid #ffd0e1;
      border-radius: 22px;
      z-index: 10021;
      box-shadow: 0 8px 35px #b85c8355;
      overflow: hidden;
      text-align: left;
      color: #a84670;
      font-family: sans-serif;
    }

    #mlc-panel.show {
      display: flex;
      flex-direction: column;
    }

    #mlc-header {
      background: linear-gradient(135deg,#f28db5,#e96f9f);
      color: white;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    #mlc-header button {
      width: auto;
      margin: 0;
      padding: 5px 12px;
      background: #ffffff44;
      box-shadow: none;
    }

    #mlc-content {
      padding: 14px;
      flex: 1;
      min-height: 0;
      display: flex;
      flex-direction: column;
    }

    #mlc-login {
      text-align: center;
      margin: auto;
      width: 100%;
    }

    #mlc-login button,
    #mlc-send {
      width: auto;
      max-width: 100%;
      background: #ed78a8;
      color: white;
      border: 0;
      border-radius: 25px;
      padding: 12px 18px;
      cursor: pointer;
    }

    #mlc-status {
      font-size: 12px;
      color: #b66c8b;
      text-align: center;
      margin: 8px 0;
      line-height: 1.6;
    }

    #mlc-user {
      font-size: 12px;
      color: #b66c8b;
      margin-bottom: 8px;
      overflow-wrap: anywhere;
    }

    #mlc-messages {
      flex: 1;
      min-height: 100px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 9px;
      padding: 8px 3px;
    }

    .mlc-bubble {
      max-width: 85%;
      padding: 10px 13px;
      border-radius: 16px;
      font-size: 14px;
      line-height: 1.6;
      overflow-wrap: anywhere;
      white-space: pre-wrap;
    }

    .mlc-mine {
      align-self: flex-end;
      background: #f8c5d9;
      color: #813d5c;
      border-bottom-right-radius: 4px;
    }

    .mlc-theirs {
      align-self: flex-start;
      background: white;
      color: #a84670;
      border: 1px solid #ffe0ec;
      border-bottom-left-radius: 4px;
    }

    .mlc-time {
      display: block;
      font-size: 10px;
      opacity: .7;
      margin-top: 4px;
      text-align: right;
    }

    #mlc-form {
      display: flex;
      gap: 7px;
      margin-top: 8px;
    }

    #mlc-input {
      flex: 1;
      min-width: 0;
      border: 1px solid #f3bfd2;
      border-radius: 20px;
      padding: 11px 13px;
      outline: none;
      background: white;
      color: #a84670;
      font-size: 14px;
    }

    #mlc-form button {
      width: auto;
      margin: 0;
      padding: 10px 14px;
      font-size: 14px;
    }

    #mlc-logout {
      display: block;
      width: auto;
      margin: 8px auto 0;
      padding: 6px 14px;
      font-size: 12px;
      background: #d8a3b8;
      box-shadow: none;
    }

    @media (max-width: 600px) {
      #mlc-open {
        right: 12px;
        bottom: 12px;
      }

      #mlc-panel {
        left: 10px;
        right: 10px;
        bottom: 75px;
        width: auto;
        height: min(520px, calc(100dvh - 95px));
        max-width: none;
      }
    }
  `;

  document.head.appendChild(mlcStyle);

  const mlcRoot = document.createElement("div");
  mlcRoot.id = "mlc-chat-root";

  mlcRoot.innerHTML = `
    <button id="mlc-open">💌 ห้องแชตของเรา</button>

    <section id="mlc-panel">
      <div id="mlc-header">
        <strong>💗 My Love Chat</strong>
        <button id="mlc-close">✕</button>
      </div>

      <div id="mlc-content">
        <div id="mlc-login">
          <div style="font-size:45px">💗</div>
          <h3>ห้องแชตส่วนตัวของเรา</h3>
          <p style="font-size:13px;line-height:1.8">
            เข้าสู่ระบบด้วย Gmail ที่ได้รับอนุญาต<br>
            แล้วมาอ่านข้อความหากันนะ
          </p>
          <button id="mlc-login-btn">
            เข้าสู่ระบบด้วย Google
          </button>
        </div>

        <div id="mlc-chat" style="display:none;flex:1;min-height:0;flex-direction:column">
          <div id="mlc-user"></div>
          <div id="mlc-messages"></div>

          <form id="mlc-form">
            <input
              id="mlc-input"
              type="text"
              maxlength="2000"
              placeholder="พิมพ์ข้อความถึงที่รัก..."
              autocomplete="off"
              required
            >
            <button id="mlc-send" type="submit">ส่ง 💗</button>
          </form>

          <button id="mlc-logout">ออกจากระบบ</button>
        </div>

        <div id="mlc-status">กำลังเตรียมระบบแชต...</div>
      </div>
    </section>
  `;

  document.body.appendChild(mlcRoot);

  const mlcPanel = document.getElementById("mlc-panel");
  const mlcStatus = document.getElementById("mlc-status");
  const mlcLogin = document.getElementById("mlc-login");
  const mlcChat = document.getElementById("mlc-chat");
  const mlcMessages = document.getElementById("mlc-messages");
  const mlcInput = document.getElementById("mlc-input");

  document.getElementById("mlc-open").onclick = () => {
    mlcPanel.classList.toggle("show");
  };

  document.getElementById("mlc-close").onclick = () => {
    mlcPanel.classList.remove("show");
  };

  // 2. โหลด Firebase SDK
  function mlcLoadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.onload = resolve;
      script.onerror = () => reject(new Error("โหลด Firebase ไม่สำเร็จ"));
      document.head.appendChild(script);
    });
  }

  async function mlcStartFirebase() {
    try {
      const version = "13.4.0";
      const base = "https://www.gstatic.com/firebasejs/" + version + "/";

      await mlcLoadScript(base + "firebase-app-compat.js");
      await mlcLoadScript(base + "firebase-auth-compat.js");
      await mlcLoadScript(base + "firebase-firestore-compat.js");

      // 3. ข้อมูล Firebase ของ MyLoveChat
      const firebaseConfig = {
        apiKey: "AIzaSyBzkNxuvdyH7AgJl2lvmm9aAOpFcsNieoc",
        authDomain: "mylovechat-2dd2f.firebaseapp.com",
        projectId: "mylovechat-2dd2f",
        storageBucket: "mylovechat-2dd2f.firebasestorage.app",
        messagingSenderId: "555168294117",
        appId: "1:555168294117:web:8c6165f83b984aaf31e00c",
        measurementId: "G-PTTW6TSDMX"
      };

      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }

      const auth = firebase.auth();
      const db = firebase.firestore();
      const provider = new firebase.auth.GoogleAuthProvider();

      let currentUser = null;
      let unsubscribeMessages = null;
      let canSend = false;

      mlcStatus.innerText = "พร้อมเข้าสู่ระบบแล้ว 💗";

      // 4. เข้าสู่ระบบ Google
      document.getElementById("mlc-login-btn").onclick = async () => {
        try {
          mlcStatus.innerText = "กำลังเข้าสู่ระบบ...";
          await auth.signInWithPopup(provider);
        } catch (error) {
          console.error(error);
          mlcStatus.innerText =
            "เข้าสู่ระบบไม่สำเร็จ: " + error.message;
        }
      };

      // 5. ตรวจสอบผู้ใช้และสิทธิ์ Firestore
      auth.onAuthStateChanged(user => {
        currentUser = user;
        canSend = false;

        if (unsubscribeMessages) {
          unsubscribeMessages();
          unsubscribeMessages = null;
        }

        mlcMessages.innerHTML = "";

        if (!user) {
          mlcLogin.style.display = "block";
          mlcChat.style.display = "none";
          mlcStatus.innerText = "เข้าสู่ระบบเพื่อเริ่มคุยกันนะ 💕";
          return;
        }

        mlcLogin.style.display = "none";
        mlcChat.style.display = "flex";

        document.getElementById("mlc-user").innerText =
          "เข้าสู่ระบบแล้ว: " + (user.email || user.displayName);

        mlcStatus.innerText = "กำลังตรวจสอบสิทธิ์ห้องแชต...";

        // อ่านข้อความแบบเรียลไทม์
        const messageRef = db
          .collection("rooms")
          .doc("private-room")
          .collection("messages");

        unsubscribeMessages = messageRef
          .orderBy("createdAt", "asc")
          .limit(100)
          .onSnapshot(snapshot => {
            canSend = true;
            mlcStatus.innerText = "เชื่อมต่อห้องแชตแล้ว 💗";
            mlcMessages.innerHTML = "";

            snapshot.forEach(doc => {
              const data = doc.data();

              const bubble = document.createElement("div");
              bubble.className =
                "mlc-bubble " +
                (data.senderId === user.uid
                  ? "mlc-mine"
                  : "mlc-theirs");

              const messageText = document.createElement("div");
              messageText.textContent = data.text || "";
              bubble.appendChild(messageText);

              const time = document.createElement("span");
              time.className = "mlc-time";

              if (data.createdAt && data.createdAt.toDate) {
                time.textContent = data.createdAt
                  .toDate()
                  .toLocaleString("th-TH", {
                    dateStyle: "short",
                    timeStyle: "short"
                  });
              } else {
                time.textContent = "กำลังส่ง...";
              }

              bubble.appendChild(time);
              mlcMessages.appendChild(bubble);
            });

            mlcMessages.scrollTop = mlcMessages.scrollHeight;
          }, error => {
            console.error(error);
            canSend = false;

            if (error.code === "permission-denied") {
              mlcStatus.innerText =
                "บัญชีนี้ยังไม่มีสิทธิ์เข้าห้องแชต กรุณาตรวจสอบ Gmail ใน Firestore Rules";
            } else {
              mlcStatus.innerText =
                "เกิดข้อผิดพลาดในการโหลดข้อความ: " + error.message;
            }
          });
      });

      // 6. ส่งข้อความ
      document.getElementById("mlc-form").onsubmit = async event => {
        event.preventDefault();

        const text = mlcInput.value.trim();

        if (!text || !currentUser || !canSend) return;

        const sendButton = document.getElementById("mlc-send");
        sendButton.disabled = true;

        try {
          await db
            .collection("rooms")
            .doc("private-room")
            .collection("messages")
            .add({
              text: text,
              senderId: currentUser.uid,
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });

          mlcInput.value = "";
        } catch (error) {
          console.error(error);
          mlcStatus.innerText =
            "ส่งข้อความไม่สำเร็จ: " + error.message;
        } finally {
          sendButton.disabled = false;
        }
      };

      // 7. ออกจากระบบ
      document.getElementById("mlc-logout").onclick = async () => {
        if (unsubscribeMessages) {
          unsubscribeMessages();
          unsubscribeMessages = null;
        }

        await auth.signOut();
      };

    } catch (error) {
      console.error(error);
      mlcStatus.innerText =
        "ไม่สามารถเชื่อมต่อ Firebase ได้: " + error.message;
    }
  }

  mlcStartFirebase();
})();
