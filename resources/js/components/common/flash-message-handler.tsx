import { usePage } from "@inertiajs/react";
import { useEffect } from "react";
import { toast } from "sonner";

type FlashMessage = {
	type: "success" | "error" | "info" | "warning";
	message: string;
};

export const FlashMessageHandler = () => {
	const { props } = usePage();

	useEffect(() => {
		const flash = props.flash as FlashMessage;

		if (flash?.message) {
			switch (flash.type) {
				case "success":
					toast.success(flash.message);
					break;
				case "error":
					toast.error(flash.message);
					break;
				case "info":
					toast.info(flash.message);
					break;
				case "warning":
					toast.warning(flash.message);
					break;
			}
		}
	}, [props.flash]);

	return null;
};
