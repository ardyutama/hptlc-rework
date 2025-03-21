import { FormField } from "@/components/shared/form-field";
import { TabsContent } from "@/components/ui/tabs";
import type { ProfileFormData } from "@/types";

const EducationTab = ({
	data,
	setData,
	errors,
	isEditing,
}: {
	data: ProfileFormData;
	setData: (key: keyof ProfileFormData, value: string) => void;
	errors: Record<string, string>;
	isEditing: boolean;
}) => (
	<TabsContent value="education" className="space-y-6">
		<FormField
			label="University"
			id="university_name"
			value={data.university_name}
			onChange={(e) => setData("university_name", e.target.value)}
			disabled={!isEditing}
			error={errors.university_name}
		/>
		<FormField
			label="Study Program"
			id="study_program_name"
			value={data.study_program_name}
			onChange={(e) => setData("study_program_name", e.target.value)}
			disabled={!isEditing}
			error={errors.study_program_name}
		/>
	</TabsContent>
);

export default EducationTab;
