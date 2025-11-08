export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abin Varghese",
    url: "https://abinvarghese.me",
    sameAs: [
      "https://www.linkedin.com/in/toabinvarghese",
      "https://github.com/AbinVarghexe",
      "https://www.behance.net/toabinvarghese",
    ],
    jobTitle: "Front-End Developer & UI/UX Designer",
    worksFor: {
      "@type": "Organization",
      name: "INCIAL",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Amal Jyothi College of Engineering",
    },
    knowsAbout: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "UI/UX Design",
      "Figma",
      "JavaScript",
      "Python",
      "Hugging Face Models",
    ],
    email: "mailto:toabinvarghese@gmail.com",
    telephone: "+916282824259",
    image: "https://abinvarghese.me/profile.jpg",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
}

