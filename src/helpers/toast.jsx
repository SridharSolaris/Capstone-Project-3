import React, { useEffect } from "react";

const Toast = ({ message, duration = 4000 }) => {
  useEffect(() => {
    const toast = document.createElement("ion-toast");
    toast.message = message;
    toast.duration = duration;
    toast.color = "dark";

    document.body.appendChild(toast);

    toast.present();

    return () => {
      document.body.removeChild(toast);
    };
  }, [message, duration]);

  // Return null because you don't need to render anything for the toast
  return null;
}

export default Toast;
