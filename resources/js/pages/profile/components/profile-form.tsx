import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ProfileFormData } from "@/types";
import { Save } from "lucide-react";
import type React from "react";
import EducationTab from "./education-tab";
import PersonalInfoTab from "./personal-info-tab";

export default function ProfileForm({
	isEditing,
	data,
	setData,
	errors,
	processing,
	handleSubmit,
	selectedTab,
	setSelectedTab,
}: {
	isEditing: boolean;
	data: ProfileFormData;
	setData: (key: keyof ProfileFormData, value: string | null) => void;
	errors: Record<string, string>;
	processing: boolean;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	selectedTab: string;
	setSelectedTab: (tab: string) => void;
}) {
	return (
		<Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="personal">Personal Info</TabsTrigger>
				<TabsTrigger value="education">Education</TabsTrigger>
			</TabsList>
			<Card>
				<form onSubmit={handleSubmit}>
					<div className="min-h-[350px] md:min-h-[400px] lg:min-h-[450px]">
						<CardContent className="py-6">
							<PersonalInfoTab
								data={data}
								setData={setData}
								errors={errors}
								isEditing={isEditing}
							/>
							<EducationTab
								data={data}
								setData={setData}
								errors={errors}
								isEditing={isEditing}
							/>
						</CardContent>
						{isEditing && (
							<CardFooter>
								<Button
									type="submit"
									disabled={processing}
									className="ml-auto w-full sm:w-auto"
								>
									<Save className="mr-2 h-4 w-4" /> Save Changes
								</Button>
							</CardFooter>
						)}
					</div>
				</form>
			</Card>
		</Tabs>
	);
}
