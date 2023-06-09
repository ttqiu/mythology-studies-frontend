const About = () => {
  return (
    <div className="about">
      <h1 className="mt-6 text-center text-3xl font-bold tracking-tight mb-4">
        About Page
      </h1>
      <span className="block font-bold mb-4">
        <p>
          Welcome to the Mythology Studies website! Here, you'll discover a
          treasure trove of information about mystical creatures and their
          fascinating origins.
        </p>
        <p>
          Our website is designed to be a one-stop-shop for anyone interested in
          exploring the vast and complex world of mythology. With an intuitive
          search function and easy-to-use navigation, you can quickly find the
          information you need about the creatures that have captivated people's
          imaginations for centuries.
        </p>
        <p>
          From fierce dragons and magical unicorns to elusive mermaids and
          cunning tricksters, our website features a wealth of knowledge about
          the creatures that populate myths and legends from around the world.
          Each entry includes detailed information about the creature's history,
          cultural significance, and how it has been represented in art and
          literature.
        </p>
        <p>
          But we're not just about mystical creatures! As our website grows,
          we'll be adding more sections devoted to other fascinating topics
          within the field of mythology. From the gods and goddesses of ancient
          civilizations to the stories that have shaped our understanding of the
          world, there's always something new to explore on the Mythology
          Studies website.
        </p>
        <p>
          So whether you're a seasoned mythology enthusiast or just starting
          your journey of discovery, we invite you to explore our website and
          discover the rich, diverse world of mythology.
        </p>
      </span>
      <div className="profile">
        <div className="w-full rounded-lg shadow-md lg:max-w-sm">
          <img
            className="object-cover w-full h-40"
            src="https://imagizer.imageshack.com/img922/4452/yiTkeY.jpg"
            alt="profile"
          />
          <div className="p-4">
            <h4 className="text-xl font-semibold tracking-tight text-blue-600">
              Ting Ting Qiu
            </h4>
            <p className="mb-2 leading-normal">Fullstack Software Engineer</p>
            <div className="px-4 py-2 text-sm flex items-center justify-center space-x-8">
              <a href="https://github.com/ttqiu" target="blank">
                <img
                  style={{ width: 30, height: 30 }}
                  src="https://i.imgur.com/AjmoOeq.png"
                  alt="github"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ting-ting-qiu-062587246/"
                target="blank"
              >
                <img
                  style={{ width: 30, height: 30 }}
                  src="https://i.imgur.com/N4ceP5A.png"
                  alt="linkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
