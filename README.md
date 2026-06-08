                                                          CAREERPATH-AI



***********************
# User: ande@example.com
# Password: 12345
------------------------------------------------------------------------------------------------------------------
# 🚀 CareerPath AI

# CareerPath AI - Project Description

#CareerPath AI is an AI-powered career guidance web application developed to help users identify suitable career paths based on their skills and interests. The system provides a complete career development journey, starting from skill assessment and ending with a personalized learning roadmap. Users can register and log in securely using JWT-based authentication. The application allows users to submit their skills, proficiency levels, and assessment scores.
Based on the assessment data, the system recommends relevant career opportunities that match the user's profile. It also performs skill gap analysis by comparing the user's existing skills with the skills required for a target career. The identified skill gaps help users understand which technologies or competencies they need to learn.
The application generates a personalized learning roadmap that guides users through a step-by-step learning path to achieve their career goals. The frontend is built using React.js, providing a responsive and interactive user interface. The backend is developed using Spring Boot and follows RESTful API architecture. MySQL is used for data storage and management.
Spring Security and JWT are implemented to ensure secure authentication and authorization. The project follows a modular architecture, making it scalable and maintainable. Modern UI/UX principles, including glassmorphism effects, responsive layouts, and interactive dashboards, are used to enhance the user experience.
CareerPath AI demonstrates the integration of frontend, backend, database management, authentication, and career recommendation features into a single full-stack application. The project showcases practical knowledge of Java Full Stack Development and serves as a career assistance platform for students and job seekers.#

---------------------------------------------------------------------------------------------------------------------------


## 📂 Project Structure

```text
CareerPath-AI/
│
├── careerpath-frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   │
│   │   ├── assets/
│   │   │
│   │   ├── services/
│   │   │   ├── userService.js
│   │   │   ├── assessmentService.js
│   │   │   ├── recommendationService.js
│   │   │   ├── skillGapService.js
│   │   │   └── roadmapService.js
│   │   │
│   │   ├── LoginPage.jsx
│   │   ├── Dashboard.jsx
│   │   ├── AssessmentPage.jsx
│   │   ├── RecommendationsPage.jsx
│   │   ├── SkillGapPage.jsx
│   │   ├── RoadmapPage.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   │
│   │   ├── App.css
│   │   ├── Dashboard.css
│   │   ├── AssessmentPage.css
│   │   ├── RecommendationsPage.css
│   │   ├── SkillGapPage.css
│   │   └── RoadmapPage.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── src/
│   └── main/
│       │
│       ├── java/
│       │   └── com/
│       │       └── careerpathai/
│       │
│       │           ├── controller/
│       │           │   ├── AuthController.java
│       │           │   ├── AssessmentController.java
│       │           │   ├── RecommendationController.java
│       │           │   ├── SkillGapController.java
│       │           │   └── RoadmapController.java
│       │
│       │           ├── service/
│       │           │   ├── AuthService.java
│       │           │   ├── AssessmentService.java
│       │           │   ├── RecommendationService.java
│       │           │   ├── SkillGapService.java
│       │           │   └── RoadmapService.java
│       │
│       │           ├── repository/
│       │           │   ├── UserRepository.java
│       │           │   ├── AssessmentRepository.java
│       │           │   └── CareerRepository.java
│       │
│       │           ├── model/
│       │           │   ├── User.java
│       │           │   ├── Assessment.java
│       │           │   └── Career.java
│       │
│       │           ├── dto/
│       │           │   ├── LoginRequest.java
│       │           │   ├── RegisterRequest.java
│       │           │   └── AssessmentRequest.java
│       │
│       │           ├── security/
│       │           │   ├── JwtUtil.java
│       │           │   ├── JwtFilter.java
│       │           │   └── SecurityConfig.java
│       │
│       │           └── CareerPathAiApplication.java
│       │
│       └── resources/
│           ├── application.properties
│           └── static/
│
├── .gitignore
├── pom.xml
├── README.md
└── database.sql
```
-------------------------------------------
```text
CareerPath-AI
├── careerpath-frontend     # React Frontend
├── src/main/java           # Spring Boot Backend
├── src/main/resources      # Configuration Files
├── pom.xml                 # Maven Dependencies
├── README.md               # Project Documentation
└── .gitignore              # Git Ignore Rules
```

## 🏗️ Project Architecture

```text
React Frontend (React.js)
        │
        ▼
REST APIs (Axios)
        │
        ▼
Spring Boot Controllers
        │
        ▼
Services (Business Logic)
        │
        ▼
Repositories (Spring Data JPA)
        │
        ▼
MySQL Database
```
-----------------------------------------------------------------------------------------------------------------------------------------

## 📌 Features

### 🔐 User Authentication

* User Registration
* User Login
* JWT Authentication
* Secure Password Encryption using BCrypt

### 📝 Skill Assessment

* Add Skills
* Enter Score
* Select Skill Level
* Track User Assessments

### ⚙️ Career Recommendations

* AI-inspired career suggestions
* Match skills with career opportunities
* Display required skills and career descriptions

### 🧠 Skill Gap Analysis

* Identify missing skills
* Compare user skills with career requirements
* Generate skill improvement suggestions

### 📖 Learning Roadmap

* Personalized learning path
* Step-by-step roadmap generation
* Career-focused learning recommendations

### 🎨 Modern User Interface

* Responsive Design
* Glassmorphism UI
* Professional Dashboard
* Interactive Cards and Animations

-------------------------------------------------------------------------------------------------------------------------------



## 💻 Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS3
* React Icons

### Backend

* Java
* Spring Boot
* Spring Security
* Spring Data JPA
* JWT Authentication
* Maven
------------------------------------------------------------------------------------------------------------------------
### Database

* MySQL

------------------------------------------------------------------------------------------------------------------------

## 📂 Modules

### Authentication Module

* Register User
* Login User
* JWT Token Generation

### Assessment Module

* Create Assessment
* Store Assessment Data

### Recommendation Module

* Career Suggestions
* Career Information

### Skill Gap Module

* Missing Skills Detection

### Roadmap Module

* Personalized Learning Roadmap

-------------------------------------------------------------------------------------------------------------------------

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/andekiran7/Careerpath-AI.git
```

### Backend Setup

```bash
cd CareerPath-AI
```

Configure MySQL in:

```properties
application.properties
```

Run:

```bash
mvn spring-boot:run
```

Backend will start at:

```text
http://localhost:8080
```

---

### Frontend Setup

```bash
cd careerpath-frontend
```

Install dependencies:

```bash
npm install
```

Start React application:

```bash
npm run dev
```

Frontend will start at:

```text
http://localhost:5173
```

------------------------------------------------------------------------------------------------------------------------

## 📸 Screenshots

* Login Page
* Dashboard
* Assessment Form
* Career Recommendations
* Skill Gap Analysis
* Learning Roadmap

##LOGIN PAGE
<img width="907" height="469" alt="Screenshot 2026-06-09 000529" src="https://github.com/user-attachments/assets/c52c38c6-a4fa-48af-b567-bfacb6c94e38" />

##DASHBOARD
<img width="946" height="407" alt="Screenshot 2026-06-09 000557" src="https://github.com/user-attachments/assets/98b7e764-c4a5-4933-93d5-a0ffca67be9b" />
<img width="944" height="344" alt="Screenshot 2026-06-09 000613" src="https://github.com/user-attachments/assets/928e46fd-68f3-45af-88b0-7d7d20ea75a3" />


---

# Future Enhancements of CareerPath AI

1. Implement AI/ML-based career prediction using user skills, interests, and assessment scores.
2. Integrate OpenAI/Gemini APIs to provide personalized career guidance through an AI chatbot.
3. Add resume analysis and ATS score evaluation features.
4. Recommend online courses, certifications, and learning resources based on identified skill gaps.
5. Introduce a progress tracking dashboard with charts and analytics.
6. Implement role-based access control for students, mentors, and administrators.
7. Add email notifications for learning milestones and career recommendations.
8. Integrate LinkedIn APIs to import user skills and professional profiles.
9. Develop a job recommendation system based on user skills and career goals.
10. Add mock interview preparation modules with AI-generated interview questions.
11. Implement dark mode and theme customization options.
12. Add profile management and skill portfolio features.
13. Enable real-time chat support between users and career mentors.
14. Integrate cloud deployment using AWS, Azure, or Google Cloud Platform.
15. Add certification tracking and achievement badges.
16. Implement advanced search and filtering for career recommendations.
17. Add multilingual support for regional and international users.
18. Use data visualization dashboards for skill trends and career growth analysis.
19. Integrate predictive analytics to forecast future career opportunities based on market demand.


----------------------------------------------------------------------------------------------------------------------

## 👨‍💻 Author

**Kiran Ande**

Java Full Stack Developer

GitHub: https://github.com/andekiran7

---

## ⭐ If you like this project

Give this repository a star and support the project.
