# TechPrep

**TechPrep** is an open-source technical interview and placement preparation platform designed to help students systematically prepare for technical interviews, campus placements, and competitive recruitment processes.

The platform provides a large collection of technical multiple-choice questions covering core computer science and software engineering subjects, along with explanations and difficulty levels.

## 🚀 Features

- 📚 Large collection of technical placement questions
- 🧠 Questions organized by technical subjects and topics
- 🎯 Multiple-choice question (MCQ) based practice
- ✅ Instant answer validation
- ❌ Incorrect answers are clearly highlighted
- 🟢 Correct answers are clearly highlighted
- 💡 Detailed explanations for questions
- 📊 Difficulty levels such as Easy, Medium, and Hard
- 🔄 Continuously growing question database
- 🤖 Automated Daily Placement Question system
- 🌐 Fully open-source
- 💻 Designed for students preparing for technical interviews and placements

## 📖 Subjects Covered

TechPrep includes questions from important technical interview and placement topics such as:

- C Programming
- C++
- Java
- Python
- Data Structures & Algorithms
- Object-Oriented Programming
- Database Management Systems
- SQL
- Operating Systems
- Computer Networks
- Software Engineering
- Full Stack Development
- Artificial Intelligence & Machine Learning
- Placement Fundamentals
- Git & Version Control
- Cybersecurity
- And more

## 🤖 Daily Placement Question

TechPrep includes an automated **Daily Placement Question** system powered by GitHub Actions.

Every day, the system:

1. Selects the next question from the question queue.
2. Adds the question to the main placement question dataset.
3. Removes the processed question from the queue.
4. Automatically commits the changes.
5. Pushes the updated dataset back to GitHub.

This allows the platform's question database to continuously grow without requiring manual updates.

## 📊 Question Database

The project contains a large question queue containing thousands of technical placement questions.

Each question contains:

- Question ID
- Topic
- Difficulty
- Four answer options
- Correct answer
- Explanation

Example structure:

```json
{
    "id": "pf-454",
    "topic": "Git Basics",
    "difficulty": "Easy",
    "question": "What does Git primarily track in a project?",
    "options": [
        "File permissions only",
        "Changes to file content",
        "Disk space usage",
        "Network traffic"
    ],
    "answer": 1,
    "explanation": "Git is a distributed version control system that tracks changes to file content over time."
}
