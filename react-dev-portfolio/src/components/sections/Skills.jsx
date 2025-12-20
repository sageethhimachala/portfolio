import { Code2, Sparkles } from "lucide-react";
import FadeIn from "../animations/FadeIn.jsx";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGithub,
  SiDocker,
  SiPython,
  SiFigma,
  SiMysql,
  SiCplusplus,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiVercel,
  SiCloudflare,
  SiWordpress,
  SiSupabase,
  SiJira,
  SiClickup,
  SiFastapi,
} from "react-icons/si";

const Skills = () => {
  // Categorize skills
  const skillCategories = {
    "Languages and Frameworks": [
      {
        id: 1,
        name: "React.js",
        icon: SiReact,
        level: "Expert",
        experience: "2+ years",
      },
      {
        id: 2,
        name: "Next.js",
        icon: SiNextdotjs,
        level: "Advanced",
        experience: "1+ years",
      },

      {
        id: 3,
        name: "Node.js",
        icon: SiNodedotjs,
        level: "Advanced",
        experience: "2+ years",
      },
      {
        id: 4,
        name: "FastAPI",
        icon: SiFastapi,
        level: "Intermediate",
        experience: "1+ years",
      },
      {
        id: 5,
        name: "Springboot",
        icon: SiSpringboot,
        level: "Intermediate",
        experience: "1+ years",
      },
      {
        id: 6,
        name: "JavaScript",
        icon: SiJavascript,
        level: "Expert",
        experience: "2+ years",
      },
      {
        id: 7,
        name: "TypeScript",
        icon: SiTypescript,
        level: "Advanced",
        experience: "1+ years",
      },
      {
        id: 8,
        name: "Python",
        icon: SiPython,
        level: "Advanced",
        experience: "4+ years",
      },
      {
        id: 9,
        name: "C++",
        icon: SiCplusplus,
        level: "Intermediate",
        experience: "2+ years",
      },
      {
        id: 10,
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        level: "Expert",
        experience: "2+ years",
      },
    ].filter(Boolean),
    Databases: [
      {
        id: 11,
        name: "MySQL",
        icon: SiMysql,
        level: "Expert",
        experience: "4+ years",
      },
      {
        id: 12,
        name: "MongoDB",
        icon: SiMongodb,
        level: "Advanced",
        experience: "2+ years",
      },
      {
        id: 13,
        name: "PostgreSQL",
        icon: SiPostgresql,
        level: "Advanced",
        experience: "1+ years",
      },
    ].filter(Boolean),
    Tools: [
      {
        id: 14,
        name: "GitHub",
        icon: SiGithub,
        level: "Expert",
        experience: "2+ years",
      },
      {
        id: 15,
        name: "Docker",
        icon: SiDocker,
        level: "Intermediate",
        experience: "1+ years",
      },
      {
        id: 16,
        name: "Supabase",
        icon: SiSupabase,
        level: "Intermediate",
        experience: "1+ years",
      },
      {
        id: 17,
        name: "jira",
        icon: SiJira,
        level: "Expert",
        experience: "1+ years",
      },
      {
        id: 18,
        name: "ClickUp",
        icon: SiClickup,
        level: "Intermediate",
        experience: "1+ years",
      },
      {
        id: 19,
        name: "Wordpress",
        icon: SiWordpress,
        level: "Advanced",
        experience: "1+ years",
      },
      {
        id: 20,
        name: "Figma",
        icon: SiFigma,
        level: "Advanced",
        experience: "2+ years",
      },
      {
        id: 21,
        name: "Vercel",
        icon: SiVercel,
        level: "Advanced",
        experience: "1+ years",
      },
      {
        id: 22,
        name: "Cloudflare",
        icon: SiCloudflare,
        level: "Advanced",
        experience: "1+ years",
      },
    ].filter(Boolean),
  };

  // Get proficiency percentage
  const getProficencyLevel = (level) => {
    const levels = {
      Expert: 95,
      Advanced: 80,
      Intermediate: 65,
    };
    return levels[level] || 50;
  };

  // Get level color
  const getLevelColor = (level) => {
    const colors = {
      Expert: "text-[#8DFF69] bg-[#8DFF69]/20 border-[#8DFF69]/30",
      Advanced: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
      Intermediate: "text-emerald-400 bg-emerald-500/20 border-emerald-500/30",
    };
    return colors[level] || "text-gray-400 bg-gray-500/20 border-gray-500/30";
  };

  return (
    <section id="skills" className="relative py-20 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <FadeIn delay={100}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                My Expertise
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency
              leveles.
            </p>
          </div>
        </FadeIn>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(
            ([category, categorySkills], categoryIndex) => (
              <FadeIn key={category} delay={categoryIndex * 100}>
                <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="w-1 h-8 bg-linear-to-b from-primary/30 to-primary/10 rounded-full"></div>
                    <h3 className="text-xl font-medium text-white">
                      {category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5">
                    {categorySkills.map((skill, skillIndex) => {
                      const IconComponent = skill.icon || Code2;
                      const proficiency = getProficencyLevel(skill.level);

                      return (
                        <div key={skill.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-white/5 rounded-lg">
                                <IconComponent className="w-4 h-4 text-primary" />
                              </div>

                              <div>
                                <div className="text-sm font-medium text-white">
                                  {skill.name}
                                </div>
                                <div className="text-xs text-white/50">
                                  {skill.experience}
                                </div>
                              </div>
                            </div>

                            <span
                              className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(
                                skill.level
                              )}`}
                            >
                              {skill.level}
                            </span>
                          </div>

                          <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div
                              className="absolute top-0 left-0 h-full bg-linear-to-r from-primary/10 to-primary/80 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${proficiency}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/5 group-hover:from-primary/5 group-hover:to-primary/5 rounded-2xl transition-all duration-300 pointer-events-none"></div>
                </div>
              </FadeIn>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
