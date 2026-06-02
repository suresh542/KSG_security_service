import { Award, Check } from 'lucide-react'
import ourCapImg from './images/ourCapImg.jpg'

export default function AboutTwo() {
  return (
    <section className="py-20 lg:py-28 green-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 text-cyber-green text-lg sm:text-xl lg:text-2xl xl:text-3xl font-body font-semibold uppercase tracking-widest">
              <span className="w-8 h-0.5 bg-cyber-green" /> Our Capabilities
            </div>
            {/* <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              This Is 24/7 Cyber Security{' '}
              <span className="gradient-text">Operation Centre</span> For Your Problem Solution.
            </h2> */}
            <p className="font-body text-md sm:text-md lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We provide trained, disciplined, and professional security guards for factories, hospitals, hotels, warehouses, offices, retail shops, and residential communities. Since 2010, we have been delivering reliable security services across Krishnagiri, Hosur, Denkanikottai, Dharmapuri, and Palacode with a strong focus on safety, discipline, and client satisfaction.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Trained & Verified Security Guards",
                "24/7 Security Manpower Support",
                "Staff Replacement & Backup Availability",
                "Proper Shift Management & Attendance Monitoring",
                "Regular Supervisor Visits & Site Inspections",
                "Discipline & Performance Monitoring",
                "Emergency Handling & Quick Response Support",
                "Security Solutions for Commercial & Residential Properties",
                "Experienced Management Team",
                "Reliable & Professional Service Since 2010",
              ].map((item, index) => (
                <li
                  key={index}
                  className=" flex items-center gap-4 px-5 py-4"
                >
                  <div className="flex items-center justify-center min-w-[40px] h-10">
                    <span className="text-blue-600 font-bold text-lg">✓</span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-lg sm:text-base leading-relaxed font-large">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={ourCapImg}
                alt="Cyber Security Team"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-cyber-green/20 to-transparent rounded-2xl" />
            </div>
            <div className="absolute -bottom-6 -left-6 lg:-left-10 stat-card rounded-xl p-4 backdrop-blur-sm">
              <div className="font-display text-3xl font-bold gradient-text">24/7</div>
              <div className="text-gray-400 text-sm font-body">Active Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
