import { type Key, useEffect, useMemo, useRef, useState } from "react";

const designSkills = [
  { label: "TSX", value: 98 },
  { label: "JAVASCRIPT", value: 94 },
  { label: "REACT", value: 92 },
  { label: "TAILWIND CSS", value: 90 },
];

const developmentSkills = [
  { label: "SUPABASE", value: 91 },
  { label: "FIREBASE", value: 88 },
  { label: "MYSQL", value: 85 },
  { label: "PHP", value: 82 },
];

const automationSkills = [
  { label: "N8N", value: 94 },
  { label: "ZAPIER", value: 90 },
  { label: "MAKE", value: 86 },
  { label: "AGENT OPS", value: 78 },
];

const productionSkills = [
  { label: "PROMPT ENGINEERING", value: 97 },
  { label: "RAG PIPELINES", value: 89 },
  { label: "VOICE AI", value: 84 },
  { label: "AI CHATBOTS", value: 93 },
];

type Skill = {
  label: string;
  value: number;
};

type SkillColumnProps = {
  key?: Key;
  title: string;
  skills: Skill[];
  startIndex: number;
  progressValues: number[];
};

function SkillColumn({
  title,
  skills,
  startIndex,
  progressValues,
}: SkillColumnProps) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
        {title} <span className="h-px bg-white/20 flex-grow"></span>
      </h2>
      <div className="space-y-8">
        {skills.map((skill, index) => {
          const skillProgress = progressValues[startIndex + index] ?? 0;

          return (
            <div key={skill.label}>
              <div className="flex justify-between mb-2">
                <span className="font-bold text-sm">{skill.label}</span>
                <span className="font-bold text-sm">
                  {Math.round(skill.value * skillProgress)}%
                </span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill skill-bar-animated"
                  style={{ width: `${skill.value * skillProgress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const startedSkillCountRef = useRef(1);
  const progressValuesRef = useRef<number[]>([]);
  const skillGroups = useMemo(
    () => [
      { title: "Frontend", skills: designSkills },
      { title: "Backend", skills: developmentSkills },
      { title: "AI Automation", skills: automationSkills },
      { title: "AI Production", skills: productionSkills },
    ],
    [],
  );
  const allSkills = useMemo(
    () => skillGroups.flatMap((group) => group.skills),
    [skillGroups],
  );
  const [hasStarted, setHasStarted] = useState(false);
  const [progressValues, setProgressValues] = useState(() =>
    allSkills.map(() => 0),
  );

  useEffect(() => {
    progressValuesRef.current = progressValues;
  }, [progressValues]);

  useEffect(() => {
    let frameId = 0;

    const checkStart = () => {
      const section = sectionRef.current;
      if (!section || hasStarted) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const triggerLine = viewportHeight - viewportHeight / 3;

      if (rect.top <= triggerLine) {
        setHasStarted(true);
      }
    };

    const requestCheck = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        checkStart();
        frameId = 0;
      });
    };

    requestCheck();
    window.addEventListener("scroll", requestCheck, { passive: true });
    window.addEventListener("resize", requestCheck);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener("scroll", requestCheck);
      window.removeEventListener("resize", requestCheck);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    startedSkillCountRef.current = 1;
    let frameId = 0;
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      const nextProgress = progressValuesRef.current.map((value, index) => {
        if (index >= startedSkillCountRef.current || value >= 1) {
          return value;
        }

        return Math.min(1, value + delta / 900);
      });

      progressValuesRef.current = nextProgress;
      setProgressValues(nextProgress);

      const latestStartedIndex = startedSkillCountRef.current - 1;

      if (
        latestStartedIndex >= 0 &&
        latestStartedIndex < nextProgress.length &&
        startedSkillCountRef.current < nextProgress.length &&
        nextProgress[latestStartedIndex] >= 0.33
      ) {
        startedSkillCountRef.current += 1;
      }

      if (nextProgress.some((value) => value < 1)) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [allSkills.length, hasStarted]);

  return (
    <section ref={sectionRef} className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
        {skillGroups.map((group, index) => (
          <SkillColumn
            key={group.title}
            title={group.title}
            skills={group.skills}
            startIndex={index * 4}
            progressValues={progressValues}
          />
        ))}
      </div>
    </section>
  );
}
