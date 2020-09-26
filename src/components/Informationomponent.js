import React from 'react';

class Informaton extends React.Component{
    render(){
        return(
            <div className="Information">
                {/* displaying dropdown selected information by using switch case */}
                 {(()=>{

                  switch(this.props.information){
                   case "internetofthings":return <p>
                       The Internet of Things describes the network of physical objects—“things”—that are embedded with sensors,
                        software, and other technologies for the purpose of connecting and exchanging data with other devices
                         and systems over the internet.
                   </p>;
                   case "machinelearning":return <p>
                       Machine learning is an application of artificial intelligence (AI) that provides systems 
                       the ability to automatically learn and improve from experience without being 
                       explicitly programmed. Machine learning focuses on the development of computer programs 
                       that can access data and use it learn for themselves.
                   </p>;
                   case "artificialintelligence":return <p>
                       Artificial intelligence (AI) refers to the simulation of human intelligence in machines
                        that are programmed to think like humans and mimic their actions. 
                        The term may also be applied to any machine that exhibits traits associated with 
                        a human mind such as learning and problem-solving.
                   </p>;
                   case "datascience":return <p>
                       Data science is a "concept to unify statistics, data analysis and their related methods"
                        in order to "understand and analyze actual phenomena" with data. 
                        It uses techniques and theories drawn from many fields within the context of mathematics,
                         statistics, computer science, domain knowledge and information science.
                   </p>;
                   case "cybersecurity":return <p>
                       Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, 
                       networks, and data from malicious attacks. ... 
                       Application security focuses on keeping software and devices free of threats.
                        A compromised application could provide access to the data its designed to protect.
                   </p>;
                  default:return null;
               }


             })()}
            </div>
        )
    }
}

export default Informaton;