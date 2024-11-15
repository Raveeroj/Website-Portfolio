document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    // Function to update icon based on theme
    const updateIcon = () => {
        themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    };

    // Toggle dark theme and icon on button click
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        updateIcon();
    });

    // Load saved theme on page load
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
    updateIcon(); // Set initial icon based on theme
});
document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        "ยินดีต้อนรับทุกท่านสู่เว็บไซต์ Portfolio ของผมครับ ในเว็บไซต์นี้ ผมได้รวบรวมข้อมูลและผลงานต่าง ๆ ที่ท่านอาจสนใจ ซึ่งเป็นการนำเสนอเพิ่มเติมจาก Portfolio แบบเล่ม โดยมีจุดประสงค์เพื่อให้ผมได้พัฒนาทักษะการเขียนโปรแกรมและการออกแบบเว็บไซต์ของตัวเอง รวมถึงการนำเสนอผลงานต่าง ๆ ที่ผมได้ทำตลอดระยะเวลาที่ผ่านมา เว็บไซต์นี้ไม่เพียงแต่เป็นแหล่งรวบรวมผลงานที่แสดงถึงความสามารถและความมุ่งมั่นในการพัฒนาตนเอง แต่ยังเป็นการสร้างความเข้าใจในวิธีการที่ผมใช้ในการแก้ไขปัญหาต่าง ๆ ผ่านการประยุกต์ใช้เทคโนโลยีและหลักการวิศวกรรมต่าง ๆ ผมหวังว่าเว็บไซต์ Portfolio นี้จะไม่เพียงแค่เป็นการนำเสนอผลงานของผมให้ทุกท่านได้ชม แต่ยังเป็นแรงบันดาลใจในการเรียนรู้และพัฒนาทักษะต่าง ๆ โดยเฉพาะในสาขาวิศวกรรมศาสตร์ ซึ่งเป็นเส้นทางที่ผมมุ่งมั่นและตั้งใจที่จะก้าวเดินต่อไปในอนาคต ผมตั้งใจว่าเว็บไซต์นี้จะช่วยให้ทุกท่านได้เห็นกระบวนการคิดและการพัฒนาผลงานที่ผมได้ทุ่มเทแรงกายและความคิดในการสร้างสรรค์ หากท่านมีคำแนะนำหรือข้อเสนอแนะใด ๆ ผมยินดีรับฟังเพื่อพัฒนาผลงานของตัวเองให้ดียิ่งขึ้นต่อไปครับ",
        "Welcome everyone to my portfolio website. In this website, I have gathered various information and works that you may find interesting, which are presented as an addition to the physical portfolio. The purpose of this site is not only to enhance my programming skills and website design but also to showcase the work I have completed over the past period. This website serves as a collection of works that reflect my abilities and dedication to personal development, as well as providing insight into the methods I use to solve problems through the application of technology and engineering principles.I hope this portfolio website will not only allow you to view my works but also inspire learning and skill development, particularly in the field of engineering, which is the path I am determined to pursue in the future. I aim for this website to demonstrate my thought process and the effort I have put into creating each project. If you have any suggestions or feedback, I would be happy to hear them to further improve my work."
    ];

    const messageElement = document.getElementById('welcome-message');
    let currentMessageIndex = 0;

    function showNextMessage() {
        // แสดงข้อความใหม่
        messageElement.textContent = messages[currentMessageIndex];
        
        // เปลี่ยนไปยังข้อความถัดไป
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;

        // ตั้งเวลาในการสลับข้อความ
        setTimeout(showNextMessage, 7000); // แสดงผลแต่ละข้อความ 7 วินาที
    }

    // เริ่มแสดงข้อความ
    showNextMessage();
});
