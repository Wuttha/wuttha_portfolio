const data = {
  name: "Dr. Worachet Uttha",
  work:
    "Lecturer at Software Engineering Program, Faculty of Science and Technology, Nakhon Pathom Rajabhat University",
  aboutme: {
    fullName: "Worachet Uttha",
    phone: "+6634109300,3297",
    email: "wuttha@webmail.npru.ac.th",
    website: "http://pws.npru.ac.th/wuttha",
    linkedin:"https://www.linkedin.com/in/worachet-uttha-a948a465/",
    address:
      "Nakhon Pathom Rajabhat University 85 Malaiman Road, Muang District, Nakhon Pathom 73000 Thailand",
    description:
      "Currently I’m a lecturer at Software Engineering Program, Faculty of Science and Technology , Nakhon Pathom Rajabhat University. I’m interested in Specification and Verification of access control model, Security policies, Web Service, SOA, Distributed System and Software Engineering.",
  },
  education: [
    {
      degree: "Doctor of Computer Science",
      university: "University of Aix-Marseille, France",
      duration:"2012 - 2016",
      description: "Thesis : Study of Security policies for distributed applications : Problems of transitive dependencies."
    },
    {
      degree: "Master of Computer Science",
      university: "University of Provence (Marseille I), France",
      duration:"2010 - 2012",
      description: "Master’s thesis : Specification and Verification of Security Policies based on Rewriting System"
    },
    {
      degree: "Bachelor of Computer Science",
      university: "University of the Méditerranée (Marseille II), France",
      duration:"2009 - 2010",
      description: "Licence Informatique"
    },
    {
      degree: "University Diploma in Technology in Computer Science",
      university: "University Institutes of Technology of Saint-dié-des-Vosges, University of Nancy, France",
      duration:"2007 - 2009",
      description: "Diplôme Universitaire de Technologie (DUT) Informatique"
    },
    {
      degree: "University Diploma of Preparation for Scientific and Technological Training of French University Institutes of Technology",
      university: "University Institutes of Technology of Longwy, University of Nancy, France",
      duration:"2006 - 2007",
      description: "Diplôme Universitaire 'Préparation aux Formations Scientifiques et Technologiques des Instituts Universitaires de Technologie français' (DU PFST)"
    }
  ],
  experience:[
    {
      title:"Lecturer",
      organization:"Nakhon Pathom Rajabhat University",
      period:"2016 - Current",
      description:"Permanent Lecturer at at Software Engineering Program, Faculty of Science and Technology, Nakhon Pathom Rajabhat University."
    },
    {
      title:"Committee of TSAC",
      organization:"Thai Student Academic Conference",
      period:"2014 - 2016",
      description:"Organizing the academic conferences for students studyings in Europe that allows them to exchange their knowledge and research findings, which can be adapted and implemented in Thailand."
    },
    {
      title:"Conseil of AETF",
      organization:"L'Association des étudiants thaïlandais en France sous le patronage royal",
      period:"2012 - 2014",
      description:"Providng all necessary informations for new arrivals and spreading the news to thai students in France. Organizing the activities and the academic conferences in order to assemble thai students together."
    },
    {
      title:"Internship",
      organization:"Laboratoire d’Informatique Fondamentale de Marseille",
      period:"2012 (6 months)",
      description:"worked with the researchers at LIF on 'Specification and verification of rewrite-based security policies'."
    },
    {
      title:"Internship",
      organization:"Neotech",
      period:"2009 (2 months)",
      description:"Worked as a web developper, the mission is create websites on client's demand using Drupal CMS."
    }
  ],
  publication:[
    {
      author:"Clara Bertolissi, Omar Boucelma, Worachet Uttha",
      year:"2017",
      title:"Enhancing Security in the Cloud: when Traceability meets Access Control",
      link:"https://doi.org/10.23919/ICITST.2017.8356420",
      publisher:"ICITST-2017"
    },
    {
      author:"Worachet Uttha",
      year:"2016 [PhD Thesis]",
      title:"Etude des politiques de sécurité pour les applications distribuées : le problème des dépendances transitives : modélisation, vérification et mise en oeuvre",
      link:"https://www.theses.fr/2016AIXM4044",
      publisher:"Soutenue le 26-09-2016 à Aix-Marseille Universitaire."
    },
    {
      author:"Worachet Uttha, Clara Bertolissi, Silvio Ranise",
      year:"2015",
      title:"Modeling Authorization Policies for Web Services in Presence of Transitive Dependencies",
      link:"http://dx.doi.org/10.5220/0005548502930300",
      publisher:"SECRYPT 2015: page 293-300"
    },
    {
      author:"Worachet Uttha, Clara Bertolissi, Silvio Ranise",
      year:"2014",
      title:"Towards a Reference Architecture for Access Control in Distributed Web Applications",
      link:"http://ceur-ws.org/Vol-1298/paper13.pdf",
      publisher:"ESSoS Doctoral Symposium 2014"
    },
    {
      author:"Clara Bertolissi, Worachet Uttha",
      year:"2013",
      title:"Automated analysis of rule-based access control policies",
      link:"http://doi.acm.org/10.1145/2428116.2428125",
      publisher:"PLPV 2013: page 47-56"
    },

  ],
  skills:[
    {
      skill:"Java",
      percent:"95"
    },
    {
      skill:"PHP/MySQL",
      percent:"95"
    },
    {
      skill:"Phython",
      percent:"90"
    },
    {
      skill:"Node.js",
      percent:"90"
    },
    {
      skill:"React.js",
      percent:"90"
    },
    {
      skill:"React Native",
      percent:"85"
    },
    {
      skill:"C",
      percent:"85"
    },
    {
      skill:"Datalog",
      percent:"85"
    },
    {
      skill:"XML/JSON",
      percent:"85"
    },
    {
      skill:"HTML/CSS",
      percent:"85"
    },
    {
      skill:"OCAML",
      percent:"75"
    },

  ],
  languages:[
    {
      language:"Thai",
      level:"Mother tongue",
      percent:"100",
      order:"1"
    },
    {
      language:"French",
      level:"Fluent",
      percent:"80",
      order:"2"
    },
    {
      language:"English",
      level:"Upper intermediate",
      percent:"70",
      order:"3"
    }
  ]
};
module.exports = data;
