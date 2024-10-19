import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="bg-red-500 flex justify-center items-center">
    <header className="bg-zinc-800 p-10">
      <h1 className="text-5xl py-2 font-bold">React Tasks By CharlieDevs</h1>
      <p className="text-md text-slate-400">
      This project was developed with the goal of providing a solid structure 
      for any web application that requires user authentication, enabling efficient data management. 
      I have integrated all the key components of the MERN stack, from configuring the backend with 
      Node.js and Express to creating REST endpoints to handle CRUD operations on MongoDB. 
      The frontend is built with React, where I implemented authentication logic using JWT (JSON Web Tokens) 
      to ensure secure user sessions. The code is modular and easily scalable, designed to be a flexible 
      foundation upon which more features can be added, whether for personal or professional projects. 
      It is based on courses by Fernando Herrera and content creators like Fazt.</p>

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/register"
      >
        Get Started
      </Link>
    </header>
  </section>
  );
}

export default HomePage;
