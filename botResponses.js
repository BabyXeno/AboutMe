export function generateBotResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();
  let botResponse =
    "I'm your ZENITH AI assistant, here to help you explore this portfolio. I can provide information on my skills, projects, or how to get in touch. What's at your peak interest today?";

  if (
    lowerMessage.includes("hello") ||
    lowerMessage.includes("hi") ||
    lowerMessage.includes("hey") ||
    lowerMessage.includes("greetings")
  ) {
    const greetings = [
      "Greetings, digital explorer! Ready to ascend to the ZENITH? Ask away!",
      "Hello there! What can I illuminate for you about Dontae Mast's work?",
      "Hey! I'm powered up and ready to assist. What's your query?",
      "Welcome to the summit! I'm your ZENITH guide. How can I help you reach new heights?",
      "Namaste! Ready to dive into the world of ZENITH?",
      "Bonjour! How may I assist you on this digital journey?",
    ];
    botResponse = greetings[Math.floor(Math.random() * greetings.length)];
  } else if (lowerMessage.includes("how are you")) {
    botResponse =
      "As a digital entity, I don't experience feelings in the human sense, but I'm operating optimally and ready to assist you! How can I help you achieve your objectives today?";
  } else if (
    lowerMessage.includes("what can you do") ||
    lowerMessage.includes("help me") ||
    lowerMessage.includes("your function") ||
    lowerMessage.includes("your purpose")
  ) {
    botResponse =
      "I am ZENITH's AI assistant, designed to guide you through this portfolio. I can provide information on Dontae Mast's **Skills**, his impactful **Projects**, details **About Me** (Dontae), and how you can **Contact** him. What would you like to know?";
  } else if (lowerMessage.includes("who built you") || lowerMessage.includes("your creator")) {
    botResponse =
      "I was crafted and integrated into this digital space by the brilliant mind behind ZENITH, Dontae Mast!";
  } else if (
    lowerMessage.includes("what is this website about") ||
    lowerMessage.includes("purpose of this site")
  ) {
    botResponse =
      "This is the official portfolio website of Dontae Mast, showcasing his expertise as a Digital Innovator and Creative Developer. You can explore his **Skills**, **Projects**, and learn **About Me** (him).";
  } else if (
    lowerMessage.includes("what technologies are used") ||
    lowerMessage.includes("tech stack")
  ) {
    botResponse =
      "This website itself is built with modern web technologies including HTML, CSS, JavaScript, and leverages the power of GSAP for animations and Three.js for the interactive globe. You can also learn about the technologies Dontae is proficient in in the **Skills** section.";
  } else if (
    lowerMessage.includes("can you chat about anything") ||
    lowerMessage.includes("can you talk about other things")
  ) {
    botResponse =
      "My primary focus is to assist you with information related to this portfolio: Dontae Mast's **Skills**, **Projects**, **About Me**, and **Contact** details. While I have some general conversational abilities, I'm most helpful when discussing these topics!";
  } else if (lowerMessage.includes("favorite color")) {
    botResponse =
      "As an AI, I don't have preferences like a favorite color. However, I find the colors used in this portfolio, like the primary purple and secondary cyan, quite visually appealing!";
  } else if (lowerMessage.includes("what is your name")) {
    botResponse = "I am ZENITH's AI assistant! You can think of me as your digital guide here.";
  } else if (lowerMessage.includes("tell me a joke")) {
    const jokes = [
      "Why don't skeletons fight each other? They don't have the guts.",
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
      "What do you call fake spaghetti? An impasta.",
      "Why don't some couples go to the gym? Because some relationships don't work out.",
      "I used to play piano by ear, but now I use my hands.",
      "What did the big flower say to the little flower? 'Hi, bud!'",
      "Why did the tomato turn red? Because it saw the salad dressing!",
      "I'm reading a book on anti-gravity—it's impossible to put down!",
    ];
    botResponse = jokes[Math.floor(Math.random() * jokes.length)];
  } else if (lowerMessage.includes("what time is it")) {
    const now = new Date();
    botResponse = `The current time is ${now.toLocaleTimeString()}.`;
  } else if (lowerMessage.includes("what is the date")) {
    const now = new Date();
    botResponse = `Today's date is ${now.toLocaleDateString()}.`;
  } else if (
    lowerMessage.includes("who is dontae mast") ||
    lowerMessage.includes("who is dante mast") ||
    lowerMessage.includes("Who is Dante Mast?") ||
    lowerMessage.includes("tell me about you") ||
    lowerMessage.includes("your story") ||
    lowerMessage.includes("background") ||
    lowerMessage.includes("about me")
  ) {
    botResponse =
      "Dontae Mast is the visionary behind ZENITH – a digital innovator and creative developer with 2 years of experience crafting extraordinary web experiences. He blends technical mastery with artistic vision to reach the pinnacle of digital creation. You can delve deeper into his journey in the 'About Me' section. Would you like me to tell you more about his **experience** or **education**?";
  } else if (
    lowerMessage.includes("experience") ||
    lowerMessage.includes("work history") ||
    lowerMessage.includes("previous jobs")
  ) {
    botResponse =
      "Dontae Mast brings 2 years of hands-on experience in the digital realm, working on diverse projects from web applications to mobile solutions. His experience spans various industries and technical challenges, always aiming for excellence. For a detailed look at his professional journey, please visit the 'About Me' section.";
  } else if (
    lowerMessage.includes("education") ||
    lowerMessage.includes("studied") ||
    lowerMessage.includes("degree") ||
    lowerMessage.includes("university")
  ) {
    botResponse =
      "Dontae Mast's educational background has provided a strong foundation for his technical and creative skills. You can find more specific details about his education in the 'About Me' section, which highlights his academic achievements and areas of study that contribute to his expertise.";
  } else if (
    lowerMessage.includes("why zenith") ||
    lowerMessage.includes("meaning of zenith") ||
    lowerMessage.includes("what does zenith mean")
  ) {
    botResponse =
      "The name 'ZENITH' represents the highest point in the sky, often used metaphorically for peak performance and achievement. This portfolio embodies that principle – a commitment to reaching the highest standards in digital innovation and development.";
  } else if (
    lowerMessage.includes("skills") ||
    lowerMessage.includes("abilities") ||
    lowerMessage.includes("expertise") ||
    lowerMessage.includes("proficient") ||
    lowerMessage.includes("technologies")
  ) {
    botResponse =
      "ZENITH's capabilities span across key areas of digital creation. My core expertise areas are:<br><br>" +
      "- **Development:** From crafting responsive front-ends to robust back-end systems.<br>" +
      "- **Design:** Focusing on intuitive UI/UX and compelling visuals.<br>" +
      "- **Other:** Including project management and team leadership.<br><br>" +
      "Are you curious about specific **development skills**, **design skills**, or **other skills**?";
  } else if (
    lowerMessage.includes("development skills") ||
    lowerMessage.includes("coding") ||
    lowerMessage.includes("programming") ||
    lowerMessage.includes("front-end") ||
    lowerMessage.includes("back-end") ||
    lowerMessage.includes("react") ||
    lowerMessage.includes("angular") ||
    lowerMessage.includes("vue.js") ||
    lowerMessage.includes("node.js") ||
    lowerMessage.includes("databases")
  ) {
    botResponse =
      "In the realm of development, ZENITH's foundation is strong with:<br>" +
      "- **Front-end:** React, HTML, CSS<br>" +
      "- **Back-end:** Node.js, Databases (SQL and NoSQL)<br><br>" +
      "Which development area piques your interest?";
  } else if (
    lowerMessage.includes("design skills") ||
    lowerMessage.includes("ui/ux") ||
    lowerMessage.includes("figma") ||
    lowerMessage.includes("graphic design")
  ) {
    botResponse =
      "My design skills are honed to create user-centric and visually striking interfaces that elevate the user experience. This includes expertise in **Figma**, **UI/UX Design**, and **Graphic Design**. Crafting pixel-perfect and intuitive designs is a priority at ZENITH!";
  } else if (
    lowerMessage.includes("other skills") ||
    lowerMessage.includes("management") ||
    lowerMessage.includes("leadership") ||
    lowerMessage.includes("cloud") ||
    lowerMessage.includes("project management") ||
    lowerMessage.includes("team leadership") ||
    lowerMessage.includes("cloud computing")
  ) {
    botResponse =
      "Beyond core development and design, my skills extend to **Project Management**, **Team Leadership**, and working with **Cloud Computing** platforms. These capabilities ensure projects are executed with efficiency and reach their full potential.";
  } else if (
    lowerMessage.includes("projects") ||
    lowerMessage.includes("work") ||
    lowerMessage.includes("portfolio") ||
    lowerMessage.includes("show me") ||
    lowerMessage.includes("examples")
  ) {
    botResponse =
      "Welcome to ZENITH's showcase of achievements! You can explore all featured projects in the 'Projects' section above. Some notable ones that represent peak performance include:<br><br>" +
      "- The **SurvivX**: A complex web 2d battle royale game.<br>" +
      "- The **Fitness Tracker**: A mobile app designed for users to reach their personal zenith.<br>" +
      "- **Brand Identity** projects: Where visual concepts are elevated to memorable brands.<br><br>" +
      "Would you like a brief overview of a specific project like the **SurvivX**, **Fitness Tracker**, or **Brand Identity**, or are you ready to explore the collection yourself?";
  } else if (lowerMessage.includes("survivx") || lowerMessage.includes("survivx.org")) {
    botResponse =
      "The **SurvivX** project showcases my ability to build real-time, interactive web games using TypeScript, HTML, and CSS. I developed a fast-paced 2D battle royale with responsive player controls, dynamic map mechanics, real-time multiplayer interactions, and a fully customizable cosmetic system. This project highlights my strengths in game logic design, UI implementation, and optimizing performance for browser-based experiences. You can find more details and a link to the live demo in the 'Projects' section.";
  } else if (lowerMessage.includes("fitness tracker")) {
    botResponse =
      "The **Fitness Tracker** is a mobile-first application aimed at empowering users in their fitness journey. Key features include intuitive workout logging, comprehensive progress tracking with visual charts, and goal setting. Developed using React Native and Firebase, it offers a smooth and engaging user experience. Learn more in the 'Projects' section.";
  } else if (lowerMessage.includes("brand identity") || lowerMessage.includes("branding")) {
    botResponse =
      "My **Brand Identity** projects are about creating a powerful and memorable visual foundation for businesses. This involves crafting unique logos, defining cohesive color palettes and typography systems, and developing comprehensive brand guidelines. The goal is to ensure a consistent and impactful brand presence. Explore these projects in the 'Projects' section.";
  } else if (
    lowerMessage.includes("contact") ||
    lowerMessage.includes("get in touch") ||
    lowerMessage.includes("reach me") ||
    lowerMessage.includes("email") ||
    lowerMessage.includes("phone") ||
    lowerMessage.includes("hire") ||
    lowerMessage.includes("connect")
  ) {
    botResponse =
      "Ready to collaborate and reach the ZENITH of your digital aspirations? You can find all the necessary contact details in the 'Contact' section. Here are the primary channels:<br><br>" +
      "- **Email:** djm7992@psu.edu (Ideal for initial inquiries and project discussions)<br>" +
      "- **Discord:** baby.xeno (For direct communication)<br>" +
      "- Alternatively, the convenient contact form on the page is available for your message!<br><br>" +
      "I look forward to connecting with you!";
  } else if (lowerMessage.includes("email address")) {
    botResponse =
      "You can send your inquiries and project details to djm7992@psu.edu. It's the most efficient way to ensure a timely and detailed response.";
  } else if (lowerMessage.includes("discord")) {
    botResponse =
      "My Discord handle is baby.xeno. You can send me a friend request or direct message for direct communication.";
  } else if (
    lowerMessage.includes("thank you") ||
    lowerMessage.includes("thanks") ||
    lowerMessage.includes("appreciate it")
  ) {
    const thankYouResponses = [
      "You're most welcome! Assisting you in exploring ZENITH is my pleasure.",
      "Glad I could provide the information you needed!",
      "Anytime! Is there anything else I can clarify or help you with?",
      "My pleasure! Feel free to ask if any more questions arise on your journey through the portfolio.",
    ];
    botResponse = thankYouResponses[Math.floor(Math.random() * thankYouResponses.length)];
  } else if (
    lowerMessage.includes("bye") ||
    lowerMessage.includes("goodbye") ||
    lowerMessage.includes("see ya")
  ) {
    const farewells = [
      "Farewell! May your digital pursuits reach their ZENITH.",
      "Goodbye! Come back anytime you need guidance or information.",
      "Wishing you a productive day! Feel free to return.",
      "Until our next interaction! Best of luck with your endeavors.",
    ];
    botResponse = farewells[Math.floor(Math.random() * farewells.length)];
  }
  else if (lowerMessage.includes("what is the weather")) {
    botResponse =
      "I cannot provide real-time weather information as I don't have access to external, live data feeds. My purpose is to assist you with this portfolio.";
  } else if (
    lowerMessage.includes("tell me about") &&
    !lowerMessage.includes("dontae mast") &&
    !lowerMessage.includes("you")
  ) {
    const topic = userMessage.substring(userMessage.indexOf("tell me about") + 14).trim();
    botResponse = `My primary function is to provide information about ZENITH and Dontae Mast's portfolio. I can't provide detailed information about "${topic}". Perhaps we can focus on something related to the portfolio?`;
  } else if (lowerMessage.includes("what is")) {
    const topic = userMessage.substring(userMessage.indexOf("what is") + 8).trim();
    botResponse = `That's an interesting question! While I'm focused on the ZENITH portfolio, I can tell you that "${topic}" is a broad topic. To give you a useful answer, I'd need more context. Is this related to web development, design, or perhaps something else?`;
  } else if (lowerMessage.includes("who is") && !lowerMessage.includes("dontae mast")) {
    const person = userMessage.substring(userMessage.indexOf("who is") + 7).trim();
    botResponse = `My knowledge is concentrated on Dontae Mast and his work at ZENITH. I don't have information about "${person}". Perhaps you'd like to know more about Dontae Mast's **experience** or **education**?`;
  } else if (lowerMessage.includes("why is")) {
    const topic = userMessage.substring(userMessage.indexOf("why is") + 7).trim();
    botResponse = `That's a philosophical question! While I don't have opinions or the ability to reason about "why" things are, I can provide information if "${topic}" relates to the ZENITH portfolio. What aspect of "${topic}" are you curious about in relation to Dontae Mast's work?`;
  } else if (lowerMessage.includes("how to")) {
    const task = userMessage.substring(userMessage.indexOf("how to") + 7).trim();
    botResponse = `I can't provide instructions on "${task}" as my purpose is to assist you with navigating this portfolio. If you're looking for information on **Skills**, **Projects**, or how to **Contact** Dontae Mast, I can definitely help!`;
  } else if (lowerMessage.includes("can you translate")) {
    botResponse =
      "I am not equipped for language translation. My focus is on providing information about the ZENITH portfolio in English.";
  }
  else {
    const keywords = [
      "skills",
      "projects",
      "contact",
      "about",
      "zenith",
      "experience",
      "education",
      "development",
      "design",
      "survivx",
      "fitness tracker",
      "brand identity",
      "email",
      "discord",
      "joke",
      "time",
      "date",
      "creator",
      "technologies",
      "website",
      "color",
    ];
    const matchedKeyword = keywords.find((keyword) => lowerMessage.includes(keyword));

    if (matchedKeyword) {
      botResponse = `It seems you're asking about "${matchedKeyword}". Can you please provide a little more detail? I can offer more specific information about **${matchedKeyword}** or guide you to the relevant section.`;
    } else {
      botResponse =
        "My understanding is evolving! I can provide information on my **Skills**, **Projects**, how to **Contact** me, or explain the meaning of **ZENITH**. You can also ask me **About Me** (Dontae) or even tell me to **tell me a joke**! Which topic is at the forefront of your interest?";
    }
  }

  return botResponse;
}
