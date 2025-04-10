import React from "react";
import "./Services.css"; // Add custom styles for Services

function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Build fast, responsive, and modern websites tailored to your needs.",
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Develop seamless mobile apps for iOS and Android platforms.",
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Design engaging and intuitive user interfaces for your products.",
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Grow your business with our tailored marketing strategies.",
    },
    {
      id: 5,
      title: "E-commerce Solutions",
      description: "Set up and manage your online store effortlessly.",
    },
  ];

  return (
    <div className="services">
      <h1 style={{backgroundColor:'purple',color:'white'}} className="services-title">Our Services</h1>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
