import Swal from "sweetalert2";

export function useAlert() {
  const showAlert = (icon: "success" | "error", title: string) => {
    return Swal.fire({
      icon,
      title,
      confirmButtonText: "OK",
      confirmButtonColor: "#f88897",
      background: "#FFFCF7",
      color: "#5C4033",
      iconColor: "#8B6B4F",
      buttonsStyling: true,
      customClass: {
        popup: "rounded-2xl",
        confirmButton: "rounded-lg px-6 py-2",
      },
    });
  };

  return {
    showAlert,
  };
}
