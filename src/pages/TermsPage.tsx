import Seo from "../components/Seo";
import { pageRoutes } from "../lib/routes";
import PageHero from "./PageHero";

export default function TermsPage() {
  return (
    <>
      <Seo
        title="Terms and Conditions"
        description="Read the project terms and conditions for services, revisions, communication, and delivery on Seratul Alim Khan's portfolio site."
        path={pageRoutes.terms}
      />
      <PageHero
        eyebrow="Terms"
        title="Simple terms for project communication and digital work."
        description="These terms outline how project discussions, deliverables, revisions, and communication are handled across this portfolio site."
      />
      <section className="py-24 bg-dark">
        <div className="max-w-5xl mx-auto px-6 grid gap-6">
          <div className="rounded-2xl border border-white/5 bg-card p-8">
            <h2 className="text-2xl font-bold mb-4">Project Scope</h2>
            <p className="text-muted leading-relaxed">
              Every project starts with a clear scope, timeline, and agreed deliverables. Any major change outside the approved scope may require a separate revision or updated estimate.
            </p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-card p-8">
            <h2 className="text-2xl font-bold mb-4">Revisions</h2>
            <p className="text-muted leading-relaxed">
              Reasonable revisions are supported during the active project phase. Large structural changes after approval are treated as a new task to keep delivery fair and predictable.
            </p>
          </div>
          <div className="rounded-2xl border border-white/5 bg-card p-8">
            <h2 className="text-2xl font-bold mb-4">Communication</h2>
            <p className="text-muted leading-relaxed">
              Communication can happen through email, WhatsApp, or direct project discussion. Fast and clear feedback helps keep progress smooth and delivery on track.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
