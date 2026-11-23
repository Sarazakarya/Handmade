import Swal from "sweetalert2";

type AlertType = "success" | "error" | "warning" | "info";

interface AlertTheme {
  bg: string;
  text: string;
  bar: string;
  iconColor: string;
  border: string;
}

const THEMES: Record<AlertType, AlertTheme> = {
  success: {
    bg: "#faf6f0",
    text: "#4a2e1b",
    bar: "#8d5b3c",
    iconColor: "#f88897",
    border: "1px solid #e6dcd0",
  },
  error: {
    bg: "#fdf2f2",
    text: "#9b1c1c",
    bar: "#e02424",
    iconColor: "#e02424",
    border: "1px solid #fbd5d5",
  },
  warning: {
    bg: "#fffbeb",
    text: "#92400e",
    bar: "#d97706",
    iconColor: "#d97706",
    border: "1px solid #fde68a",
  },
  info: {
    bg: "#f0f9ff",
    text: "#075985",
    bar: "#0284c7",
    iconColor: "#0284c7",
    border: "1px solid #bae6fd",
  },
};

export function useAlert() {
  const showAlert = (icon: AlertType, title: string) => {
    const theme = THEMES[icon];

    return Swal.fire({
      toast: true,
      position: "top-end",
      icon,
      iconColor: theme.iconColor,
      title,
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
      background: theme.bg,
      color: theme.text,
      customClass: {
        popup:
          "!rounded-2xl !px-4 !py-3 !shadow-lg !backdrop-blur-md !flex !items-center",
        title:
          "!m-0 !p-0 !text-sm !font-semibold !tracking-normal !leading-normal !flex !items-center",
      },
      didOpen: (toast) => {
        toast.style.border = theme.border;
        const progressBar = toast.querySelector(
          ".swal2-timer-progress-bar",
        ) as HTMLElement;
        if (progressBar) {
          progressBar.style.backgroundColor = theme.bar;
        }

        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  };

  return { showAlert };
}
