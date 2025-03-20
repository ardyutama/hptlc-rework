import ProfileForm from "@/pages/profile/components/profile-form";
import type { UserProfileProps } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import ProfileHeader from "./profile-header";
import ProfileSidebar from "./profile-sidebar";
import {format} from "date-fns";

export default function UserProfile(): React.ReactElement {
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [selectedTab, setSelectedTab] = useState<string>("personal");
	const { user, member } = usePage<UserProfileProps>().props;
	const { data, setData, post, processing, errors } = useForm({
		first_name: member.first_name,
		last_name: member.last_name,
		university_name: member.university_name || "",
		phone_number: member.phone_number || "",
		study_program_name: member.study_program_name || "",
		gender: member.gender || "other",
		birth_date: member.birth_date || "",
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		post(route("profile.update"), {
			onSuccess: () => {
				setIsEditing(false);
			},
		});
	};

	const toggleEdit = (): void => {
		setIsEditing(!isEditing);
	};

	return (
		<div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
			<ProfileHeader isEditing={isEditing} toggleEdit={toggleEdit} />
			<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
				<div className="lg:col-span-1">
					<ProfileSidebar member={member} user={user} />
				</div>
				<div className="lg:col-span-2">
					<ProfileForm
						isEditing={isEditing}
						data={data}
						setData={setData}
						errors={errors}
						processing={processing}
						handleSubmit={handleSubmit}
						selectedTab={selectedTab}
						setSelectedTab={setSelectedTab}
					/>
				</div>
			</div>
		</div>
	);
}
