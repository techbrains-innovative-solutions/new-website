import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {
   serviceImage:string;
   serviceDesc:string;
   serviceName:string;
  constructor(private routeparam:ActivatedRoute) { 
    console.log(this.routeparam)
    this.routeparam.queryParams.subscribe(params => {
      console.log(params);
      this.serviceName =  params?.service;
      if(params?.service == 'Web Application Development'){
        this.serviceImage = "assets/icons/008-development.png";
        this.serviceDesc  = `
        <p>At Techbrains Innovative Solutions, we specialize in crafting dynamic and bespoke software and web applications tailored to meet your unique business needs. With a keen focus on user experience, functionality, and scalability, we empower businesses to thrive in the digital landscape.</p>
        <p>Our software and web application development services encompass a comprehensive approach, leveraging the latest technologies and industry best practices to deliver solutions that drive results. Here&apos;s what sets us apart:</p>
        <p>1. <strong>**Customized Solutions**:</strong> We understand that every business is different. That&apos;s why we take a collaborative approach to understand your specific requirements and goals, ensuring that the end product aligns perfectly with your vision.</p>
        <p>2. <strong>**User-Centric Design**:</strong> User experience is paramount in today&apos;s competitive market. Our team of designers and developers are adept at creating intuitive and engaging interfaces that captivate users and enhance brand perception.</p>
        <p>3. <strong>**Scalability and Flexibility**:</strong> Our solutions are built to grow with your business. Whether you&apos;re a startup looking to establish a digital presence or a large enterprise seeking to optimize operations, our scalable architectures ensure seamless expansion and adaptability.</p>
        <p>4. <strong>**SEO Integration**:</strong> In an increasingly crowded online space, visibility is key. We incorporate search engine optimization (SEO) best practices into our development process to enhance your website&apos;s ranking and drive organic traffic. From keyword optimization to meta tags and structured data, we ensure that your web presence is optimized for maximum discoverability.</p>
        <p>5. <strong>**Backlink Optimization**:</strong> Backlinks are a critical component of any successful SEO strategy. Our team employs white-hat techniques to build high-quality backlinks from authoritative sources, enhancing your website&apos;s credibility and boosting its search engine ranking.</p>
        <p>6. <strong>**Continuous Support and Maintenance**:</strong> Our commitment to excellence doesn&apos;t end with the launch of your application. We provide ongoing support and maintenance services to ensure that your software remains secure, up-to-date, and optimized for peak performance.</p>
        <p>Whether you&apos;re looking to streamline internal processes, engage customers through innovative digital experiences, or establish a commanding online presence, Techbrains Innovative Solutions is your trusted partner for cutting-edge software and web application development.</p>
        <p>Get in touch with us today to discuss your project requirements and take the first step towards digital transformation. Together, we&apos;ll turn your vision into reality.</p>`
       }
       else if(params?.service == 'Mobile Application Development'){
        this.serviceImage = "assets/icons/047-profile.png";
        
        this.serviceDesc = `<p>Techbrains Innovative Solutions is a software company specializing in mobile application development. Our team of experienced developers uses cutting-edge technologies and innovative solutions to create mobile applications that meet the needs and expectations of our clients.</p>
        <p>Our mobile application development services include:</p>
        <p><strong>1. Custom mobile app development:</strong> We work closely with our clients to understand their requirements and create custom mobile applications tailored to their specific needs. Whether it&apos;s a consumer-facing app, enterprise app, or a specialized application for a niche market, we have the expertise to deliver high-quality solutions.</p>
        <p><strong>2. Native app development:</strong> We specialize in developing native mobile applications for iOS and Android platforms. By leveraging the native capabilities of each platform, we ensure optimal performance, user experience, and seamless integration with device features.</p>
        <p><strong>3. Cross-platform app development:</strong> We also offer cross-platform app development services using frameworks like React Native, Flutter, and Xamarin. This approach allows us to build mobile applications that can run smoothly on multiple platforms with a single codebase, reducing development time and cost.</p>
        <p><strong>4. Mobile app UI/UX design:</strong> Our team of talented designers creates intuitive and visually appealing user interfaces (UI) for mobile applications. We focus on delivering a seamless user experience (UX) that enhances engagement and satisfaction.</p>
        <p><strong>5. App testing and quality assurance:</strong> We adhere to industry best practices for mobile app testing and quality assurance to ensure that our applications are bug-free, reliable, and secure. Our rigorous testing processes cover functionality, performance, compatibility, and security aspects.</p>
        <p><strong>6. Maintenance and support:</strong> We provide ongoing maintenance and support services to ensure that our clients&apos; mobile applications remain up-to-date, secure, and compatible with the latest mobile operating systems and devices.</p>
        <p>At Techbrains Innovative Solutions, we are committed to delivering innovative and high-quality mobile solutions that drive business growth and success. Contact us to discuss your mobile application development needs and learn how we can help bring your ideas to life.</p>`
        
       }
       else if(params?.service == 'Digital Marketing'){
        this.serviceImage ="assets/icons/content-marketing.png";
        this.serviceDesc = `<p>Techbrains Innovative Solutions is a cutting-edge software company that specializes in providing digital marketing solutions to businesses of all sizes. Our team of experienced professionals understands the ever-evolving landscape of digital marketing and utilizes the latest tools and techniques to help our clients achieve their marketing goals.</p>
        <p>Our digital marketing services encompass a wide range of strategies tailored to meet the unique needs and objectives of each client. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and content creation, we offer comprehensive solutions to drive targeted traffic, increase brand awareness, and boost conversions.</p>
        <p>At Techbrains Innovative Solutions, we believe in the power of data-driven insights to inform our digital marketing strategies. We leverage analytics and tracking tools to monitor campaign performance, identify areas for improvement, and optimize our efforts for maximum results.</p>
        <p>Whether you&apos;re looking to increase your online visibility, generate leads, or improve customer engagement, our team is dedicated to delivering measurable results that align with your business objectives. With a focus on innovation and excellence, we strive to stay ahead of the curve in the fast-paced world of digital marketing, helping our clients stay competitive and achieve long-term success.</p>`
       }
       else if(params?.service == 'UX/UI Design Services'){
        this.serviceImage ="assets/icons/042-ui design.png";
        this.serviceDesc = `<p>Techbrains Innovative Solutions is a leading software company that specializes in providing exceptional UX/UI design services. Our team of talented designers understands the importance of user experience and interface design in creating successful digital products. Here&apos;s what sets us apart:</p>
        <p>1. User-Centric Approach: We prioritize the needs and preferences of end-users in every aspect of our design process. By conducting user research, usability testing, and analysis, we ensure that our designs are intuitive, accessible, and enjoyable to use.</p>
        <p>2. Customized Solutions: We understand that every project is unique, and we tailor our design solutions to meet the specific requirements and objectives of our clients. Whether it&apos;s a web application, mobile app, or software platform, we create bespoke designs that reflect the brand identity and resonate with the target audience.</p>
        <p>3. Innovative Design Techniques: Our designers stay updated with the latest trends, tools, and techniques in UX/UI design. From wireframing and prototyping to interactive mockups and animations, we leverage cutting-edge technologies to create engaging and memorable user experiences.</p>
        <p>4. Collaboration and Communication: We believe in transparent communication and close collaboration with our clients throughout the design process. We value feedback and strive to incorporate client input into our designs, ensuring alignment with their vision and goals.</p>
        <p>5. Seamless Integration: Our UX/UI designs are not just visually appealing but also functional and practical. We work closely with development teams to ensure smooth integration of design elements, resulting in a seamless and cohesive user experience across different devices and platforms.</p>
        <p>At Techbrains Innovative Solutions, we are committed to delivering high-quality UX/UI design services that drive user engagement, satisfaction, and business success. Whether you&apos;re launching a new product or enhancing an existing one, we&apos;re here to help you achieve your goals through exceptional design.</p>`
       }
       else if(params?.service == 'Product Maintenance & Support'){
        this.serviceImage="assets/icons/online-support.png";
        this.serviceDesc = `<p>Techbrains Innovative Solutions offers comprehensive product maintenance and support services to ensure the smooth functioning and longevity of our software products. Our maintenance and support services encompass the following key aspects:</p>
        <p><strong>1. **Bug Fixing**:</strong> We promptly address any bugs or errors identified in our software products. Our team of experienced developers meticulously analyzes reported issues and implements effective solutions to resolve them.</p>
        <p><strong>2. **Feature Enhancements**:</strong> We continuously strive to enhance the features and capabilities of our software products to meet evolving user needs and industry trends. Our team collaborates closely with clients to gather feedback and suggestions for feature enhancements, which are then prioritized and implemented in subsequent updates.</p>
        <p><strong>3. **Performance Optimization**:</strong> We optimize the performance of our software products to ensure optimal speed, efficiency, and reliability. Through performance tuning and optimization techniques, we enhance the overall user experience and minimize system downtime.</p>
        <p><strong>4. **Security Updates**:</strong> We prioritize the security of our software products by regularly updating and patching any vulnerabilities identified in the codebase. Our proactive approach to security helps safeguard our clients&apos; data and protect against potential threats and breaches.</p>
        <p><strong>5. **Compatibility Maintenance**:</strong> We ensure that our software products remain compatible with the latest operating systems, platforms, and third-party integrations. We conduct compatibility testing and updates to ensure seamless interoperability with diverse environments and technologies.</p>
        <p><strong>6. **24/7 Technical Support**:</strong> Our dedicated technical support team is available round-the-clock to address any inquiries, issues, or concerns related to our software products. Clients can reach out to us via various channels, including email, phone, and online chat, to receive timely assistance and resolution.</p>
        <p><strong>7. **Documentation and Training**:</strong> We provide comprehensive documentation and training materials to help users effectively utilize and maximize the benefits of our software products. From user manuals to video tutorials, we offer resources tailored to different user roles and proficiency levels.</p>
        <p>At Techbrains Innovative Solutions, we are committed to delivering high-quality maintenance and support services that enable our clients to derive maximum value from our software products and achieve their business objectives effectively.</p>`
        
       }
       else if(params?.service == 'Testing & QA'){
        this.serviceImage ="assets/icons/029-bug.png";
        this.serviceDesc = `<p>Techbrains Innovative Solutions is a leading software company specializing in testing and quality assurance (QA) services. Our team of experienced professionals is dedicated to ensuring that your software products meet the highest standards of quality and reliability.</p>
        <p>Our testing and QA services cover a wide range of activities, including:</p>
        <p><strong>1. Test Planning and Strategy:</strong> We work closely with our clients to develop comprehensive test plans and strategies tailored to their specific needs and requirements.</p>
        <p><strong>2. Functional Testing:</strong> Our team conducts thorough functional testing to ensure that all features and functionalities of your software are working as intended.</p>
        <p><strong>3. Regression Testing:</strong> We perform regression testing to identify any potential issues or bugs that may have been introduced during the development process or through recent changes to the software.</p>
        <p><strong>4. Performance Testing:</strong> We assess the performance and scalability of your software under various conditions to ensure optimal performance and user experience.</p>
        <p><strong>5. Security Testing:</strong> Our security testing services help identify and address potential vulnerabilities and security threats, protecting your software and data from unauthorized access and malicious attacks.</p>
        <p><strong>6. Automation Testing:</strong> We leverage the latest automation tools and technologies to streamline the testing process and improve efficiency, allowing for faster release cycles and reduced time-to-market.</p>
        <p>At Techbrains, we understand the importance of delivering high-quality software products that meet the expectations of our clients and end-users. Our testing and QA services are designed to help you identify and resolve any issues or deficiencies in your software, ensuring a seamless and reliable user experience.</p>
        <p>Whether you are developing a new software product or updating an existing one, Techbrains Innovative Solutions is your trusted partner for all your testing and QA needs.</p>`
       }
       else if(params?.service == 'Third party API Integrations'){
        this.serviceImage = "assets/icons/040-web development.png";
        this.serviceDesc = `<p>Techbrains Innovative Solutions is a software company specializing in third-party API integrations. We excel in seamlessly integrating various APIs into existing software systems to enhance functionality, improve efficiency, and provide better user experiences. Our team of experienced developers has expertise in integrating APIs from a wide range of providers across different industries.</p>
        <p>Some of the key features of our third-party API integration services include:</p>
        <p><strong>1. Custom integrations: </strong>We understand that every business has unique requirements. We work closely with our clients to understand their specific needs and develop custom API integrations tailored to their business processes.</p>
        <p><strong>2. Scalability:</strong> Our API integrations are designed to be scalable, allowing businesses to easily expand their systems and add new functionalities as their needs evolve.</p>
        <p><strong>3. Security:</strong> We prioritize the security of data and information transmitted through APIs. We implement industry-standard security protocols and encryption methods to ensure that sensitive information is protected from unauthorized access and breaches.</p>
        <p><strong>4. Seamless user experience:</strong> Our goal is to create a seamless user experience by integrating APIs in a way that feels natural and intuitive for end-users. We focus on optimizing workflows and minimizing disruptions to ensure smooth operation of the integrated systems.</p>
        <p><strong>5. Ongoing support and maintenance:</strong> We provide ongoing support and maintenance services to ensure that the integrated systems continue to perform optimally over time. Our team is available to address any issues, implement updates, and make enhancements as needed.</p>
        <p>Whether it&apos;s integrating payment gateways, social media APIs, communication APIs, or any other third-party services, Techbrains Innovative Solutions has the expertise and experience to deliver reliable and effective solutions that meet the unique needs of our clients.</p>`
  
       }
       else if(params?.service == 'VPS Cloud Hosting'){
        this.serviceImage = "assets/icons/server.png";
        this.serviceDesc = `<p>Techbrains Innovative Solutions offers VPS (Virtual Private Server) cloud hosting services designed to meet the diverse needs of businesses and individuals alike. Our VPS cloud hosting solutions provide scalability, reliability, and performance to ensure that your websites and applications run smoothly and efficiently.</p>
        <p><strong>Key features of our VPS cloud hosting service include:</strong></p>
        <p><strong>1. **Scalability**: </strong>Easily scale your resources up or down based on your requirements. With our VPS cloud hosting, you have the flexibility to adjust CPU, RAM, storage, and bandwidth as your needs change.</p>
        <p><strong>2. **Reliability**:</strong> Our VPS cloud hosting infrastructure is built on robust hardware and utilizes redundant network connections to ensure high availability and reliability for your applications and websites.</p>
        <p><strong>3. **Performance**:</strong> Experience fast and responsive performance with our VPS cloud hosting solutions. We utilize the latest technologies and optimized configurations to deliver optimal performance for your websites and applications.</p>
        <p><strong>4. **Security**:</strong> Protect your data and applications with our advanced security measures. Our VPS cloud hosting environments are secured with firewalls, encryption, intrusion detection systems, and regular security updates to keep your data safe from threats.</p>
        <p><strong>5. **24/7 Support**:</strong> Our team of experienced professionals is available 24/7 to provide support and assistance with any issues or questions you may have regarding your VPS cloud hosting environment.</p>
        <p><strong>6. **Customization**: </strong>Tailor your VPS cloud hosting environment to meet your specific requirements. With full root access, you have complete control over your server configuration and can install custom software and applications as needed.</p>
        <p>Whether you&apos;re hosting a small website, a large e-commerce platform, or complex web applications, Techbrains Innovative Solutions&apos; VPS cloud hosting services provide the flexibility, reliability, and performance you need to succeed in today&apos;s digital landscape.</p>`
        
       }
    });
  }

  ngOnInit(): void {
    
  }

}
