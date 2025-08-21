import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FileText, UploadCloud, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PublicationFileUploadProps {
    file: File | string | null;
    onFileChange: (file: File | null) => void;
    error?: string;
    isProcessing: boolean;
}

const getFileName = (file: File | string | null): string | null => {
    if (!file) return null;
    if (typeof file === 'string') {
        return file.split('/').pop() || "Attached File";
    }
    return file.name;
};


export default function PublicationFileUpload({
  file,
  onFileChange,
  error,
  isProcessing,
}: PublicationFileUploadProps) {
    const fileName = getFileName(file);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            onFileChange(acceptedFiles[0]);
        }
    }, [onFileChange]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
        },
        multiple: false,
        disabled: isProcessing,
    });

    const handleRemoveFile = (e: React.MouseEvent) => {
        e.stopPropagation();
        onFileChange(null);
    };

    return (
        <div className="space-y-2">
            <label htmlFor="publication-file" className="block text-sm font-medium text-gray-700">
                Publication File (PDF)
            </label>
            <div
                {...getRootProps()}
                className={cn(
                    "relative flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center transition-colors hover:border-blue-500",
                    isDragActive && "border-blue-500 bg-blue-50",
                    fileName && "border-solid border-green-500 bg-green-50",
                    error && "border-destructive bg-destructive/10",
                    isProcessing && "cursor-not-allowed opacity-60"
                )}
            >
                <input {...getInputProps()} id="publication-file" />

                {fileName ? (
                    <div className="flex flex-col items-center text-gray-700">
                        <FileText className="h-12 w-12 text-green-600" />
                        <span className="mt-2 font-semibold text-green-800">{fileName}</span>
                        <p className="text-xs text-gray-500 mt-1">Click or drag file to this area to replace.</p>
                        <button
                            type="button"
                            onClick={handleRemoveFile}
                            disabled={isProcessing}
                            className="absolute top-2 right-2 rounded-full p-1 text-gray-500 bg-gray-200 hover:bg-red-100 hover:text-red-600 transition-colors"
                            aria-label="Remove file"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col items-center text-gray-500">
                        <UploadCloud className="h-12 w-12" />
                        <p className="mt-2 font-semibold text-gray-700">
                            {isDragActive ? "Drop the file here..." : "Drag & drop PDF here, or click to select"}
                        </p>
                        <p className="text-xs">PDF only, max 10MB.</p>
                    </div>
                )}
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
    );
}
