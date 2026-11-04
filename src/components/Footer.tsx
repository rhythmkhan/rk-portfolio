import { FormEvent, useState } from "react";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { pageRoutes } from "../lib/routes";

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 11.5a8 8 0 0 1-11.76 7.05L4 20l1.6-4A8 8 0 1 1 20 11.5Z" />
      <path d="M9.4 8.8c.2-.4.4-.4.7-.4h.6c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4 0 .6l-.5.8c-.1.2-.1.4 0 .5.4.7 1 1.3 1.7 1.7.2.1.4.1.5 0l.8-.5c.2-.1.4-.1.6 0l1.7.7c.3.1.4.3.4.5v.6c0 .3 0 .5-.4.7-.4.2-1.2.5-2.1.3-1-.2-2-.8-3.2-1.9-1-.9-1.7-1.9-1.9-2.9-.2-1 .1-1.8.3-2.3Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4l16 16" />
      <path d="M20 4L4 20" />
    </svg>
  );
}

export default function Footer() {
  const [contactEmail, setContactEmail] = useState("");

  const handleEmailSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = contactEmail.trim();
    const subject = encodeURIComponent("Project Inquiry");
    const body = encodeURIComponent(
      trimmedEmail
        ? `Hello Seratul Alim Khan,\n\nMy email is ${trimmedEmail}. I would like to discuss a project with you.`
        : "Hello Seratul Alim Khan,\n\nI would like to discuss a project with you.",
    );

    window.location.href = `mailto:hello@khanshaheb.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="pt-14 md:pt-24 pb-10 md:pb-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 md:gap-12 mb-10 md:mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-3 w-3 rounded-full bg-brand"></div>
              <span className="text-2xl font-bold">Rhythm</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 md:mb-10 leading-tight">
              Get Ready To Create<br />Great
            </h2>
            <form className="max-w-md relative" onSubmit={handleEmailSubmit}>
              <input
                type="email"
                value={contactEmail}
                onChange={(event) => setContactEmail(event.target.value)}
                placeholder="Share your email for a project discussion"
                className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-brand transition-colors pr-10"
              />
              <button
                type="submit"
                aria-label="Send email"
                className="absolute right-0 bottom-4 text-brand"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 md:mb-8">Quick Link</h4>
            <ul className="space-y-4 text-muted">
              <li>
                <a href={pageRoutes.about} className="hover:text-brand transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href={pageRoutes.service} className="hover:text-brand transition-colors">
                  Service
                </a>
              </li>
              <li>
                <a href={pageRoutes.contact} className="hover:text-brand transition-colors">
                  Contact Me
                </a>
              </li>
              <li>
                <a href={pageRoutes.blog} className="hover:text-brand transition-colors">
                  Blog Post
                </a>
              </li>
              <li>
                <a href={pageRoutes.pricing} className="hover:text-brand transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 md:mb-8">Contact</h4>
            <ul className="space-y-4 text-muted mb-5 md:mb-8">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand shrink-0" />
                <a href="mailto:hello@khanshaheb.com" className="hover:text-brand transition-colors">
                  hello@khanshaheb.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand shrink-0 mt-1" />
                <span>Tangail New Bus Terminal, Tangail</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand shrink-0" />
                <a href="tel:+8801978304389" className="hover:text-brand transition-colors">
                  01978-304389
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://wa.me/8801978304389"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-all opacity-50"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://www.instagram.com/seratul.alim"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-all opacity-50"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/seratul-alim"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-all opacity-50"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/seratul-alim"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-all opacity-50"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/seratulalimkhan"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand transition-all opacity-50"
              >
                <XIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 md:pt-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 text-center md:text-left">
          <p className="text-muted text-sm">
            © <span className="text-brand">Seratul Alim Khan</span> 2026. All Rights Reserved
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-sm text-muted">
            <a href={pageRoutes.terms} className="hover:text-brand">
              Terms & Condition
            </a>
            <a href={pageRoutes.privacy} className="hover:text-brand">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
