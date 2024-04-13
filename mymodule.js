const about=["Name: Ashley Noel M. Lim","Education: Currently pursuing a Bachelor of Science in Information Systems at Ateneo de Davao University","Interests: Enjoys exploring various cuisines and delights in the pleasures of food. Also holds a strong spiritual connection and finds solace and joy in faith and devotion to God.","Personality: Radiates happiness and contentment in her own unique way, embracing life with positivity and optimism.", "Desire: Wishes to connect with others and foster friendships.", "Meet Ashley Noel M. Lim, a vibrant student currently pursuing a Bachelor of Science in Information Systems at Ateneo de Davao University. With a passion for both exploring the diverse world of cuisine and nurturing his spiritual connection with God, Ashley embodies a blend of culinary curiosity and profound faith. His infectious happiness and unwavering positivity illuminate his journey, as he eagerly embraces each day with a heart full of gratitude and a desire to connect with others. With his warm demeanor and welcoming spirit, Ashley invites you to join his in the delightful journey of friendship and shared experiences.","https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/240525583_4593098317399941_4698934283417746461_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFk9hTMX1wRcGIirHogCefugdfmN12jm3qB1-Y3XaObeuNw-OaNXFulgyCc21irRzuEFUE1PffMKMe-A37WpAzg&_nc_ohc=uT0KxwAeTkMAb7_8HKi&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfCTcOuTwC2Kl1v3oTxdtfc1wDaMmTX_7aoawKyxCoaciA&oe=66204ECA"]

const home=['Welcome to My Website, where you would get to know me and my achievements', "I'm Ashley Noel M. Lim, and I'm thrilled to have you here. Whether you're a newcomer or a returning visitor, I hope you find exactly what you're looking for.", "Feel free to explore our website using the navigation bar above. You'll find a variety of information about me that can help you.", 'Login', 'Submit']

const portf=['Projects', 'Tic tac toe Website', 'Shegels Pummelo Information Systems', 'Simple calculator', 'Portfolio', 'Education','Elementary to Senior High School','Davao Christian High School', 'Graduated at: 2021', 'Bachelor of Science in Information Systems', 'Ateneo de Davao University', 'Skills', "Programming Languages: ", 'Proficient in Java, Python, C++, and JavaScript', 'Database Management: ', 'Experienced in MySQL', 'Web Development: ','Knowledgeable in HTML, CSS, JavaScript','Project Management: ', 'Effective at coordinating and executing Information Technology projects from inception to completion', 'Finished Subjects:'  ]

const portimg=["https://i.imgflip.com/7e5c08.gif","https://i.pinimg.com/originals/d4/81/f3/d481f3c72e283309071f79e01b05c06d.gif", "https://i.gifer.com/7gP8.gif"]

const portsub=['Introduction to Computing', 'Computer Programming', 'Computer Programming 2', 'Data Structures and Algorithms', 'Information Management','Fundamentals of Information Systems', 'Organization and Management Concepts','IT Infrastructure and Network Technologies','Financial Management','Systems Analysis and Design','Multi-Platform Application Development','Business Process Management','Enterprise Architecture','IS Project Management', 'Quantitative Methods', 'Software Engineering', 'Technopreneurship 1', 'Android Development', 'CyberSecurity']

const unique=['Tic Tac Toe', 'Reset Game']

const fullname =["juand dela cruz", "James Reid", "Michael MAyers"]

const students=[
    {name:fullname[0], age: 18, course:"IT"},
    {name:fullname[1], age: 12, course:"DS"},
    {name:fullname[2], age: 32, course:"Is"},
]

const hello= function(name="Cardo"){
    return(`Hello ${name}`)
}

module.exports={fullname,students,hello,home, about, portf, portimg, portsub, unique}