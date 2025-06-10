import React, { useState } from 'react';

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [messageSent, setMessageSent] = useState(false);

  // Form field states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const faqs = [
    { question: "What is Mapify?", answer: "Mapify is a user-friendly mind mapping tool designed to help individuals and teams visually organize ideas, tasks, and information. Whether you're planning a project, brainstorming for a class, or outlining a concept, Mapify provides an intuitive drag-and-drop interface that makes it easy to create, connect, and structure your thoughts efficiently. It's perfect for students, professionals, and creatives looking to bring clarity and structure to their thinking." },
    { question: "Is Mapify free to use?", answer: "Yes, Mapify offers a free version that includes all the essential features you need to get started. With the free plan, you can create unlimited mind maps, customize nodes, and access core tools for organizing your ideas. For users who need more advanced capabilities—like enhanced export options, premium templates, or extended collaboration features—Mapify also provides paid plans." },
    { question: "Can I export my mind maps?", answer: "Absolutely! Mapify supports exporting your mind maps in various formats such as PDF, PNG, and interactive HTML. This allows you to share your maps with others, include them in presentations or reports, or keep them for offline use. The export feature ensures your work remains portable and easy to access across different platforms and devices." },
    { question: "Can I collaborate with others?", answer: "Definitely! Mapify is built for collaboration. You can invite team members, classmates, or colleagues to work on mind maps together in real-time. Everyone can view, edit, and comment on the map simultaneously, making it an ideal tool for group brainstorming sessions, project planning, or remote teamwork. Permissions can also be managed to control who can view or edit each map." },
    { question: "How secure is my data?", answer: "At Mapify, your privacy and data security are top priorities. We use advanced encryption protocols—both in transit and at rest—to protect your information from unauthorized access. Additionally, all user data is stored on secure servers with regular backups. You can trust that your mind maps and personal information are safe with us." }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);

    // Clear form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');

    // Hide popup after 3s
    setTimeout(() => setMessageSent(false), 3000);
  };

  return (
    <section className="contact-page" id="contact">
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>Have questions about Mapify? We're here to help. Reach out to our team for support, feedback, or partnerships.</p>
      </div>

      <div className="contact-section">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you. Fill the form and we’ll reply soon.</p>
          <div className="info-item">
            <span>📧 Email</span>
            <p>support@mapify.app</p>
          </div>
          <div className="info-item">
            <span>📞 Phone</span>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="info-item">
            <span>📍 Location</span>
            <p>123 Mind Street, SF, CA</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="Your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Send Message</button>
          {messageSent && <p className="popup-message">Message sent successfully!</p>}
        </form>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question} <span>{activeIndex === index ? '▲' : '▼'}</span>
              </button>
              {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
