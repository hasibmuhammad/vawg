const Footer = () => {
  return (
    <div className="text-center my-4">
      <p>
        &copy;{new Date().getFullYear()}{" "}
        <a href="https://github.com/hasibmuhammad" target="_blank">
          Hasib Muhammad {"</>"}
        </a>{" "}
        <br />
        All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
