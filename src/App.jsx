import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  HeartPulse,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import "./App.css";

const departments = [
  {
    number: "01",
    title: "Cardiology",
    text: "Advanced heart care with preventive screening and specialist consultation.",
    icon: HeartPulse,
  },
  {
    number: "02",
    title: "Dermatology",
    text: "Evidence-led skin, hair and aesthetic care tailored to every patient.",
    icon: Activity,
  },
  {
    number: "03",
    title: "Orthopaedics",
    text: "Personalised treatment for bones, joints, mobility and recovery.",
    icon: Users,
  },
  {
    number: "04",
    title: "General Medicine",
    text: "Comprehensive consultations, diagnostics and preventive healthcare.",
    icon: Stethoscope,
  },
];

const doctors = [
  {
    name: "Dr. Arjun Rao",
    specialty: "CARDIOLOGY",
    experience: "18+ YEARS",
  },
  {
    name: "Dr. Meera Shah",
    specialty: "DERMATOLOGY",
    experience: "14+ YEARS",
  },
  {
    name: "Dr. Kiran Menon",
    specialty: "ORTHOPAEDICS",
    experience: "16+ YEARS",
  },
];

const treatments = [
  "Executive health checkups",
  "Cardiac screening",
  "Diabetes management",
  "Skin & hair consultations",
  "Joint & mobility care",
  "Preventive wellness programs",
];

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Choose your preferred date and department in the appointment form. Our care team can then confirm the consultation through WhatsApp.",
  },
  {
    q: "Do you accept walk-in patients?",
    a: "Walk-ins can be accommodated subject to doctor availability. Advance appointments are recommended for specialist consultations.",
  },
  {
    q: "Can I speak with the clinic before booking?",
    a: "Yes. Use WhatsApp or the Slide to Call option to connect directly with the clinic reception team.",
  },
  {
    q: "Is this a real clinic?",
    a: "VITALIS CARE is a fictional premium clinic concept created by Gadge Creations as a website demonstration.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const closeMenu = () => setMenuOpen(false);

  const submitAppointment = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const phone = form.get("phone");
    const department = form.get("department");
    const date = form.get("date");
    const message = form.get("message") || "No additional message";

    const text =
      `Hello VITALIS CARE,%0A%0A` +
      `I would like to request an appointment.%0A%0A` +
      `Name: ${name}%0A` +
      `Phone: ${phone}%0A` +
      `Department: ${department}%0A` +
      `Preferred Date: ${date}%0A` +
      `Message: ${message}`;

    window.open(`https://wa.me/918767726496?text=${text}`, "_blank");
  };

  return (
    <div className="clinic-site">
      <div className="demo-bar">
        VITALIS CARE <span>FICTIONAL WEBSITE DEMO</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">
            <HeartPulse size={19} strokeWidth={1.7} />
          </span>
          <span>
            <strong>VITALIS</strong>
            <small>CARE CLINIC</small>
          </span>
        </a>

        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#departments" onClick={closeMenu}>Departments</a>
          <a href="#doctors" onClick={closeMenu}>Doctors</a>
          <a href="#treatments" onClick={closeMenu}>Treatments</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-appointment" href="#appointment" onClick={closeMenu}>
            Book Appointment <ArrowUpRight size={15} />
          </a>
        </nav>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid"></div>

          <div className="hero-content">
            <p className="eyebrow">PREMIUM MULTI-SPECIALTY CLINIC</p>
            <h1>
              Care that puts
              <em>you first.</em>
            </h1>
            <p className="hero-text">
              Modern healthcare with experienced specialists, thoughtful
              technology and a calmer patient experience.
            </p>

            <div className="hero-actions">
              <a href="#appointment" className="primary-button">
                Book an Appointment <ArrowRight size={17} />
              </a>
              <a href="#departments" className="text-button">
                Explore Care <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="hero-trust">
              <div>
                <strong>25+</strong>
                <span>Specialist services</span>
              </div>
              <div>
                <strong>15K+</strong>
                <span>Patient visits</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Care support</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-orbit orbit-one"></div>
            <div className="panel-orbit orbit-two"></div>
            <div className="medical-symbol">
              <HeartPulse size={58} strokeWidth={1.2} />
            </div>
            <div className="panel-card panel-card-top">
              <ShieldCheck size={17} />
              <span>Patient-first care</span>
            </div>
            <div className="panel-card panel-card-bottom">
              <Clock3 size={17} />
              <span>Open every day</span>
            </div>
          </div>
        </section>

        <section className="intro section">
          <div>
            <p className="eyebrow">A DIFFERENT KIND OF CARE</p>
            <h2>Healthcare designed around people.</h2>
          </div>
          <div className="intro-copy">
            <p>
              From your first consultation to long-term wellness, VITALIS CARE
              brings specialists, diagnostics and personalised support together
              under one roof.
            </p>
            <a href="#appointment" className="line-link">
              Start your care journey <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <section className="departments section" id="departments">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR DEPARTMENTS</p>
              <h2>Specialists for every stage of care.</h2>
            </div>
            <span className="section-number">01 / 04</span>
          </div>

          <div className="department-grid">
            {departments.map((item) => {
              const Icon = item.icon;
              return (
                <article className="department-card" key={item.number}>
                  <div className="card-top">
                    <span>{item.number}</span>
                    <Icon size={23} strokeWidth={1.4} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a href="#appointment">
                    Consult a specialist <ArrowUpRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="doctors section" id="doctors">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR SPECIALISTS</p>
              <h2>Experience you can trust.</h2>
            </div>
          </div>

          <div className="doctor-grid">
            {doctors.map((doctor, index) => (
              <article className="doctor-card" key={doctor.name}>
                <div className={`doctor-visual visual-${index + 1}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Stethoscope size={34} strokeWidth={1} />
                </div>
                <div className="doctor-info">
                  <p>{doctor.specialty}</p>
                  <h3>{doctor.name}</h3>
                  <span>{doctor.experience}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="treatments section" id="treatments">
          <div className="treatment-intro">
            <p className="eyebrow">CARE PROGRAMS</p>
            <h2>Focused treatment.<br /><em>Clearer outcomes.</em></h2>
            <p>
              Preventive care and specialist treatments designed to fit real
              lives, not just appointments.
            </p>
          </div>

          <div className="treatment-list">
            {treatments.map((item, index) => (
              <div className="treatment-row" key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
                <Check size={17} />
              </div>
            ))}
          </div>
        </section>

        <section className="why section">
          <div className="why-panel">
            <p className="eyebrow">WHY VITALIS</p>
            <h2>More than a clinic.<br /><em>A care experience.</em></h2>
          </div>

          <div className="why-grid">
            <div>
              <ShieldCheck size={22} />
              <h3>Trusted standards</h3>
              <p>Clear processes, modern facilities and patient-focused service.</p>
            </div>
            <div>
              <Users size={22} />
              <h3>Human connection</h3>
              <p>Care teams who listen, explain and support every step.</p>
            </div>
            <div>
              <Activity size={22} />
              <h3>Modern approach</h3>
              <p>Technology and preventive thinking integrated into everyday care.</p>
            </div>
          </div>
        </section>

        <section className="appointment section" id="appointment">
          <div className="appointment-copy">
            <p className="eyebrow">BOOK YOUR VISIT</p>
            <h2>Your next step starts <em>here.</em></h2>
            <p>
              Send your preferred details and our fictional reception team will
              respond through WhatsApp.
            </p>

            <div className="appointment-meta">
              <div>
                <CalendarDays size={18} />
                <span>Flexible appointments</span>
              </div>
              <div>
                <Clock3 size={18} />
                <span>Mon — Sun · 8 AM — 9 PM</span>
              </div>
            </div>
          </div>

          <form className="appointment-form" onSubmit={submitAppointment}>
            <div className="form-row">
              <label>
                FULL NAME
                <input name="name" required placeholder="Your name" />
              </label>
              <label>
                PHONE
                <input name="phone" required placeholder="+91" />
              </label>
            </div>

            <div className="form-row">
              <label>
                DEPARTMENT
                <select name="department" defaultValue="General Medicine">
                  <option>General Medicine</option>
                  <option>Cardiology</option>
                  <option>Dermatology</option>
                  <option>Orthopaedics</option>
                </select>
              </label>
              <label>
                PREFERRED DATE
                <input name="date" type="date" required />
              </label>
            </div>

            <label>
              MESSAGE
              <textarea name="message" rows="3" placeholder="Tell us how we can help"></textarea>
            </label>

            <button className="primary-button form-submit" type="submit">
              Request Appointment <MessageCircle size={17} />
            </button>

            <small>Demo form — opens WhatsApp with your appointment request.</small>
          </form>
        </section>

        <section className="faq section" id="faq">
          <div className="section-heading">
            <div>
              <p className="eyebrow">QUESTIONS</p>
              <h2>Before your visit.</h2>
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={faq.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={openFaq === index ? "rotate" : ""} size={19} />
                </button>
                {openFaq === index && <p>{faq.a}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-main">
            <p className="eyebrow">VISIT VITALIS</p>
            <h2>Care, conveniently<br /><em>within reach.</em></h2>
            <p>
              Demo location · Indiranagar, Bengaluru · Karnataka, India
            </p>

            <div className="contact-actions">
              <a href="https://wa.me/918767726496" target="_blank" rel="noreferrer" className="primary-button">
                WhatsApp Us <MessageCircle size={17} />
              </a>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="VITALIS CARE Demo Location"
              src="https://www.google.com/maps?q=Indiranagar+Bengaluru+Karnataka&output=embed"
              loading="lazy"
            ></iframe>
            <div className="map-label">
              <span>●</span>
              <div>
                <strong>VITALIS CARE</strong>
                <small>Demo Location · Bengaluru</small>
              </div>
            </div>
          </div>
        </section>

        <section className="emergency">
          <div>
            <span>NEED TO SPEAK WITH US?</span>
            <strong>Our reception team is available every day.</strong>
          </div>

          <div className="clinic-call-slider">
            <div className="clinic-call-info">
              <Phone size={17} />
              <div>
                <small>RECEPTION</small>
                <strong>+91 87677 26496</strong>
              </div>
            </div>

            <div className="clinic-slider">
              <span>SLIDE TO CALL</span>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="0"
                aria-label="Slide to call VITALIS CARE"
                onChange={(e) => {
                  if (Number(e.target.value) >= 90) {
                    window.location.href = "tel:+918767726496";
                    e.target.value = 0;
                  }
                }}
              />
              <b>→</b>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <a className="brand" href="#home">
            <span className="brand-mark">
              <HeartPulse size={19} strokeWidth={1.7} />
            </span>
            <span>
              <strong>VITALIS</strong>
              <small>CARE CLINIC</small>
            </span>
          </a>
          <p>Thoughtful healthcare for modern lives.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>EXPLORE</h4>
            <a href="#departments">Departments</a>
            <a href="#doctors">Doctors</a>
            <a href="#treatments">Treatments</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h4>CONTACT</h4>
            <a href="tel:+918767726496">+91 87677 26496</a>
            <span>Indiranagar, Bengaluru</span>
            <span>Mon — Sun · 8 AM — 9 PM</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 VITALIS CARE. Fictional demo website.</span>
          <span>Website crafted by <b>Gadge Creations</b></span>
        </div>
      </footer>
    </div>
  );
}

export default App;
