// ===== Mobile Menu Toggle =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ===== AOS Initialization =====
AOS.init({
  duration: 1000,
  offset: 100,
  once: true
});

// ===== Hero Section Text Rotation =====
const heroTexts = [
  "Empowering You Through Digital Skills.",
  "Master Computer Skills Easily.",
  "Upgrade Your Skills. Secure Your Future.",
  "From Basics to Brilliance in Computing.",
  "Join SR Computer Academy Today!"
];

let heroIndex = 0;
const heroElement = document.querySelector('.hero-content h1');

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroTexts.length;
  heroElement.textContent = heroTexts[heroIndex];
}, 4000); // Change text every 4 seconds

// ===== Course Details Data =====
const courseData = {
  dca: {
    title: "DCA (Diploma in Computer Applications)",
    desc: "Learn computer fundamentals, MS Office, internet, and basics of programming. Ideal for beginners to get hands-on computer skills."
  },
  adca: {
    title: "ADCA (Advanced Diploma in Computer Applications)",
    desc: "Advanced computer concepts, programming languages, database management, and practical applications for career growth."
  },
  dfa: {
    title: "DFA (Diploma in Financial Accounting)",
    desc: "Comprehensive accounting, Tally ERP, and financial management skills for students and professionals."
  },
  ccc: {
    title: "CCC (Course on Computer Concepts)",
    desc: "Basic digital literacy course covering MS Office, internet browsing, email, and essential computer knowledge."
  },
  web: {
    title: "Web Design & Development",
    desc: "Learn HTML, CSS, JavaScript, and modern frameworks to build responsive and interactive websites."
  },
  data: {
    title: "Data Analytics",
    desc: "Analyze data using Excel, Python, and visualization tools. Learn insights generation for business and research."
  }
};

// ===== Course Details Modal =====
const modal = document.getElementById('courseModal');
const modalTitle = document.getElementById('modalCourseTitle');
const modalDesc = document.getElementById('modalCourseDesc');
const closeModal = document.querySelector('.close');

document.querySelectorAll('.view-details').forEach(btn => {
  btn.addEventListener('click', () => {
    const courseKey = btn.dataset.course;
    modalTitle.textContent = courseData[courseKey].title;
    modalDesc.textContent = courseData[courseKey].desc;
    modal.style.display = 'block';
  });
});

// Close modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target == modal) modal.style.display = 'none';
});

// // ===== Contact Form Submission =====
// const form = document.getElementById('contactForm');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const name = form.querySelector('input[placeholder="Your Name"]').value;
//   const email = form.querySelector('input[placeholder="Your Email"]').value;
//   const phone = form.querySelector('input[placeholder="Phone Number"]').value;
//   const message = form.querySelector('textarea').value;

//   if(name && email && phone && message){
//     // alert(`Thank you, ${name}! Your message has been sent successfully.`);
//     form.reset();
//   } else {
//     alert("Please fill out all fields before submitting.");
//   }
// });

// ===== Smooth Scrolling for Navbar =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: 'smooth'
    });
    navLinks.classList.remove('show'); // close menu on mobile
  });
});


// ##########################

// ===== Login Modals =====
const adminModal = document.getElementById("adminModal");
const studentModal = document.getElementById("studentModal");

document.getElementById("adminLoginBtn").onclick = () => adminModal.style.display = "block";
document.getElementById("studentLoginBtn").onclick = () => studentModal.style.display = "block";

document.getElementById("closeAdmin").onclick = () => adminModal.style.display = "none";
document.getElementById("closeStudent").onclick = () => studentModal.style.display = "none";

window.onclick = (event) => {
  if (event.target == adminModal) adminModal.style.display = "none";
  if (event.target == studentModal) studentModal.style.display = "none";
};

// ===== Admin Login =====
document.getElementById("adminSubmit").onclick = () => {
  const user = document.getElementById("adminUser").value.trim();
  const pass = document.getElementById("adminPass").value.trim();
  if (user === "admin" && pass === "adminsrca") {
    alert("Welcome Admin!");
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Invalid admin credentials.");
  }
};

// // ===== Student Login =====
// document.getElementById("studentSubmit").onclick = async () => {
//   const username = document.getElementById("studentUser").value.trim();
//   const password = document.getElementById("studentPass").value.trim();

//   if (!username || !password) {
//     alert("Please enter both username and password.");
//     return;
//   }
//   // https://script.google.com/macros/s/AKfycbwMnF4a-YFgrx0RTMbmKSD--irM6Wc1kaP7k33TfsE1xlI8niV3cacEZklkhq0nj-Q/exec
//   try {               
//     const sheetUrl = "https://script.google.com/macros/s/AKfycbwMnF4a-YFgrx0RTMbmKSD--irM6Wc1kaP7k33TfsE1xlI8niV3cacEZklkhq0nj-Q/exec"; // <-- replace this
//     const response = await fetch(`${sheetUrl}?user=${username}&pass=${password}`);
//     const data = await response.json();

//     if (data.status === "success") {
//       alert("Login successful!");
//       window.location.href = "student-portal.html";
//     } else {
//       alert("Invalid credentials. Please try again.");
//     }
//   } catch (error) {
//     alert("Error connecting to the server. Check your Apps Script URL.");
//   }
// };
// ===== Student Login =====
document.getElementById("studentSubmit").onclick = async () => {
  const username = document.getElementById("studentUser").value.trim();
  const password = document.getElementById("studentPass").value.trim();

  if (!username || !password) {
    alert("Please enter both username and password.");
    return;
  }

  // Show spinner
  document.getElementById("studentSubmit").disabled = true;
  document.getElementById("spinner").style.display = "inline-block";

  try {
    const sheetUrl = "https://script.google.com/macros/s/AKfycbwMnF4a-YFgrx0RTMbmKSD--irM6Wc1kaP7k33TfsE1xlI8niV3cacEZklkhq0nj-Q/exec";
    const response = await fetch(`${sheetUrl}?user=${username}&pass=${password}`);
    const data = await response.json();

    if (data.status === "success") {
      // alert("Login successful!");
      localStorage.setItem("studentData", JSON.stringify(data.student));
      window.location.href = "student-portal.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Error connecting to the server.");
  }

  // Hide spinner
  document.getElementById("spinner").style.display = "none";
  document.getElementById("studentSubmit").disabled = false;
};