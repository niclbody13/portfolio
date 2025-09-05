import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-[80rem] font-sans mx-auto flex flex-col justify-center p-8">
      <h2 className="text-3xl font-bold ml-16 mb-6 text-left">Get in Touch</h2>
      <div className="wrapper flex flex-row items-center justify-center flex-wrap gap-6">
        <div>
          <a
            href="mailto:haralambidis.nico@gmail.com"
            className="flex items-center gap-2 text-lg hover:underline"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-xl text-[#ea4335]" />
            <span className="contactInfo">haralambidis.nico@gmail.com</span>
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/nicolas-haralambidis/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg hover:underline"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-xl text-[#0a66c2]" />
            <span className="contactInfo">nicolas-haralambidis</span>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/niclbody13"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg hover:underline"
          >
            <FontAwesomeIcon icon={faGithub} className="text-xl" />
            <span className="contactInfo">niclbody13</span>
          </a>
        </div>
      </div>
    </section>
  );
}