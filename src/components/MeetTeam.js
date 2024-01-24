import React from 'react';

import ReadMore from '../utils/ReadMore';


const team_members = [
  {
    "name": "Gilman Callsen",
    "title": "CEO & Founder",
    "img": require('../images/team-member-01.jpg').default,
    "bio": "Gilman is the CEO of Rho Impact and Founder CEO/CTO of Rho Impact's predecessor, Pit Rho (acquired by GM). With over 15 years of experience building and scaling technology companies, Gilman has been influential in integrating data science, software engineering, and cloud infrastructure to help organizations solve the world's most complex challenges.",
    "bio_extended": "Prior to founding Pit Rho (acquired by GM), Gilman co-founded MC10 (acquired by Medidata), which developed stretchable, flexible electronics primarily for medical applications. Before MC10, he founded his first company while in college, licensing electrochromic polymer technology for applications in improving building energy efficiency. Gilman holds a BA in Psychology from Yale University.",
    "linkedin": "https://www.linkedin.com/in/callsen/"
  },
  {
    "name": "Seth Sheldon, PhD",
    "title": "CSO & Founder",
    "img": require('../images/team-member-02.jpg').default,
    "bio": "Seth is the Chief Scientific Officer at Rho Impact and the former Director of Impact Analytics at Rho Impact's predecessor, Pit Rho / Rho AI. Seth was central to the methodology and scientific development of the CRANE tool - an open-source software tool for assessing the carbon reduction potential of emerging technologies and ventures.",
    "bio_extended": "With over 15 years' experience in environmental science and impact analytics, Seth was the Technical Director for Greenometry and the Environmental Data Lead for Lux Analytics Services Group. His work has been featured in Popular Science, the Wall Street Journal, the Los Angeles Times, Fortune, Fast Company, Greentech Media, E&E News, and Circle of Blue, among others. Seth holds a PhD in Environmental Science from the University of Massachusetts - Boston and holds a BS in Earth & Ocean Sciences from Duke University.",
    "linkedin": "https://www.linkedin.com/in/seth-sheldon-data/"
  },
  {
    "name": "Noah Miller",
    "title": "CAO & Founder",
    "img": require('../images/team-member-03.jpg').default,
    "bio": "Noah is the Chief Advisory Officer and Head of ESG Advisory Services at Rho Impact. With over a decade of ESG consulting experience, Noah has held multiple leadership roles including Senior Director for Summit Strategy Group's ESG Consulting Services practice and serving as interim ESG Director for multiple public and private companies.",
    "bio_extended": "A recognized thought-leader in the ESG space, Noah has been influential at building ESG capacity at the industry level, having led the curriculum development for multiple industry-specific ESG certification programs. Noah holds an MBA in Sustainable Innovation and a BA in Community Development & Applied Economics (CDAE) from the University of Vermont. Noah also holds an MS in Mediation & Applied Conflict Studies from Champlain College. Noah also served as a commander in the Israeli Army.",
    "linkedin": "https://www.linkedin.com/in/noah-miller-0a987154/"
  },
  {
    "name": "Cassie Borish, PhD",
    "title": "Director of Data Science & Founder",
    "img": require('../images/team-member-04.jpg').default,
    "bio": "Cassie leads the data science team at Rho Impact where she integrates the lastest innovations in AI/ML to further our products, services, and research initiatives. Previously, she helped lead the technical development of the CRANE tool.",
    "bio_extended": "With nearly a decade of experience, Cassie was a graduate student researcher and teaching assistant at University of South California (USC). While at USC, Cassie received a PhD and MS in Biomedical Engineering as well as an MS in Electrical Engineering. Cassie also completed her BS in Engineering at Harvey Mudd College.",
    "linkedin": "https://www.linkedin.com/in/cassieborish/"
  },
  {
    "name": "Amber Gold, PhD",
    "title": "Director Of Products & Founder",
    "img": require('../images/team-member-05.jpg').default,
    "bio": "Amber is the Director of Products at Rho Impact and has experience in engineering and human factors. She helps manage and support the development of the CRANE tool, and leads the product and technical development of Rho Impact's products.",
    "bio_extended": "With nearly a decade of data science experience, Amber has held roles that include serving as a Senior Human Factors Scientist at Exponent, a graduate researcher at Sanger Lab, and a teaching assistant at University of Southern California (USC). While at USC, Amber received a PhD and MS in Biomedical Engineering, in addition to completing her MS in Electrical Engineering. Amber also holds a BS in Biomedical Engineering from Arizona State University.",
    "linkedin": "https://www.linkedin.com/in/amber-dunning-gold/"
  },
  {
    "name": "Esther Bobbin",
    "title": "Director of Operations",
    "img": require('../images/team-member-15.jpg').default,
    "bio": "Esther oversees Rho Impact's operational activities, bringing over 15 years of experience cross-cutting international management consulting, enterprise systems integration, and natural language processing AI.",
    "bio_extended": "Esther is also committed to agricultural industry social justice reform and has led the charge as the executive director of a global non-profit.",
    "linkedin": "https://www.linkedin.com/in/estherbobbin/"
  },
  {
    "name": "Gal Shargil-Yaari",
    "title": "Senior ESG Advisor",
    "img": require('../images/team-member-14.jpg').default,
    "bio": "Gal is a Senior ESG Advisor at Rho Impact. She has a diverse background in ESG, corporate governance and litigation, regulatory standards and disclosure frameworks, with deep experience across the public, private, and non-profit sectors.",
    "bio_extended": "Gal's prior experiences include serving as an ESG research assistant at Columbia University, a regional manager for the Israeli American council, a legal associate in a top Israeli law firm, as well as being the co- founder and former president of Ladies Circle, an Israel - based NGO focused on women empowerment and economic inclusion.Gal also served as a commander in the Israeli Air Force.Gal holds a Master of Law, with a focus on ESG, from Columbia University.Gal also was the founder and president of Columbia's Corporate Responsibility Association.Additional education includes an MA in International Affairs and CSR from Tufts University and a BA in Government from Reichman University(Israel).",
    "linkedin": "https://www.linkedin.com/in/gal-shargil-yaari-076934b4/"
  },
  {
    "name": "Aurora Ginzburg, PhD",
    "title": "Principal Scientist",
    "img": require('../images/team-member-18.jpg').default,
    "bio": "Aurora is a Principal Scientist at Rho Impact and focuses on developing IMM practice. Drawing on her background in Green Chemistry and Systems Thinking, she designs impact assessment and data transformation methodologies that are transparent and actionable.",
    "bio_extended": "Aurora has extensive experience in sustainable chemical and material research and applies this technical expertise to analyze complex processes and identify leverage points. She is passionate about empowering clients to effect meaningful change with data-driven insights. Aurora has 10 years of experience working in various scientific roles, primarily within the ACS Green Chemistry Institute and the University of Oregon. She received her PhD and MS in Chemistry from the University of Oregon and a BS in Chemistry from California State University Channel Islands.",
    "linkedin": "https://www.linkedin.com/in/auroraginzburg/"
  },
  {
    "name": "James Midkiff",
    "title": "Senior ESG Advisor",
    "img": require('../images/team-member-07.jpg').default,
    "bio": "James is a Senior Technical Advisor at Rho Impact. He has a diverse background in ESG, disclosure frameworks, resource stewardship, environmental remediation, R&D, chemistry, data analysis, financial modeling, and consulting with over a decade in the energy industry.",
    "bio_extended": "James' prior experience serving as a Senior ESG Analyst for a data center developer, a Research Scientist and Director of Field Engineering for an oilfield water treatment company, a Senior Technical Specialist developing new products for an oilfield completion fluid and water management company, and an R&D Consultant for a nationwide tax consulting firm. James received an MS in Biology from Texas A&M University, completing his thesis under a Howard Hughes Medical Association laboratory. James also holds a BS in Molecular Cell Biology from Texas A&M University.",
    "linkedin": "https://www.linkedin.com/in/jamestmidkiff/"
  },
  {
    "name": "Xander Rothaus",
    "title": "Fractional CMO",
    "img": require('../images/team-member-12.jpg').default,
    "bio": "Xander leads Rho Impact’s marketing and communications in his role as Rho Impact’s Fractional CMO. His breadth of experience as an entrepreneur, technologist, and leader of consumer products companies are helping to bring Rho Impact’s products and services to the market.",
    "bio_extended": "In addition to his role at Rho Impact, Xander is also the CEO of Mounia Haircare products, a cruelty-free, vegan, and color-safe hair care line made from organic ingredients. With a passion for sustainable and ethical business practices, Xander has led Mounia to become a leader in the natural hair care industry. Under his leadership, the brand has gained a loyal following of customers who appreciate the high-quality, eco-friendly products that Mounia offers.",
    "linkedin": "https://www.linkedin.com/in/xander-rothaus-7657488/"
  },
  {
    "name": "Aral Tasher",
    "title": "Senior User Experience Engineer",
    "img": require('../images/team-member-06.jpg').default,
    "bio": "Aral is a Senior User Experience Engineer at Rho Impact and designed and executed the user experience component of the CRANE tool - an open-source software tool for assessing the carbon reduction potential of emerging technologies and ventures - while at Rho Impact's predecessor, Rho AI.",
    "bio_extended": "Prior to Rho Impact, Aral held user experience, research, and quality assurance roles at companies such as Philips, Novel Engineering, and the Harris Institute for Assured Information. Aral holds an MS in Information Assurance & Cyber Security and a BS in Software Engineering from the Florida Institute of Technology. Aral is also a NN/g Nielsen Norman Group certified User Experience Reseacher.",
    "linkedin": "https://www.linkedin.com/in/aral-tasher-uxc-828b383b/"
  },
  {
    "name": "Katia Carrady",
    "title": "ESG Analyst",
    "img": require('../images/team-member-13.jpg').default,
    "bio": "Katia is an ESG analyst at Rho Impact, supporting clients at the intersection of ESG, management, and international relations. Katia brings international experience and a Masters in Management and Bachelors in International Relations and Sustainability from the UMich.",
    "bio_extended": "While in school, Katia was a leader in the Michigan chapter of Tamid Group, where she delivered student-led consulting projects for various Israeli companies and investment funds. Katia also participated in several other ESG initiatives while in school, including the International Relations Career Challenge and the Fair Labor Association's Student Committee.",
    "linkedin": "https://www.linkedin.com/in/katia-carrady"
  },
  {
    "name": "Tyler Martin",
    "title": "Fractional CFO",
    "img": require('../images/team-member-19.jpg').default,
    "bio": "Tyler Martin is Rho Impact's Fractional CFO, a role he has held for over a decade with the company's predecessor. With a Ph.D. in Chemical Engineering from MIT and expertise in startup financing, Tyler has been instrumental to Rho Impact's growth.",
    "bio_extended": "",
    "linkedin": "https://www.linkedin.com/in/tyler-martin-a2124a48/"
  },
  {
    "name": "Robert Mains",
    "title": "Senior Advisor in Residence",
    "img": require('../images/team-member-20.jpg').default,
    "bio": "Robert joins Rho Impact following his tenure as the CEO of Ecofitt Corp, a Canadian energy efficiency provider acquired by CLEAResult. With over 20 years of experience in sustainability consulting, Rob has held senior advisory positions at the Summerhill Group, RAM Environmental Group, the Clean Foundation, and more.",
    "bio_extended": "Robert holds an MBA from Saint Mary's University, a Master of Resource and Environmental Management from Dalhousie University, and a BS in Geological Sciences from Queen's University. Robert also holds certifications in ESG from the Corporate Finance Institute and Indigenous Stakeholder Engagement from Indigenous Awareness Canada.",
    "linkedin": "https://www.linkedin.com/in/robert-mains/"
  },
]

function Team() {
  return (
    <section className="border-t border-gray-200 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
            <h2 className="h2">Meet the Rho Impact Team</h2>
          </div>

          {/* Team members */}
          <div
            className="max-w-sm mx-auto -my-6 sm:max-w-5xl sm:flex sm:flex-wrap sm:justify-center sm:-my-8 sm:-mx-3"
            data-aos-id-team
          >
            {/* Team Member Cards */}
            {
              team_members.map((member) => (
                <div
                  className="py-6 sm:w-1/2 md:w-1/3 sm:py-8 sm:px-3"
                  data-aos="zoom-y-out"
                  data-aos-anchor="[data-aos-id-team]"
                >
                  <div className="flex flex-col items-center">
                    <img
                      className="mb-4 rounded-full"
                      src={member.img}
                      width="120"
                      height="120"
                      alt={member.name}
                    />
                    <h4 className="mb-1 text-xl font-bold">{member.name}</h4>
                    <div className="mb-2 font-medium text-gray-400">
                      {member.title}
                    </div>
                    <div className="mb-3 text-center text-gray-600">
                      {member.bio}
                    </div>
                    {member.bio_extended && (
                      <ReadMore>
                        {member.bio_extended}
                      </ReadMore>
                    )}
                    {member.linkedin && (
                      <div className="text-sm font-medium text-gray-600">
                        <a
                          className="text-gray-900 hover:underline"
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          LinkedIn
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))

            }

          </div>
        </div>
      </div>
    </section >
  );
}

export default Team;
