import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { MemberData, UserData } from "@/types";
import { format } from "date-fns";
import { Book, Cake, CalendarIcon, Phone, School, User } from "lucide-react";

const InfoItem = ({
	icon: Icon,
	label,
	value,
}: { icon: React.ElementType; label: string; value: string }) => (
	<div className="flex items-center gap-2">
		<div className="rounded-full bg-primary/10 p-2">
			<Icon className="h-4 w-4 text-primary" />
		</div>
		<div>
			<p className="text-gray-500 text-sm">{label}</p>
			<p className="font-medium">{value}</p>
		</div>
	</div>
);
export default function ProfileSidebar({
	member,
	user,
}: { member: MemberData; user: UserData }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>
					<div className="flex items-center">
						<User className="mr-2 h-6 w-6" />
						<span>
							{member.first_name} {member.last_name}
						</span>
					</div>
				</CardTitle>
				<CardDescription className="break-all">{user.email}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-4">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
						<InfoItem
							icon={CalendarIcon}
							label="Member since"
							value={format(new Date(member.joined_date), "MMM d, yyyy")}
						/>
						<InfoItem
							icon={Phone}
							label="Phone"
							value={member.phone_number || "Not provided"}
						/>
						<InfoItem
							icon={Cake}
							label="Gender"
							value={
								member.gender
									? member.gender.charAt(0).toUpperCase() +
										member.gender.slice(1)
									: "Not provided"
							}
						/>
					</div>
					<div className="mt-2 border-gray-100 border-t pt-4">
						<h3 className="mb-2 font-medium">Education</h3>
						<InfoItem
							icon={School}
							label="University"
							value={member.university_name || "Not provided"}
						/>
						<InfoItem
							icon={Book}
							label="Study Program"
							value={member.study_program_name || "Not provided"}
						/>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
