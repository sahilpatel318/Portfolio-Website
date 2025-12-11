import { GraduationCap, Award, Target } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <GraduationCap className="text-blue-400" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <p className="text-lg font-semibold text-blue-400">
                Advanced Diploma, Computer Programming and Analysis.
              </p>
              <p className="text-gray-400">Seneca Polytechnic, Ontario</p>
              <p className="text-gray-400">May 2024 - May 2027 (Expected)</p>
              <div className="mt-4 p-4 bg-gray-900/50 rounded-lg">
                <p className="text-2xl font-bold text-blue-400 mb-1">3.9/4.0</p>
                <p className="text-sm text-gray-400">Cumulative GPA (up to 6th semester)</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Target className="text-purple-400" size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-white">About ME</h3>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                Hello! I’m <b>Sahil Patel</b>, a <b>Computer Programming and Analysis</b> student at Seneca Polytechnic, passionate about crafting impactful digital solutions. With a GPA of 3.7 and a strong foundation in software development, I specialize in building and debugging scalable full-stack applications.
              </p>
              <p className="leading-relaxed">
                I work fluently with <b>Python, SQL, and C,</b> alongside hands-on experience in <b>React and Flask.</b> I enjoy transforming ideas into user-focused, efficient systems and thrive in collaborative, fast-paced environments.
              </p>
              <p className="leading-relaxed">
                Beyond coding, I'm curious about <b>financial markets, emerging technologies, and leadership—believing</b> these shape strategic thinking and fuel innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-500/20 rounded-lg">
              <Award className="text-green-400" size={28} />
            </div>
            <h3 className="text-2xl font-semibold text-white">Academic Excellence</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h4 className="font-semibold text-white mb-3">Key Coursework:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>full-stack development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Data Structures & Algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Database Management Systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Artificial Intelligence & Machine Learning</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Achievements:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Consistently ranked among top students</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Recognized for academic excellence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Building scalable applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>working on real-world projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
