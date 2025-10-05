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
  "Learn. Practice. Excel.",
  "Master Computer Skills Easily.",
  "Hands-on Training & Real Projects.",
  "Join Shubham's Computer Classes Today!"
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

// ===== Contact Form Submission =====
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.querySelector('input[placeholder="Your Name"]').value;
  const email = form.querySelector('input[placeholder="Your Email"]').value;
  const phone = form.querySelector('input[placeholder="Phone Number"]').value;
  const message = form.querySelector('textarea').value;

  if(name && email && phone && message){
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    form.reset();
  } else {
    alert("Please fill out all fields before submitting.");
  }
});

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
