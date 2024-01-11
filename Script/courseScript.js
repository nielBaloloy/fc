
var courses = [
    { 
       id:1,
       title:'Bachelor of Science in Business Administration Major in Microfinance',
       description : 'A microfinance course is an educational program that focuses on the principles, practices, and challenges associated with microfinance. Microfinance refers to financial services, such as loans, savings, and insurance, provided to individuals or small businesses in low-income or underserved communities. The goal of microfinance is often to empower individuals, especially those who lack access to traditional banking services, by providing them with financial tools to improve their economic situation.',
       department  : 'College of Business Education',
       

   
    },
    { 
        id:2,
        title:'Bachelor of Science in Business Administration Major in Marketing Management',
        description : 'Marketing management involves developing and implementing strategic marketing programs, processes, and activities that align with wider business objectives, while utilizing customer insights, tracking metrics, and optimizing internal processes to achieve success.',
        department  : 'College of Business Education',
    
     },
     { 
        id:3,
        title:'Bachelor in Public Administration',
        description : 'Public administration programs prepare graduates for leadership roles in city and community governments. This concentration emphasizes city management, including urban development and city projects. Students learn to analyze data on community needs and integrate their analysis into city plans.',
        department  : 'College of Business Education',
    
     },
     { 
        id:4,
        title:'Bachelor of Science in Information Technology',
        description : 'Bachelor of Science in Information Technology (BSIT) Program aims to produce students whose knowledge and competence in planning, installing, customizing, operating, managing, administering, and maintaining information technology infrastructure are grounded on the effective utilization of computers and computer software and thus enabling them to contribute worthwhile IT solutions to the business communities all over the world.',
        department  : 'College of Information Technology Education',
        courseImage : '../Photos/Screenshot 2023-12-31 151604.png'
     },
    
     { 
        id:5,
        title:'Bachelor of Science in Information Technology with Specialization in Digital Animation',
        description : 'Bachelor of Science in Information Technology with Specialization in Digital Animation program is the study and use of concepts, principles, and techniques of computing in the design and development of multimedia products and solutions. It includes various applications such as in science, entertainment, education, simulations, games and advertising',
        department  : 'College of Information Technology Education',
        courseImage : '../Photos/Screenshot 2023-12-31 153235.png'
    
     },
     { 
        id:6,
        title:'Bachelor of Science in Criminology',
        description : 'The Bachelor of Science in Criminology or Criminal Justice is a four-year degree program intended for individuals who wish to have a career in the fields of law enforcement, security administration, crime detection, and prevention of correctional administration.',
        department  : 'College of Criminal Justice Education',
        courseImage : '../Photos/ccje/DSC_1027.JPG'
    
    
     }
]
let showCollege =()=>{
    document.getElementById('collegeCOURSE').style.display='block';
    document.getElementById('shsCOURSE').style.display='none';
}
let showSHS =()=>{
    document.getElementById('collegeCOURSE').style.display='none';
    document.getElementById('shsCOURSE').style.display='block';
}
let toggleModal =(PAYLOAD)=>{
    var ctitle = document.getElementById('exampleModalLabel');
    var dept = document.getElementById('Depart');
    var desc= document.getElementById('definition');
    var img = document.getElementById('headerImg');
    ctitle.innerText=courses[PAYLOAD].title;
    dept.innerText=courses[PAYLOAD].department;
    desc.innerText=courses[PAYLOAD].description;
    img.style.backgroundImage='url("' + courses[PAYLOAD].courseImage + '")';
   
    


}