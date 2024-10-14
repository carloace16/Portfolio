import React from "react";

const Contact = () => {
  const email = "carloace166@gmail.com";

  const handleEmailClick = () => {
    // Opens the user's default email client
    window.location.href = `mailto:${email}`;
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-[50vh] py-8"
    >
      {" "}
      {/* Keep the background for contrast */}
      <h1
        onClick={handleEmailClick}
        className="text-9xl font-bold text-indigo-400 cursor-pointer 
             shadow-2xl hover:shadow-gray-400 transition duration-300 
             hover:scale-110"
      >
        Connect with Me 📩
      </h1>
      <p className="mt-10 text-2xl text-gray-400">
        Click the text above to send me an email!
      </p>
    </div>
  );
};

export default Contact;
