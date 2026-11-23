"use client";
import { useAlert } from "@/shared/hooks/useAlert";
import Text from "../atoms/Text";
import { Share2 } from "@/assets/icons/Icons";

const ShareButton = () => {
  const { showAlert } = useAlert();

  async function handleShare() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showAlert("success", "Link copied successfully");
    } catch {
      showAlert("error", "Failed to copy link");
    }
  }

  return (
    <div
      className="flex items-center gap-2.5 cursor-pointer"
      onClick={handleShare}
    >
      <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-slate-600 uppercase">
        <Text size="sm">SHARE</Text>
        <Share2 className="size-4 text-[#d98a8a]" />
      </div>
    </div>
  );
};

export default ShareButton;
