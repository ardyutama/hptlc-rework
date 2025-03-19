import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

export default function ProfileHeader({
	isEditing,
	toggleEdit,
}: { isEditing: boolean; toggleEdit: () => void }) {
	return (
		<div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
			<h1 className="font-bold text-2xl sm:text-3xl">User Profile</h1>
			<Button
				onClick={toggleEdit}
				variant={isEditing ? "outline" : "default"}
				className="w-full sm:w-auto"
			>
				{isEditing ? (
					<>
						<Pencil className="mr-2 h-4 w-4" /> Cancel
					</>
				) : (
					<>
						<Pencil className="mr-2 h-4 w-4" /> Edit Profile
					</>
				)}
			</Button>
		</div>
	);
}
