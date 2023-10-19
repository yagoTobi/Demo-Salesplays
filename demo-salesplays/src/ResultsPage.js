import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ResultsPage.css";

export default function ResultsPage() {
  return (
    <div className="ResultsPage">
      <Banner />
      <div className="main-content">
        <PreviewColumn />
        <SalesPlaysColumn />
        <ChatGPTColumn />
      </div>
    </div>
  );
}

function Banner() {
    const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="banner">
      <ul className="category-list">
        <li>
          <Link to="/Category1">Play by product</Link>
        </li>

        <li
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link to="/Category2">Play by industry</Link>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/Industry1">Healthcare & Life Sciences</Link>
              </li>
              <li>
                <Link to="/Industry2">Financial Services</Link>
              </li>
              <li>
                <Link to="/Industry3">Retail & Customer Goods</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/Category3">Create & Close (C&C)</Link>
        </li>
        <li>
          <Link to="/Category4">Customer Stories</Link>
        </li>
      </ul>
    </div>
  );
}

function PreviewColumn() {
  return (
    <div className="preview-column">
      <div className="preview-banner">
        <p>
          I have an opps in RCPG, C&C with data cloud Cloud product, can you
          help?
        </p>
        <hr />
        <h2>Keywords extracted:</h2>
        <span className="pill pill1">RCPG</span>
        <span className="pill pill2">C&C</span>
        <span className="pill pill3">Data Cloud</span>
        <span className="pill pill4">Cloud Product</span>
        <span className="pill pill5">Opportunity</span>
        <span className="pill pill6">Help</span>
      </div>
    </div>
  );
}

function SalesPlay({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sales-play">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => setIsOpen(!isOpen)}>Further Info</button>
      {isOpen && <p>More info here...</p>}
    </div>
  );
}

function SalesPlaysColumn() {
  return (
    <div className="sales-plays-column">
      <h2 style={{ padding: "10px" }}>
        We believe these to be the most suitable sales plays for your case
      </h2>
      <SalesPlay
        title="Tableau C&C: Expand recent, satisfied customers"
        description="This play targets customers who bought Tableau at least twice
in the last six months. Use this play to lock-in future demand from this
account"
      />
      <SalesPlay
        title="Tableau: Convert Legacy Licenses to Subscription"
        description="Target accounts that currently have some licenses to renew on
Legacy/Perpetual and after the 3 year notice, an uplift will apply to their services contract."
      />
      <SalesPlay
        title="Upsell Tableau Reader Licenses"
        description="Reader activations means the users are eager for data. Take
those use cases and share with the decision maker to ensure they have a scalable, secure, and more interactive way to engage with their data"
      />
    </div>
  );
}

function ChatGPTColumn() {
  return (
    <div className="chatgpt-banner">
      <h2>
        <span className="icon">⭐</span> Einstein GPT
      </h2>
      <div className="chatgpt-response">
        <h3>Key Points to Know About RCPG Industry:</h3>
        <ul>
          <li>
            <strong>Market Dynamics:</strong> Driven by consumer demand, making
            seasonality, promotions, and market trends significant.
          </li>
          <li>
            <strong>Supply Chain:</strong> Essential to understand as
            disruptions can have a significant impact on sales and customer
            satisfaction.
          </li>
          <li>
            <strong>Data-Driven Decisions:</strong> The industry is leaning
            towards using data analytics for inventory management, customer
            segmentation, and pricing strategies.
          </li>
          <li>
            <strong>Sustainability:</strong> Growing focus on eco-friendly
            practices in production and packaging.
          </li>
          <li>
            <strong>E-commerce Impact:</strong> The rise of online shopping
            demands adaptation to digital environments, including cloud-based
            solutions.
          </li>
        </ul>
      </div>
      <hr />
      <div className="message-bar">
        <input type="text" placeholder="Type your message..." />
        <button className="ask-button">Ask</button>
      </div>
    </div>
  );
}
