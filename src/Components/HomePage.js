import React from "react";

export default function HomePage() {
  return (
    // TODO: Have an about section with a photo, short bio, and links to social media
    <div>
      <h1 className="heading">About Me</h1>
      <div className="bioContainer">
      <img
        src="../images/profilepic.png"
        className="profilePic"
        alt="Profile"
      />
        <p className="bio">
          Hey there! I'm a web developer with a passion for creating stunning
          and user-friendly websites. My journey into tech started with a coding
          bootcamp, where I fell in love with front-end development. Today, I
          bring my expertise in HTML, CSS, JavaScript, Bootstrap, and Git to
          every project, delivering visually appealing websites that provide an
          exceptional user experience. I've had the chance to work on some
          exciting projects and collaborate with talented teams of developers
          and designers. I bring my problem-solving skills, adaptability, and
          love of learning to every project, always striving to exceed
          expectations and deliver outstanding results. If you're looking for a
          web developer who's up for a challenge and driven to create something
          amazing, look no further. Let's work together and bring your vision to
          life!
        </p>
      </div>
    </div>
  );
}
