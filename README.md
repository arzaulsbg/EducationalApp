# AcademyVite

AcademyVite is an adaptive learning platform designed to make education engaging and personalized. It offers a variety of courses, interactive learning modules, and AI-powered support to enhance the learning experience for students, parents, and teachers.

## Features

- **User Authentication:** Secure sign-in and sign-out functionality with social media integration.
- **Course Content:** A wide range of courses with detailed descriptions and interactive elements.
- **User Dashboard:** Personalized dashboard with progress tracking, recommendations, and achievements.
- **AI Chat Support:** Real-time AI assistance for instant help and guidance.
- **Responsive Design:** Mobile-friendly interface adaptable to various screen sizes.
- **Gamification:** Rewards, badges, and leaderboards to motivate learners.

## Technologies Used

- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Node.js, Express, OpenAI API for AI chat
- **Database:** (Specify if any database is used, e.g., MongoDB, PostgreSQL)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/academyvite.git
   cd academyvite
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Navigate to the backend directory and install dependencies:**
   ```bash
   cd backend
   npm install
   ```

## Running the Application

1. **Start the backend server:**
   ```bash
   <!-- node server.js -->
   ```

2. **Start the frontend development server:**
   ```bash
   npm run dev
   ```

3. **Access the application:**
   - Open your browser and go to `http://localhost:5189/`

## Usage

- **Explore Courses:** Navigate to the "Explore" section to view available courses.
- **My Learning:** Track your progress and view completed courses.
- **Chat with AI:** Use the chat feature for real-time assistance.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact [your email].

## Steps to Fix Dependency Conflict

1. **Use `--legacy-peer-deps`:**
   - Modify your deployment script to use `--legacy-peer-deps` when installing dependencies. This can be done by adding a `.npmrc` file in your project root with the following content:
     ```
     legacy-peer-deps=true
     ```

2. **Update `package.json`:**
   - Ensure your `package.json` specifies compatible versions of dependencies. If `react-google-login` is not essential, consider removing or replacing it with a compatible package.

3. **Remove `react-google-login`:**
   - If it's not critical, you can uninstall it:
     ```bash
     npm uninstall react-google-login
     ```

4. **Re-deploy:**
   - After making these changes, try deploying again on Vercel.

### Additional Considerations

- **Check for Updates:**
  - Ensure all your packages are up to date and compatible with React 18.

- **Alternative Packages:**
  - Consider using alternative packages for Google login that support React 18.