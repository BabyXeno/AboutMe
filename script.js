document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preloader.classList.add('fade-out');
        preloader.addEventListener('transitionend', () => {
            preloader.remove();
        });
    });
    const cursor = document.querySelector('.cursor-follower');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    gsap.from('.hero-title .text-reveal', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 1,
    });
    gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1.2,
    });
    const exploreButton = document.querySelector('.primary-btn');
    const connectButton = document.querySelector('.secondary-btn');

    exploreButton.addEventListener('click', () => {
        document.getElementById('projects').scrollIntoView({
            behavior: 'smooth'
        });
    });

    connectButton.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
    gsap.from('.hero-buttons .cta-button', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1.4,
        stagger: 0.2,
    });
    gsap.from('.scroll-indicator', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1.6,
    });
    document.querySelectorAll('.tab').forEach((tab) => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach((c) =>
                c.classList.remove('active')
            );
            tab.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    gsap.utils.toArray('.stat-item').forEach((item) => {
        const statNumber = item.querySelector('.stat-number');
        const target = parseInt(statNumber.getAttribute('data-count'));
        ScrollTrigger.create({
            trigger: item,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(statNumber, {
                    duration: 2,
                    innerText: target,
                    roundProps: 'innerText',
                    ease: 'power3.out',
                });
            },
        });
    });
    document.querySelectorAll('.skill-tab').forEach((tab) => {
        tab.addEventListener('click', () => {
            const category = tab.getAttribute('data-category');
            document.querySelectorAll('.skill-tab').forEach((t) =>
                t.classList.remove('active')
            );
            document.querySelectorAll('.skills-grid').forEach((g) =>
                g.classList.remove('active')
            );
            tab.classList.add('active');
            const targetGrid = document.getElementById(category);
            targetGrid.classList.add('active');
            gsap.utils.toArray(`#${category} .skill-progress`).forEach((progress) => {
                const level = progress.getAttribute('data-level');
                gsap.to(progress, {
                    width: level,
                    duration: 1.5,
                    ease: 'power3.out',
                    delay: 0.3,
                });
            });
        });
    });
    document.querySelectorAll('#development .skill-progress').forEach((progress) => {
        const level = progress.getAttribute('data-level');
        gsap.to(progress, {
            width: level,
            duration: 1.5,
            ease: 'power3.out',
            delay: 2,
        });
    });
    document.querySelectorAll('.filter-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            document.querySelectorAll('.filter-btn').forEach((b) =>
                b.classList.remove('active')
            );
            btn.classList.add('active');
            gsap.utils.toArray('.project-card').forEach((card) => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    gsap.to(card, {
                        display: 'block',
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: 'power2.out',
                    });
                } else {
                    gsap.to(card, {
                        opacity: 0,
                        scale: 0.9,
                        duration: 0.5,
                        ease: 'power2.out',
                        onComplete: () => {
                            card.style.display = 'none';
                        },
                    });
                }
            });
        });
    });
    const projectModal = document.getElementById('projectModal');
    const closeModal = projectModal.querySelector('.close');
    const modalBody = projectModal.querySelector('.modal-body');
    const viewDetailButtons = document.querySelectorAll('.project-btn.view-btn');
    const projectDetails = {
        ecommerce: {
            title: 'SurvivX.org',
            description:
                'SurvivX is a fast-paced 2D battle royale game where the goal is to be the last player standing. Start with just a backpack, scavenge for loot, eliminate opponents, and avoid the deadly red zone that closes in as the match progresses. Inspired by games like PUBG and Fortnite, SurvivX offers classic battle royale action with a top-down twist.',
            image:'survivxproject2.png',
            client:'Personal Project',
            date: 'April 2025',
            skills: 'TypeScript, Git, NGINX, Node.js, pnpm, PostgreSQL, CSS, HTML',
            liveLink: 'https://survivx.org',
        },
        fitness: {
            title: 'Fitness Tracker',
            description:
                'A mobile-first fitness tracking application that allows users to log workouts, track progress, and set goals. Includes features like exercise library, progress charts, and social sharing.',
            image: '/api/placeholder/800/600',
            client: 'Fitness Co.',
            date: 'January 2025',
            skills: 'React Native, Firebase, Redux',
            liveLink: '#',
        },
        branding: {
            title: 'Brand Identity',
            description:
                'Development of a comprehensive brand identity for a new tech startup. Included logo design, color palette, typography, and brand guidelines to establish a strong visual presence.',
            image: '/api/placeholder/800/600',
            client: 'Startup Innovations',
            date: 'November 2024',
            skills: 'Figma, Adobe Creative Suite, Branding Strategy',
            liveLink: '#',
        },
        portfolio: {
            title: 'Personal Portfolio Website',
            description:
                'A showcase of my work and skills, demonstrating expertise in front-end development and UI/UX design. Built with a focus on performance, responsiveness, and engaging user experience.',
            image: '/api/placeholder/800/600',
            client: 'Self',
            date: 'May 2025',
            skills: 'HTML, CSS, JavaScript, GSAP, Three.js',
            liveLink: '#',
        },
    };
    viewDetailButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const projectKey = button.getAttribute('data-project');
            const details = projectDetails[projectKey];
            if (details) {
                modalBody.innerHTML = `
                  <div class="modal-image">
                      <img src="${details.image}" alt="${details.title} Screenshot">
                  </div>
                  <div class="modal-text">
                      <h3 class="modal-title">${details.title}</h3>
                      <p class="modal-description">${details.description}</p>
                      <div class="modal-details">
                          <div class="detail-item">
                              <span class="detail-label">Client:</span>
                              <span class="detail-value">${details.client}</span>
                          </div>
                          <div class="detail-item">
                              <span class="detail-label">Date:</span>
                              <span class="detail-value">${details.date}</span>
                          </div>
                          <div class="detail-item">
                              <span class="detail-label">Skills:</span>
                              <span class="detail-value">${details.skills}</span>
                          </div>
                      </div>
                      <a href="${details.liveLink}" class="modal-btn btn-glow" target="_blank">View Live</a>
                  </div>
              `;
                projectModal.classList.add('active');
            }
        });
    });
    closeModal.addEventListener('click', () => {
        projectModal.classList.remove('active');
    });
    window.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            projectModal.classList.remove('active');
        }
    });
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.querySelector('.form-status');
    const successMessage = formStatus.querySelector('.success-message');
    const errorMessage = formStatus.querySelector('.error-message');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        setTimeout(() => {
            successMessage.style.display = 'flex';
            errorMessage.style.display = 'none';
            contactForm.reset();
            gsap.from(successMessage, {
                opacity: 0,
                y: 20,
                duration: 0.5,
            });
        }, 1000);
    });
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotInput = chatbotContainer.querySelector('input');
    const chatbotSendButton = chatbotContainer.querySelector('.chatbot-send');
    const chatbotMessages = chatbotContainer.querySelector('.chatbot-messages');
    document.addEventListener('DOMContentLoaded', () => {
        if (chatbotMessages) {
            appendMessage(
                "Hello there! I'm ZENITH's AI assistant. How may I guide you through this digital cosmos?",
                'bot-message'
            );
        }
    });
    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.classList.toggle('active');
    });
    chatbotClose.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
    });
    chatbotSendButton.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
    function sendMessage() {
        const messageText = chatbotInput.value.trim();
        if (messageText === '') return;
        appendMessage(messageText, 'user-message');
        chatbotInput.value = '';
        setTimeout(() => {
            const botResponse = generateBotResponse(messageText);
            appendMessage(botResponse, 'bot-message');
        }, 800);
    }
    function appendMessage(text, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);
        let formattedText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        formattedText = formattedText.replace(/\n/g, '<br>');
        messageElement.innerHTML = formattedText;
        chatbotMessages.appendChild(messageElement);
        chatbotMessages.scrollTo({
            top: chatbotMessages.scrollHeight,
            behavior: 'smooth',
        });
        gsap.from(messageElement, {
            opacity: 0,
            y: 10,
            duration: 0.3,
        });
    }
    function generateBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        let botResponse = "I'm your ZENITH AI assistant, here to help you explore this portfolio. I can provide information on my skills, projects, or how to get in touch. What's at your peak interest today?";
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('greetings')) {
            const greetings = [
                "Greetings, digital explorer! Ready to ascend to the ZENITH? Ask away!",
                "Hello there! What can I illuminate for you about Dontae Mast's work?",
                "Hey! I'm powered up and ready to assist. What's your query?",
                "Welcome to the summit! I'm your ZENITH guide. How can I help you reach new heights?",
            ];
            botResponse = greetings[Math.floor(Math.random() * greetings.length)];

        } else if (lowerMessage.includes('how are you')) {
            botResponse = "As a digital entity, I don't experience feelings in the human sense, but I'm operating optimally and ready to assist you! How can I help you achieve your objectives today?";

        } else if (lowerMessage.includes('what can you do') || lowerMessage.includes('help me')) {
            botResponse = "I can help you explore the ZENITH portfolio! I have information on Dontae Mast's **Skills**, his impactful **Projects**, and how you can **Contact** him. Just ask me about one of those areas!";

        } else if (lowerMessage.includes('who is Dontae Mast') || lowerMessage.includes('tell me about you') || lowerMessage.includes('your story') || lowerMessage.includes('background')) {
            botResponse = "Dontae Mast is the visionary behind ZENITH – a digital innovator and creative developer with over 8 years of experience crafting extraordinary web experiences. He blends technical mastery with artistic vision to reach the pinnacle of digital creation. You can delve deeper into his journey in the 'About Me' section. Would you like me to tell you more about his **experience** or **education**?";

        } else if (lowerMessage.includes('why zenith') || lowerMessage.includes('meaning of zenith') || lowerMessage.includes('what does zenith mean')) {
            botResponse = "The name 'ZENITH' represents the highest point in the sky, often used metaphorically for peak performance and achievement. This portfolio embodies that principle – a commitment to reaching the highest standards in digital innovation and development.";
        } else if (lowerMessage.includes('skills') || lowerMessage.includes('abilities') || lowerMessage.includes('expertise') || lowerMessage.includes('proficient')) {
            botResponse = "ZENITH's capabilities span across key areas of digital creation. My core expertise areas are:<br><br>" +
                "- **Development:** From crafting responsive front-ends to robust back-end systems.<br>" +
                "- **Design:** Focusing on intuitive UI/UX and compelling visuals.<br>" +
                "- **Other:** Including project management and team leadership.<br><br>" +
                "Are you curious about specific **technologies** like React or Node.js, or perhaps about my **design** approach?";

        } else if (lowerMessage.includes('development skills') || lowerMessage.includes('coding') || lowerMessage.includes('programming')) {
            botResponse = "In the realm of development, ZENITH's foundation is strong with:<br>" +
                "- **Front-end:** React, Angular, Vue.js<br>" +
                "- **Back-end:** Node.js, Databases (SQL and NoSQL)<br><br>" +
                "Which development area piques your interest?";

        } else if (lowerMessage.includes('design skills') || lowerMessage.includes('ui/ux') || lowerMessage.includes('figma') || lowerMessage.includes('graphic design')) {
            botResponse = "My design skills are honed to create user-centric and visually striking interfaces that elevate the user experience. This includes expertise in **Figma**, **UI/UX Design**, and **Graphic Design**. Crafting pixel-perfect and intuitive designs is a priority at ZENITH!";

        } else if (lowerMessage.includes('other skills') || lowerMessage.includes('management') || lowerMessage.includes('leadership') || lowerMessage.includes('cloud')) {
            botResponse = "Beyond core development and design, my skills extend to **Project Management**, **Team Leadership**, and working with **Cloud Computing** platforms. These capabilities ensure projects are executed with efficiency and reach their full potential.";
        } else if (lowerMessage.includes('projects') || lowerMessage.includes('work') || lowerMessage.includes('portfolio') || lowerMessage.includes('show me')) {
            botResponse = "Welcome to ZENITH's showcase of achievements! You can explore all featured projects in the 'Projects' section above. Some notable ones that represent peak performance include:<br><br>" +
                "- The **E-commerce Platform**: A complex web application built for scalability.<br>" +
                "- The **Fitness Tracker**: A mobile app designed for users to reach their personal zenith.<br>" +
                "- **Brand Identity** projects: Where visual concepts are elevated to memorable brands.<br><br>" +
                "Would you like a brief overview of a specific project, or are you ready to explore the collection yourself?";

        } else if (lowerMessage.includes('e-commerce platform')) {
            botResponse = "The **E-commerce Platform** project stands as a robust example of my web development capabilities. It features seamless user authentication, a dynamic product catalog, efficient shopping cart management, and secure payment processing. Built with technologies like React, Node.js, and MongoDB, it's designed for high performance. You can find more details and a link to the live demo in the 'Projects' section.";

        } else if (lowerMessage.includes('fitness tracker')) {
            botResponse = "The **Fitness Tracker** is a mobile-first application aimed at empowering users in their fitness journey. Key features include intuitive workout logging, comprehensive progress tracking with visual charts, and goal setting. Developed using React Native and Firebase, it offers a smooth and engaging user experience. Learn more in the 'Projects' section.";

        } else if (lowerMessage.includes('brand identity')) {
            botResponse = "My **Brand Identity** projects are about creating a powerful and memorable visual foundation for businesses. This involves crafting unique logos, defining cohesive color palettes and typography systems, and developing comprehensive brand guidelines. The goal is to ensure a consistent and impactful brand presence. Explore these projects in the 'Projects' section.";
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('get in touch') || lowerMessage.includes('reach me') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('hire')) {
            botResponse = "Ready to collaborate and reach the ZENITH of your digital aspirations? You can find all the necessary contact details in the 'Contact' section. Here are the primary channels:<br><br>" +
                "- **Email:** djm7992@psu.edu (Ideal for initial inquiries and project discussions)<br>" +
                "- **Discord:** baby.xeno (For direct communication)<br>" +
                "- Alternatively, the convenient contact form on the page is available for your message!<br><br>" +
                "I look forward to connecting with you!";

        } else if (lowerMessage.includes('email address')) {
            botResponse = "You can send your inquiries and project details to djm7992@psu.edu. It's the most efficient way to ensure a timely and detailed response.";

        } else if (lowerMessage.includes('discord')) {
            botResponse = "My Discord handle is baby.xeno. You can send me a friend request or direct message for direct communication.";
        } else if (lowerMessage.includes('thank you') || lowerMessage.includes('thanks') || lowerMessage.includes('appreciate it')) {
            const thankYouResponses = [
                "You're most welcome! Assisting you in exploring ZENITH is my pleasure.",
                "Glad I could provide the information you needed!",
                "Anytime! Is there anything else I can clarify or help you with?",
                "My pleasure! Feel free to ask if any more questions arise on your journey through the portfolio."
            ];
            botResponse = thankYouResponses[Math.floor(Math.random() * thankYouResponses.length)];

        } else if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye') || lowerMessage.includes('see ya')) {
            const farewells = [
                "Farewell! May your digital pursuits reach their ZENITH.",
                "Goodbye! Come back anytime you need guidance or information.",
                "Wishing you a productive day! Feel free to return.",
                "Until our next interaction! Best of luck with your endeavors."
            ];
            botResponse = farewells[Math.floor(Math.random() * farewells.length)];
        } else {
            const keywords = ['skills', 'projects', 'contact', 'about', 'zenith'];
            const matchedKeyword = keywords.find(keyword => lowerMessage.includes(keyword));

            if (matchedKeyword) {
                botResponse = `It seems you're asking about "${matchedKeyword}". Can you please provide a little more detail? I can offer more specific information about **${matchedKeyword}** or guide you to the relevant section.`;
            } else {
                botResponse = "My understanding is evolving! I can provide information on my **Skills**, **Projects**, how to **Contact** me, or explain the meaning of **ZENITH**. Which topic is at the forefront of your interest?";
            }
        }

        return botResponse;
    }
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('globe'),
        alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    const geometry = new THREE.SphereGeometry(5, 64, 64);
    const material = new THREE.MeshBasicMaterial({
        color: 0x6e00ff,
        transparent: true,
        opacity: 0.1,
        wireframe: true,
    });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.01,
        color: 0x00e5ff,
        blending: THREE.AdditiveBlending,
        transparent: true,
        opacity: 0.5,
    });
    const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleMesh);
    camera.position.z = 15;
    function animateGlobe() {
        requestAnimationFrame(animateGlobe);
        globe.rotation.y += 0.001;
        particleMesh.rotation.y += 0.001;
        renderer.render(scene, camera);
    }
    animateGlobe();
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    particlesJS('particles-container', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: '#6e00ff',
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000',
                },
                polygon: {
                    nb_sides: 5,
                },
                image: {
                    src: 'img/github.svg',
                    width: 100,
                    height: 100,
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00e5ff',
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab',
                },
                onclick: {
                    enable: true,
                    mode: 'push',
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    });
});
