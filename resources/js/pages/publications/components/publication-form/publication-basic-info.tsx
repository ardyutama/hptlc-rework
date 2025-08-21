import {PublicationFormData} from "@/pages/publications/components/publication-form/index";
import {FormErrors} from "@/pages/articles/components/article-form/types";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

interface PublicationBasicInfoProps {
    data: PublicationFormData;
    setData: (
        key: keyof PublicationFormData,
        value: PublicationFormData[keyof PublicationFormData]
    ) => void;
    errors: FormErrors;
}


export default function PublicationBasicInfo({
    data,
    setData,
    errors,
}: PublicationBasicInfoProps) {
    return (
        <>
            <div className="space-y-2" data-error={errors.title ? true : undefined}>
                <label htmlFor="title" className="block font-medium text-base">
                    Title
                </label>
                <Input
                    id="title"
                    name="title"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    placeholder="Enter Publication title"
                    className="text-lg"
                />
                {errors.title && (
                    <p className="mt-1 font-medium text-red-500 text-sm">
                        {errors.title}
                    </p>
                )}
            </div>

            <div className="space-y-2" data-error={errors.abstract ? true : undefined}>
                <label htmlFor="abstract" className="block font-medium text-base">
                    Abstract
                </label>
                <Textarea
                    id="abstract"
                    name="abstract"
                    value={data.abstract}
                    onChange={(e) => setData("abstract", e.target.value)}
                    placeholder="Write your Abstract"
                    className="h-24 resize-y"
                />
                {errors.abstract && (
                    <p className="mt-1 font-medium text-red-500 text-sm">
                        {errors.abstract}
                    </p>
                )}
                <p className="text-gray-500 text-sm">
                    A short abstract that appears in publications research (max 500 characters).
                </p>
            </div>
        </>
    )
}
