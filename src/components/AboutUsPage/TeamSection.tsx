import Image from "next/image";
import React from "react";

const TeamSection = () => {
  return (
    <section id="team" className="py-16 px-6 lg:px-20 bg-gray-100 group">
      <h2 className="md:text-3xl   text-center mb-4 text-black">
        Meet Our Team
        <span className="h-1 block mt-2 mx-auto w-16 md:w-20 md:group-hover:w-32 group-hover:w-24 duration-300 bg-gradient-to-r from-mainColor2 to-mainColor3 rounded-lg"></span>
      </h2>
      <p className="text-lg lg:text-xl text-center max-w-4xl mx-auto mb-8 leading-relaxed text-gray-700">
        Our team of dedicated professionals from diverse fields drives our
        mission of delivering quality, trust, and commitment in every project.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Team Member Card */}
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300"
          >
            <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto mb-4">
              <Image
                src={member.image}
                alt={`${member.name} photo`}
                width={150}
                height={150}
                className="rounded-full object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-blue-900">
              {member.name}
            </h3>
            <p className="text-gray-500">{member.position}</p>
            <p className="text-gray-700 mt-4 text-sm">{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

// Sample team members data
const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    description:
      "Leading with vision and excellence, John has spearheaded our growth across diverse industries.",
    image:
      "https://img.freepik.com/free-photo/portrait-smiling-businessman_23-2148934278.jpg",
  },
  {
    name: "Jane Smith",
    position: "Head of Operations",
    description:
      "With meticulous planning and attention to detail, Jane ensures our operations are seamless.",
    image:
      "https://img.freepik.com/free-photo/successful-smiling-businesswoman-portrait_23-2148968976.jpg",
  },
  {
    name: "Michael Brown",
    position: "Chief Financial Officer",
    description:
      "Michael's financial insights have helped us grow sustainably and profitably.",
    image:
      "https://img.freepik.com/free-photo/young-confident-businessman_23-2148961244.jpg",
  },
  // Add additional team members similarly
];
