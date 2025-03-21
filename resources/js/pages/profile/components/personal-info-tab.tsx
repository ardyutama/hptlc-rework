import { FormField } from "@/components/shared/form-field";
import SelectField from "@/components/shared/select-field";
import { TabsContent } from "@/components/ui/tabs";
import DatePickerField from "@/pages/profile/components/birthdate-picker";
import type { ProfileFormData } from "@/types";

const PersonalInfoTab = ({
	data,
	setData,
	errors,
	isEditing,
}: {
	data: ProfileFormData;
	setData: (key: keyof ProfileFormData, value: string | null) => void;
	errors: Record<string, string>;
	isEditing: boolean;
}) => (
	<TabsContent value="personal" className="mt-0 space-y-6">
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
			<FormField
				label="First Name"
				id="first_name"
				value={data.first_name}
				onChange={(e) => setData("first_name", e.target.value)}
				disabled={!isEditing}
				error={errors.first_name}
			/>
			<FormField
				label="Last Name"
				id="last_name"
				value={data.last_name}
				onChange={(e) => setData("last_name", e.target.value)}
				disabled={!isEditing}
				error={errors.last_name}
			/>
		</div>
		<FormField
			label="Phone Number"
			id="phone_number"
			value={data.phone_number}
			onChange={(e) => setData("phone_number", e.target.value)}
			disabled={!isEditing}
			error={errors.phone_number}
		/>
		<SelectField
			label="Gender"
			value={data.gender}
			onChange={(value) => setData("gender", value)}
			disabled={!isEditing}
			error={errors.gender}
			options={[
				{ value: "male", label: "Male" },
				{ value: "female", label: "Female" },
				{ value: "other", label: "Other" },
			]}
		/>
		<DatePickerField
			label="Birth Date"
			value={data.birth_date}
			onChange={(date) => setData("birth_date", date || null)}
			disabled={!isEditing}
			error={errors.birth_date}
		/>
	</TabsContent>
);

export default PersonalInfoTab;
