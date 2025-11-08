// About Page - Biography, experience timeline, and skills
export default function AboutPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Learn more about my journey, experience, and skills
          </p>
        </div>

        {/* Biography */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Biography</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
              I'm a passionate full-stack developer with [X] years of experience building
              modern web applications. My journey in tech started [brief story], and since
              then, I've been dedicated to creating elegant solutions to complex problems.
            </p>
            <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
              I specialize in building scalable applications using modern frameworks and
              technologies. My focus is on writing clean, maintainable code and creating
              exceptional user experiences. When I'm not coding, you can find me [hobbies].
            </p>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>
          <div className="space-y-8">
            {/* Experience Item */}
            <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
              <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
              <div className="mb-1 text-sm text-zinc-500 dark:text-zinc-400">
                2023 - Present
              </div>
              <h3 className="text-xl font-semibold mb-1">Senior Full-Stack Developer</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Company Name</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300">
                <li>Led development of [key project/feature]</li>
                <li>Improved application performance by [X]%</li>
                <li>Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
              <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
              <div className="mb-1 text-sm text-zinc-500 dark:text-zinc-400">
                2021 - 2023
              </div>
              <h3 className="text-xl font-semibold mb-1">Full-Stack Developer</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Another Company</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300">
                <li>Built and maintained multiple client applications</li>
                <li>Implemented RESTful APIs and database designs</li>
                <li>Collaborated with design team on UI/UX improvements</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
              <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
              <div className="mb-1 text-sm text-zinc-500 dark:text-zinc-400">
                2019 - 2021
              </div>
              <h3 className="text-xl font-semibold mb-1">Junior Developer</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">First Company</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-700 dark:text-zinc-300">
                <li>Developed front-end components using React</li>
                <li>Assisted in database migration and optimization</li>
                <li>Participated in agile development processes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
                Frontend
              </h3>
              <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>HTML5 / CSS3</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
                Backend
              </h3>
              <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>Node.js / Express</li>
                <li>Prisma ORM</li>
                <li>PostgreSQL</li>
                <li>RESTful APIs</li>
                <li>Authentication</li>
              </ul>
            </div>

            {/* Tools & Others */}
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
                Tools & Others
              </h3>
              <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                <li>Git / GitHub</li>
                <li>Vercel / AWS</li>
                <li>Docker</li>
                <li>Jest / Testing</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
