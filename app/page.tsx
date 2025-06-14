"use client";
import { useEffect, useState } from "react";
import TodoData from "./components/TodoData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { ObjectId } from "mongodb";
import { IconCloudDemo } from "./components/Tweek";
import { RiTaskFill, RiAddLine, RiCheckboxCircleLine, RiTodoLine } from "react-icons/ri";
import { FiLoader, FiTarget, FiTrendingUp } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";

interface Todo {
  _id: ObjectId;
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const fetchTodos = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api");
      setTodos(response.data.todos);
    } catch (err) {
      toast.error("Failed to fetch Todos");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const deleteTodo = async (mongoID: ObjectId) => {
    try {
      await axios.delete("/api", { params: { mongoID } });
      toast.success("Todo deleted successfully");
      await fetchTodos();
    } catch (err) {
      toast.error("Failed to delete Todo");
    }
  };

  const completeTodo = async (mongoID: ObjectId) => {
    try {
      await axios.put("/api", {}, { params: { mongoID } });
      toast.success("Todo status updated");
      await fetchTodos();
    } catch (err) {
      toast.error("Failed to complete Todo");
    }
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((form) => ({ ...form, [name]: value }));
  };

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      toast.warning("Please enter a title");
      return;
    }
    
    setIsAdding(true);
    try {
      await axios.post("/api", formData);
      toast.success("Todo added successfully");
      setFormData({ title: "", description: "" });
      await fetchTodos();
    } catch (err) {
      toast.error("Failed to add Todo");
    } finally {
      setIsAdding(false);
    }
  };

  // Calculate stats
  const completedTasks = todos.filter(todo => todo.isCompleted).length;
  const totalTasks = todos.length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="mt-16"
      />
      
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                <HiSparkles className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Task Manager
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Transform your productivity with our intuitive task management system
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/2 -left-8 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Tasks</p>
                <p className="text-2xl font-bold text-gray-900">{totalTasks}</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <RiTodoLine className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">{completedTasks}</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <RiCheckboxCircleLine className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Progress</p>
                <p className="text-2xl font-bold text-purple-600">{completionRate}%</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-full">
                <FiTrendingUp className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${completionRate}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Add Task Card */}
          <div className="w-full xl:w-1/3">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 sticky top-8">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <IconCloudDemo />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <RiAddLine className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Create New Task</h2>
                <p className="text-gray-600">Add a new task to boost your productivity</p>
              </div>
              
              <form onSubmit={onSubmitHandler} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
                    Task Title*
                  </label>
                  <input
                    value={formData.title}
                    type="text"
                    id="title"
                    name="title"
                    placeholder="What needs to be accomplished?"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 placeholder-gray-400"
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    id="description"
                    name="description"
                    placeholder="Add some details to help you remember..."
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 placeholder-gray-400 resize-none"
                    onChange={onChangeHandler}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isAdding}
                  className={`w-full flex justify-center items-center gap-3 px-6 py-4 rounded-xl font-semibold text-white transition-all duration-200 ${
                    isAdding 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
                  }`}
                >
                  {isAdding ? (
                    <>
                      <FiLoader className="animate-spin" size={20} />
                      Creating Task...
                    </>
                  ) : (
                    <>
                      <RiAddLine size={20} />
                      Create Task
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Task List */}
          <div className="w-full xl:w-2/3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                      <FiTarget className="text-indigo-600" />
                      Your Tasks
                    </h2>
                    <p className="text-gray-600 mt-1">
                      {totalTasks > 0 ? `${completedTasks} of ${totalTasks} tasks completed` : 'No tasks yet'}
                    </p>
                  </div>
                  {totalTasks > 0 && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-indigo-600">{completionRate}%</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">Complete</div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-8">
                {isLoading ? (
                  <div className="flex flex-col justify-center items-center py-16">
                    <FiLoader className="animate-spin text-indigo-500 mb-4" size={32} />
                    <p className="text-gray-600 font-medium">Loading your tasks...</p>
                  </div>
                ) : todos.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="mx-auto w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-6">
                      <RiTaskFill className="text-indigo-600" size={40} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No tasks yet</h3>
                    <p className="text-gray-600 mb-6 max-w-sm mx-auto">
                      Start by creating your first task to organize your workflow and boost productivity
                    </p>
                    <div className="inline-flex items-center gap-2 text-indigo-600 font-medium">
                      <RiAddLine size={18} />
                      Add your first task
                    </div>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                            #
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Task Details
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Description
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {todos.map((item, index) => (
                          <TodoData
                            key={item._id.toString()}
                            id={index + 1}
                            title={item.title}
                            description={item.description}
                            isCompleted={item.isCompleted}
                            mongoID={item._id}
                            deleteTodo={deleteTodo}
                            completeTodo={completeTodo}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}