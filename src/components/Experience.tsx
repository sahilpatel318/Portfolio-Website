import { Briefcase,  Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: ' Information Technology Systems Technologist',
      company: ' Seneca Polytechnic',
      location: 'College',
      period: 'Sept 2025 - Dec 2025',
      highlights: [
        'Delivered frontline IT support to 500+ students and faculty, resolving hardware, software, and network issues with a 95% satisfaction rate.',
        'Managed MFA, MyID, and Former Student Portal (FSP) access troubleshooting, reducing re-ticketing by 20% through proactive documentation and user guidance.',
        'Utilized Salesforce Service Hub for end-to-end ticket tracking and escalation, achieving a 25% faster average response time.',
        'Maintained critical campus infrastructure (Wi-Fi, printing, MyApps) ensuring 99% uptime and consistent digital learning access.',
        'Authored professional support documentation and knowledge-base content improving user self-service efficiency by 30%.',
        'Applied cybersecurity and privacy best practices in every resolution to protect institutional and personal data assets.',

      ],
    },
    {
      title: 'Customer Service Manager',
      company: 'Walmart Canada',
      location: 'On-Site',
      period: 'July 2024 - Present',
      highlights: [
        'Provided exceptional customer service byassisting over 30 customers daily, increasing customer satisfaction scores by 15%.',
        'Managed point-of-sale systems efficiently, maintaining 100% accuracy in cash transactions and reducing checkout time by 10%. ',
        'Supported team initiatives that improved store operations, contributing to a 20% increase in monthly sales.',
        'Coordinated with the inventory team to ensure accurate stock levels, reducing product shortages by 20%.',
      ],
    },
    {
      title: ' Creative Digital Marketer',
      company: 'SMMA',
      location: 'Remote',
      period: 'Jan 2023 - Present',
      highlights: [
        'Developed and executed data-driven ad campaigns on platforms like Google Ads and Facebook Ads, achieving a 35% increase in click-through rates (CTR) and a 25% reduction in cost per acquisition (CPA), while using Python scripting and training a LLM for filtering negative keywords to optimise campaign performance.',
        'Designed and produced engaging visual content, including videos and graphics, tailored for targeted audiences, leading to a 40% boost in social media engagement and brand visibility across multiple platforms.',
        'Utilised tools like Crunchbase for outreach and prospecting, successfully identifying high-value leads and expanding client acquisition efforts, resulting in a 20% growth in the customer base.',
      ],
    },
    {
      title: 'Data Analyst',
      company: 'Freelance',
      location: 'Remote',
      period: 'Aug 2023 - Present',
      highlights: [
        'Designed and developed small-scale applications for clients, focusing on database integration and user interfaces.',
        'Conducted software testing and debugging to ensure optimal performance, reducing client-reported issues by 20%.',
        'Authored detailed technical documentation, including user guides and training materials, to ensure seamless adoption of solutions',
        'Optimized data processing workflows through innovative automation techniques, reducing client operational costs by 15%',
      ],
    },
    {
      title: ' Peer Mentor (Volunteer)',
      company: ' Seneca Polytechnic',
      location: 'College',
      period: 'April 2025 - Present',
      highlights: [
        'Mentored and supported first-year students by providing academic, technical, and personal guidance, improving mentee engagement and confidence.',
        'Conducted orientation and onboarding sessions to help students effectively use Seneca platforms (MySeneca, MyApps, MyID) and access key campus services.',
        'Collaborated with Student Life staff and peer mentors to monitor student progress, address challenges, and promote overall retention and success.',
        'Delivered one-on-one mentorship focused on academic planning, time management, and digital literacy, resulting in smoother program transitions.',
        'Applied strong interpersonal, leadership, and communication skills to create an inclusive, supportive, and professional student environment.',
      ],
    },
    {
      title: 'Vice-President – Seneca Disruptive Technologies Club | Volunteer',
      company: 'Seneca Polytechnic',
      location: 'On-Site',
      period: 'Sept 2024 - Present',
      highlights: [
        'Directed a team of 150+ members to organize and execute over 3 technology-focused events, including hackathons and workshops, driving a 30% increase in student engagement.',
        'Established cross-departmental collaborations, promoting interdisciplinary innovation and knowledge sharing on disruptive technologies.',
        'Managed the club’s budget and resources, ensuring financial 0transparency and efficiency in funding allocation for events and research initiatives. ',
      ],
    },
  ];


  return (
    <section id="experience" className="py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white flex items-center gap-3">
            <Briefcase className="text-blue-400" size={28} />
            Professional Experience
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-blue-400 mt-1.5">•</span>
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        </div>
    </section>
  );
}
