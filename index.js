
function closeAd() {
    document.getElementById('ad-popup').style.display = 'none'; 
    showWelcomeMessage(); 
}

function showWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.style.display = 'block'; 

    setTimeout(() => {
        welcomeMessage.style.animation = 'fadeOut 3s forwards'; 
    }, 3000); 
}
function showinfo() {
    alert('Bu siteden aldığınız tüm projeleri kendi projelerinize gönül rahatlığıyla entegre edebilirsiniz.Herkese kolay gelsin.');
}
function showSection(sectionId) {
    
    const sections = ['contact', 'projects', 'survey'];
    sections.forEach(id => {
        const section = document.getElementById(id);
        section.style.display = 'none';
    });
    
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';

    const pythonProjects = document.getElementById('python-projects');
    const cppProjects = document.getElementById('cpp-projects');
    pythonProjects.style.display = 'none';
    cppProjects.style.display = 'none';
}

function showPythonProjects() {
    document.getElementById('python-projects').style.display = 'block';
    document.getElementById('cpp-projects').style.display = 'none';
}
function showCppProjects() {
    document.getElementById('cpp-projects').style.display = 'block';
    document.getElementById('python-projects').style.display = 'none';
}

function toggleProjectDetails(id) {
    const details = document.getElementById(id);
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}
