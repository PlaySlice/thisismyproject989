import React from 'react';

function App() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Boost Your Productivity with ez1</h1>
        <p className="description">
          Tired of repetitive tasks eating up your day? ez1 is an AI-powered productivity tool designed to automate your workflows, freeing you to focus on what truly matters. Reclaim your time and amplify your output with intelligent automation.
        </p>
        <div className="cta-container">
          <button className="cta-button">Get Early Access</button>
        </div>
      </header>

      <section className="features">
        <h2>Key Features</h2>
        <ul>
          <li><b>Automated Task Management:</b> Let AI handle your routine tasks.</li>
          <li><b>Intelligent Workflow Optimization:</b> Streamline your processes for maximum efficiency.</li>
          <li><b>Seamless Integration:</b> Works with your existing tools and platforms.</li>
        </ul>
      </section>

      <section className="signup-form">
        <h2>Sign Up for Early Access</h2>
        <p>Be among the first to experience the future of productivity. Enter your email to join our waitlist.</p>
        <form>
          <input type="email" placeholder="Your Email Address" className="email-input" required />
          <button type="submit" className="submit-button">Join Waitlist</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2023 ez1.dev. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
