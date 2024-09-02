import { Bounce, toast } from 'react-toastify';

// Helper function to show toast notifications
const showToast = (message, type, options = {}) => {
  toast[type](message, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    ...options, // Merge any additional options
  });
};

// Notification function to handle different types of notifications
export const Notification = (message, type) => {
  console.log(message, type);

  switch (type) {
    case "error":
      showToast(message, "error");
      break;
    case "success":
      showToast(message, "success");
      break;
    case "promise":
      const resolveAfter1Sec = new Promise(resolve => setTimeout(resolve, 1000));
      toast.promise(
        resolveAfter1Sec,
        {
          pending: 'Tunggu sebentar...',
          success: `${message} 👌`,
          error: 'Promise rejected 🤯',
        },
        {
          position: "top-center",
          autoClose: 2000,
          theme: "colored",
        }
      );
      break;
    default:
      console.warn(`Unknown notification type: ${type}`);
  }
};
