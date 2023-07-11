import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <button className="top-44 absolute">
        <Link to="/studentsignup">Student</Link>
      </button>
      <button>
        <Link to="/adminsignup">Admin</Link>
      </button>
      <Footer />
    </div>
  );
}
