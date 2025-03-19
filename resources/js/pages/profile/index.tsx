import ContentLayout from "@/layouts/content-layout";
import { MainLayout } from "@/layouts/main-layout";
import type React from "react";
import UserProfile from "./components/user-profile";

function Profile() {
	return (
		<ContentLayout>
			<UserProfile />
		</ContentLayout>
	);
}

Profile.layout = (page: React.ReactNode) => (
	<MainLayout children={page} title="Profile" />
);

export default Profile;
