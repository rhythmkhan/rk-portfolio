import Seo from "../components/Seo";
import { pageRoutes } from "../lib/routes";
import PageHero from "./PageHero";

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Read the privacy policy for Seratul Alim Khan's website and learn how contact information is handled for project discussions."
        path={pageRoutes.privacy}
      />
      <PageHero
        eyebrow="Privacy"
        title="Your contact details stay private and are used only for project conversations."
        description="This privacy page explains how submitted contact information is handled when reaching out through the site, email, or direct inquiry."
      />
      <section className="py-24 bg-dark">
        <div className="max-w-5xl mx-auto px-6 grid gap-6">
          <div className="rounded-2xl border border-white/5 bg-card p-8">
            <h2 className="text-2xl font-bold mb-4">Information Use</h2>
            <p className="text-muted leading-relaxed">
              Contact details such as your name, email, phone number, and project message are used only to respond to your inquiry and discuss relevant work.
            </p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-card p-8">
            <h2 className="text-2xl font-bold mb-4">No Unnecessary Sharing</h2>
            <p className="text-muted leading-relaxed">
              Personal information is not sold, rented, or shared for unrelated marketing. Any shared details stay limited to communication necessary for the project.
            </p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-card p-8">
            <h2 className="text-2xl font-bold mb-4">Direct Contact</h2>
            <p className="text-muted leading-relaxed">
              If you want your information removed or updated, you can request that directly through email or WhatsApp at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
