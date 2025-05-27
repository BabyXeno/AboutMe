import {
    generateBotResponse
} from './botResponses.js';

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
        SurvivX: {
            title: 'SurvivX.org',
            description:
                'SurvivX is a fast-paced 2D battle royale game where the goal is to be the last player standing. Start with just a backpack, scavenge for loot, eliminate opponents, and avoid the deadly red zone that closes in as the match progresses. Inspired by games like PUBG and Fortnite, SurvivX offers classic battle royale action with a top-down twist.',
            image: 'survivxproject2.png',
            client: 'Personal Project',
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
    const chatbotVoiceToggle = chatbotContainer.querySelector('.chatbot-voice-toggle');
    const chatbotVoiceStatus = chatbotContainer.querySelector('.chatbot-voice-status');

    let isRecognizingChatbot = false;
    let chatbotRecognition;
    let messageSentByVoice = false;

    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        chatbotRecognition = new SpeechRecognition();
        chatbotRecognition.lang = 'en-US';
        chatbotRecognition.interimResults = false;
        chatbotRecognition.continuous = false;

        chatbotRecognition.onstart = () => {
            isRecognizingChatbot = true;
            chatbotVoiceStatus.textContent = "Listening...";
            chatbotVoiceStatus.classList.add('active');
            chatbotVoiceToggle.classList.add('active');
            messageSentByVoice = true;
        };

        chatbotRecognition.onerror = (event) => {
            isRecognizingChatbot = false;
            chatbotVoiceStatus.textContent = 'Voice input error: ' + event.error;
            chatbotVoiceStatus.classList.remove('active');
            chatbotVoiceToggle.classList.remove('active');
            messageSentByVoice = false;
            console.error('Speech Recognition Error:', event.error);
        };

        chatbotRecognition.onend = () => {
            isRecognizingChatbot = false;
            chatbotVoiceToggle.classList.remove('active');
        };

        chatbotRecognition.onresult = (event) => {
            let finalTranscript = '';
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                }
            }
            chatbotVoiceStatus.textContent = "";
            chatbotVoiceStatus.classList.remove('active');
            if (finalTranscript) {
                chatbotInput.value = finalTranscript;
                sendMessage();
            } else {
                chatbotVoiceStatus.textContent = "No voice input detected.";
            }
            messageSentByVoice = true;
        };
    } else {
        if (chatbotVoiceToggle) {
            chatbotVoiceToggle.style.display = 'none';
            chatbotVoiceStatus.textContent = "Voice input not supported.";
            chatbotVoiceStatus.classList.add('active');
            chatbotVoiceStatus.style.color = 'var(--gray)';
        }
    }
    if (chatbotVoiceToggle) {
        chatbotVoiceToggle.addEventListener('click', () => {
            if (isRecognizingChatbot) {
                chatbotRecognition.stop();
                chatbotVoiceStatus.textContent = "Voice input stopped.";
                chatbotVoiceStatus.classList.remove('active');
            } else {
                chatbotRecognition.start();
            }
        });
    }
    document.addEventListener('DOMContentLoaded', () => {
        if (chatbotMessages) {
            const initialMessage = generateBotResponse("initial greeting");
            appendMessage(initialMessage, 'bot-message');
        }
    });

    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.classList.toggle('active');
        if (!chatbotContainer.classList.contains('active')) {
            if (isRecognizingChatbot) {
                chatbotRecognition.stop();
                chatbotVoiceStatus.textContent = "";
                chatbotVoiceStatus.classList.remove('active');
                messageSentByVoice = false;
            }
            // Stop speech synthesis when chatbot is closed
            window.speechSynthesis.cancel();
        }
    });

    chatbotClose.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
        if (isRecognizingChatbot) {
            chatbotRecognition.stop();
            chatbotVoiceStatus.textContent = "";
            chatbotVoiceStatus.classList.remove('active');
            messageSentByVoice = false;
        }
        // Stop speech synthesis when chatbot is closed
        window.speechSynthesis.cancel();
    });


    chatbotSendButton.addEventListener('click', () => {
        messageSentByVoice = false;
        sendMessage();
    });

    chatbotInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            messageSentByVoice = false;
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = chatbotInput.value.trim();
        if (messageText === '') return;

        appendMessage(messageText, 'user-message');
        chatbotInput.value = '';
        chatbotVoiceStatus.textContent = "";
        chatbotVoiceStatus.classList.remove('active');
        setTimeout(() => {
            const botResponse = generateBotResponse(messageText);
            if (messageSentByVoice && chatbotContainer.classList.contains('active')) { // Check if chatbot is active before speaking
                speakChatbotResponse(botResponse);
            }

            appendMessage(botResponse, 'bot-message');

            messageSentByVoice = false;
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

    function speakChatbotResponse(text) {
        const synth = window.speechSynthesis;
        if (!synth) {
            console.warn("Speech synthesis not supported for chatbot responses.");
            return;
        }
        if (synth.speaking) {
            synth.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.pitch = 1.1;
        utterance.rate = 1.0;
        utterance.lang = 'en-US';

        utterance.onerror = (event) => {
            console.error('Chatbot SpeechSynthesisUtterance error:', event);
        };

        synth.speak(utterance);
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
