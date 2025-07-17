import React, { useState } from "react";
import { GithubIcon, TwitterIcon, LinkedInIcon } from "./SocialIcons";
import { MenuIcon } from "./MenuIcon";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroImageUrl = "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  const profileImageUrl = "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200";

  return (
    <div>
      {/* Navbar */}
      <nav>
        <div>
          <div>
            <div>
              <span>Logo</span>
            </div>
            <div>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
            <div>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuIcon isOpen={isMenuOpen} />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div>
            <div>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div>
        <div>
          <div>
            <main>
              <div>
                <h1>
                  <span>Welcome to Our</span>{" "}
                  <span>Amazing Landing Page</span>
                </h1>
                <p>
                  Discover the power of Tailwind CSS with this beautifully crafted landing page. Responsive, modern, and easy to customize.
                </p>
                <div>
                  <div>
                    <a href="#">
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div>
          <img
            src={heroImageUrl}
            alt="Hero image"
          />
        </div>
      </div>

      {/* Profile Card */}
      <div>
        <div>
          <div>
            <div>
              <img
                src={profileImageUrl}
                alt="Profile picture"
              />
              <h3>John Doe</h3>
              <p>Web Developer & Designer</p>
              <p>
                Passionate about creating beautiful and functional web experiences using the latest technologies.
              </p>
              <div>
                <a href="#">
                  <GithubIcon />
                </a>
                <a href="#">
                  <TwitterIcon />
                </a>
                <a href="#">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
