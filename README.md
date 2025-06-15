<div align="center">

# 📝 TaskMaster - Simple To Do List

TaskMaster is a minimalistic website designed to help you manage your tasks efficiently. It provides a simple and intuitive interface for users to create, read, update, and delete tasks, as well as mark tasks as complete.

![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

<a href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID">
  <img src="./assets/video-thumbnail.png" width="80%" alt="Watch TaskMaster Demo">
</a>

</div>

## ✨ Features

- **CRUD Operations**: Create, read, update, and delete tasks with ease.
- **Complete Task Button**: Mark tasks as complete with a single click.
- **Minimalistic Design**: Focus on your tasks without distractions from unnecessary elements.
- **Real-time Updates**: Experience real-time updates with Next.js and MongoDB.
- **Responsive Design**: Works seamlessly across desktop and mobile devices.
- **Fast Performance**: Built with Next.js for optimal speed and user experience.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── TodoData.tsx     # Todo item component
│   │   └── Tweek.tsx        # Decorative cloud component
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx             # Main page (contains all UI logic)
│   └── api/
│       └── route.ts         # Frontend API routes (Next.js route handlers)
├── models/
│   └── Todo.ts              # Mongoose schema/model
└── app/
    └── lib/
        └── dbConnect.ts     # MongoDB connection utility
```

## 🚀 Installation

### Option 1: Use the Live Website
To use TaskMaster, simply visit the website [https://taskmaster.vercel.app](https://task-master-red-nu.vercel.app/) and start managing your tasks right away. No installation or additional software is required.

### Option 2: Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/raihanulislam00/TaskMaster.git
   cd TaskMaster
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to http://localhost:3000

## 📖 Usage

1. Visit the TaskMaster website or run it locally.

2. Add new tasks using the input field and "Add Task" button.

3. View your tasks in the organized task list.

4. Edit or delete tasks using the respective buttons.

5. Mark tasks as complete using the "Complete" button.

6. Enjoy a clutter-free task management experience!

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript

- **Styling**: Tailwind CSS

- **Database**: MongoDB

- **Deployment**: Vercel

- **API**: Next.js API Routes

## 🤝 Contributing

Contributions to TaskMaster are welcome! If you have any suggestions, bug reports, or feature requests, please follow these steps:

1. Fork the repository

2. Create a feature branch (`git checkout -b feature/amazing-feature`)

3. Commit your changes (`git commit -m 'Add some amazing feature'`)

4. Push to the branch (`git push origin feature/amazing-feature`)

5. Open a Pull Request

You can also submit issues to our GitHub repository https://github.com/raihanulislam00/TaskMaster. We appreciate your feedback and contributions!

## 🚀 Deployment

This project is deployed on Vercel. To deploy your own version:

1. Fork this repository

2. Connect your GitHub account to Vercel

3. Import the project and add your environment variables

4. Deploy with one click!

## 📄 License

TaskMaster is released under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license.

## 👨‍💻 Author

**Raihanul Islam**

- GitHub: [@raihanulislam00](https://github.com/raihanulislam00)

## 🙏 Acknowledgments

- Thanks to the Next.js team for the amazing framework

- MongoDB for providing reliable database solutions

- Vercel for seamless deployment platform

- Tailwind CSS for beautiful, responsive styling

<div align="center">
<strong>⭐ If you found this project helpful, please give it a star! ⭐</strong>
</div>
