import React, { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles?username=@poundsmichaelscode")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 4))) 
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div
      name="Blog"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-20"
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Blog
          </p>
          <p className="py-6">My latest Dev.to articles</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="shadow-md shadow-gray-600 rounded-lg p-6 hover:scale-105 duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.description}</p>
              <a
                href={post.url}
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
