export type TeamMember = {
    id: number;
    name: string;
    position: string;
    image: string;
    bio?: string;
    bio2?: string;  // Add this line
    bio3?: string;  // Add this line
    bio4?: string;  // Add this line
    bio5?: string;  // Add this line
};

export const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "Dr Tosin Majekodunmi",
        position: "Managing Director & Medical Director & Chief of Cardiology",
        image: "/doctors/Dr-tosin.jpg",
        bio: "Euracare Nigeria’s Medical Director & Chief of Cardiology. A dual Nigerian/British national, he is an interventional cardiologist with specialization in both adult (Royal Brompton Hospital, Guy’s and St. Thomas’ Hospital London, UK and Toronto General Hospital, Toronto, Canada) and paediatric (Great Ormond Street Hospital, London, UK) congenital & structural heart disease. Determined to contribute to the improvement of healthcare in his native Nigeria, he joined Euracare in 2016. "
    },
    {
        id: 2,
        name: "Ijeoma Okoro",
        position: "HR Manager",
        image: "/about/team/ijeoma.jpg",
        bio: "Ijeoma is a strategic and results-driven HR professional with extensive experience in recruitment, organizational development, policy implementation, performance management, and employee relations. ​",
        bio2: "She brings a wealth of expertise in HR Analytics, ISO compliance, Expatriate support, and cross-functional collaboration across diverse regions. ​",
        bio3: "With over a decade of experience in HR leadership roles, Ijeoma has successfully led initiatives that enhance workforce capability, improve organizational performance, and align HR strategies with business objectives. ​ Her proven track record includes driving operational excellence, implementing robust training programs, and fostering employee engagement. ​",
        bio4: "Ijeoma holds a Bachelor’s degree in Mass Communication from Olabisi Onabanjo University, Advanced HR Management from London Business Academy and professional certifications in Human Resource Management, including ACIPM, PHRI, and SPHRI. ​ ",
        bio5: "She is passionate about creating a positive and productive work environment and is committed to supporting our team in achieving both personal and organizational goals. ​ "
    },
    {
        id: 3,
        name: "Olukemi Fasuan",
        position: "Financial Controller ",
        image: "/about/team/Mrs-Kemi.jpeg",
        bio: "Olukemi is a seasoned finance professional with over 23 years of experience across the auditing, manufacturing, oil & gas, healthcare, information services, and technology industries. A Chartered Accountant (ACA, ICAN), recognized for driving financial transformation, strengthening internal controls, ensuring regulatory compliance, and aligning financial strategy with business growth. With expertise in financial reporting, treasury, tax management, and systems review & improvement, she combines technical excellence with strong leadership to deliver sustainable results in dynamic and multicultural environments. ",
        bio2: "She is currently the Financial Controller at Euracare, where she is committed to enhancing financial sustainability, improving operational efficiency, and supporting the hospital’s mission of delivering world-class healthcare. "
    },
    {
        id: 4,
        name: "Evans Esezobor",
        position: "IT Manager",
        image: "/about/team/evans.jpg",
        bio: "Esezobor’ Evans, acquired B.Sc. Computer Science from Lagos State University (LASU).Prior to joining Euracare, he was involved in several companies such as, Multi-Links Telkom, Arabia Transport LLC, Telkom SA, Colsol Nig. and TDS Hitech Solutions. Over the years he's worked in diverse and successful background spanning technical, service delivery, and business development, with experience in client relationship and vendor management. He has over 12 years’ experience in solution architecting, designing, and implementing LAN, WAN, Data Center Solution, Unified Communication and Collaboration solutions. "
    },
    {
        id: 5,
        name: "Sylvester Shih",
        position: "Chief Operating Officer",
        image: "/about/team/sylvester.jpg",
        bio: "Sylvester received his bachelor's degree in Science from Lalit Narayan Mithila University, India and his Post graduate qualification in Hospital Management from the Indian Institute of Health Management Research, Jaipur (India). He has more than 15 years experience in Hospital operations and has worked in a number of hospitals in India and the United Arab Emirates. He has been involved in numerous green field hospital projects and has been instrumental in commissioning these hospitals. He is deeply involved in process & system development, process optimization, HIS implementation and resource deployment and has a keen interest in Quality Management and patient safety."
    },
    {
        id: 6,
        name: " Kelvin Ajieh",
        position: "Marketing and Communications Manager",
        image: "/about/team/kelvin.jpg",
        bio: "Kelvin Ajieh is a business enthusiast with sound knowledge of business development, marketing, and sales, with expertise in B2B, B2C, and customer relationship management. He has proven expertise in brand management, public relations, and integrated marketing communications. Adept at leveraging market research and analytics to drive successful campaigns and enhance brand visibility.",
        bio2: "He holds a bachelor’s degree in Human Anatomy and a certification in Business Communication.  He has over 15 years of experience providing companies in the healthcare and pharmaceutical sectors with successful business development solutions. He is very passionate about making a positive impact and creating sustainable value in the healthcare sector.  "
    },
    {
        id: 7,
        name: "Godwin Ikehi",
        position: "Laboratory Manager",
        image: "/about/team/godwin.jpg",
        bio: "A graduate of Medical Laboratory Science and a registered Member of the Medical Laboratory Science Council Of Nigeria, have over 20 years of practice with a series of post graduate training in different branches of Medical Laboratory practice. ",
        bio2: "Upon joining Euracare, Godwin worked as a Manager where he managed lab personnel and non-lab personnel to ensure quality, reproducible and reliable results in accordance with Standard operating procedures, ensuring the lab provides support to our doctors and clients in providing quality health care.",
        bio3: "In Euracare, Godwin`s aim is to ensure the laboratory department produces quality result with expeditious turnaround time with the aid of fully automated equipment. "
    },
    {
        id: 8,
        name: "Abimbola Aransiola",
        position: "Pharmacy Manager",
        image: "/about/team/abimbola.jpg",
        bio: "Abimbola Aransiola is a consummate pharmacy professional with over 15 years of demonstrated experience that cuts across academia, community, and hospital practice. She obtained her B.Pharm from the prestigious Obafemi Awolowo University and has gone on to work in organizations like the Faculty of Pharmacy, Obafemi Awolowo University, Osun State. 7th day Adventist Hospital, Ile-Ife and Medplus Pharmacy. Over the course of her career, she has built a strong track record of ensuring patient safety, providing comprehensive pharmaceutical care, and upholding the highest standards of pharmaceutical practice. She has also acquired other professional certifications in customer service, retention, and strategic sales growth, with a growing interest in the impact of logistics on business growth and enablement. She is currently the Pharmacy Manager at Euracare Multispecialist Hospital, where she continues to demonstrate her leadership qualities, meticulousness, and efficiency in pharmaceutical systems, processes, and standards. Abimbola is committed to leading the team to deliver exceptional results, leveraging her passion for continuous learning, process improvement, and operational strategy."
    },
    {
        id: 9,
        name: "",
        position: "Nursing Manager",
        image: "/about/team/nm.jpeg"
    }
];
