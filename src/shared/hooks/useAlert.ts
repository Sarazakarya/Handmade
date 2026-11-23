import Swal from "sweetalert2";

const COLORS = {
  success: { bg: "#faf6f0", bar: "#faf6f0" },
  error: { bg: "#c0392b", bar: "#ffffff" },
};

export function useAlert() {
  const showAlert = (icon: "success" | "error", title: string) => {
    const c = COLORS[icon];

    return Swal.fire({
      toast: true,
      position: "top-end",
      title,
      showConfirmButton: false,
      timer: 2200,
      timerProgressBar: true,
      background: c.bg,
      color: "brown-400",
      customClass: {
        popup: "rounded-2xl! px-5! py-3! shadow-2xl! text-[0.85rem]!",
        title: "m-0! font-bold! tracking-wide!",
        timerProgressBar: `bg-[${c.bar}]!`,
      },
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  };

  return { showAlert };
}
