import { cn } from "@/lib/utils";
import { format, isAfter, isBefore, isValid, parse } from "date-fns";
import { CalendarIcon } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

const DATE_FORMAT = "yyyy-MM-dd";
const DATE_FORMAT_DISPLAY = "YYYY-MM-DD";

interface BirthDatePickerProps {
	label?: string;
	value: string | null;
	onChange: (date: string | null) => void;
	onError?: (error: string | null) => void;
	disabled?: boolean;
	error?: string;
	placeholder?: string;
	maxDate?: Date;
	minDate?: Date;
}

const BirthDatePicker = ({
	label = "Date of Birth",
	value,
	onChange,
	onError,
	disabled = false,
	error,
	placeholder = DATE_FORMAT_DISPLAY,
	maxDate = new Date(),
	minDate = new Date(1900, 0, 1),
}: BirthDatePickerProps) => {
	const [inputValue, setInputValue] = useState<string>(
		value ? format(value, DATE_FORMAT) : "",
	);
	const [isOpen, setIsOpen] = useState(false);
	const [formatError, setFormatError] = useState<string | null>(null);

	useEffect(() => {
		if (value) {
			setInputValue(format(value, DATE_FORMAT));
			setFormatError(null);
		} else if (value === null && inputValue) {
			setInputValue("");
			setFormatError(null);
		}
	}, [value]);

	useEffect(() => {
		if (onError) {
			onError(formatError);
		}
	}, [formatError, onError]);

	const handleCalendarChange = (date: Date | undefined) => {
		const selectedDate = date || null;

		if (selectedDate) {
			onChange(format(selectedDate, DATE_FORMAT));
		}

		if (date) {
			setInputValue(format(date, DATE_FORMAT));
			setFormatError(null);
		} else {
			setInputValue("");
		}
		setIsOpen(false);
	};

	const validateDate = (
		dateStr: string,
	): { isValid: boolean; error: string | null; date: string | null } => {
		if (!dateStr) {
			return { isValid: true, error: null, date: null };
		}

		try {
			const parsedDate = parse(dateStr, DATE_FORMAT, new Date());

			if (!isValid(parsedDate)) {
				return {
					isValid: false,
					error: "Invalid date. Please check month and day values",
					date: null,
				};
			}

			if (isAfter(parsedDate, maxDate)) {
				return {
					isValid: false,
					error: "Date cannot be in the future",
					date: null,
				};
			}

			if (isBefore(parsedDate, minDate)) {
				return {
					isValid: false,
					error: "Date is too far in the past",
					date: null,
				};
			}

			return {
				isValid: true,
				error: null,
				date: format(parsedDate, DATE_FORMAT),
			};
		} catch (error) {
			return {
				isValid: false,
				error: `Invalid date format. Use ${DATE_FORMAT_DISPLAY}`,
				date: null,
			};
		}
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setInputValue(newValue);

		if (!newValue) {
			setFormatError(null);
			onChange(null);
			return;
		}

		if (newValue.length >= 10) {
			const validation = validateDate(newValue);
			if (validation.isValid) {
				onChange(validation.date);
				setFormatError(null);
			} else {
				setFormatError(validation.error);
			}
		} else {
			setFormatError(null);
		}
	};

	const handleBlur = () => {
		if (!inputValue) {
			onChange(null);
			setFormatError(null);
			return;
		}

		const validation = validateDate(inputValue);

		if (validation.isValid) {
			if (validation.date) {
				onChange(validation.date);
				setInputValue(format(validation.date, DATE_FORMAT));
			} else {
				onChange(null);
			}
			setFormatError(null);
		} else {
			setFormatError(validation.error);
		}
	};

	const displayError = error || formatError;
	const hasError = Boolean(displayError);

	return (
		<div className="flex flex-col space-y-1.5">
			{label && <Label htmlFor="birthdate">{label}</Label>}
			<div className="flex">
				<Input
					id="birthdate"
					value={inputValue}
					onChange={handleInputChange}
					onBlur={handleBlur}
					disabled={disabled}
					placeholder={placeholder}
					className={cn(
						"rounded-r-none",
						hasError && "border-red-500 focus-visible:ring-red-500",
					)}
					aria-invalid={hasError}
					aria-describedby={hasError ? "birthdate-error" : undefined}
				/>
				<Popover open={isOpen} onOpenChange={setIsOpen}>
					<PopoverTrigger asChild>
						<Button
							type="button"
							variant="outline"
							className={cn(
								"rounded-l-none border-l-0",
								hasError && "border-red-500 focus-visible:ring-red-500",
							)}
							disabled={disabled}
						>
							<CalendarIcon className="h-4 w-4" />
							<span className="sr-only">Open calendar</span>
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Calendar
							mode="single"
							selected={
								(value && parse(value, DATE_FORMAT, new Date())) || undefined
							}
							onSelect={handleCalendarChange}
							disabled={disabled || { after: maxDate, before: minDate }}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
			</div>
			{displayError && (
				<p id="birthdate-error" className="text-red-500 text-sm">
					{displayError}
				</p>
			)}
		</div>
	);
};

export default BirthDatePicker;
