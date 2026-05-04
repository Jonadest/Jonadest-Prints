'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function QuotePage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        productType: '',
        quantity: '',
        description: '',
        deadline: '',
    });

    const [file, setFile] = useState(null);
    const [filePreview, setFilePreview] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            handleFile(selectedFile);
        }
    };

    const handleFile = (selectedFile) => {
        const allowedTypes = [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/webp',
            'image/svg+xml',
            'application/pdf',
        ];

        if (!allowedTypes.includes(selectedFile.type)) {
            alert(
                'Please upload a PDF or image file (JPG, PNG, GIF, WebP, SVG)',
            );
            return;
        }

        if (selectedFile.size > 10 * 1024 * 1024) {
            alert('File size must be less than 10MB');
            return;
        }

        setFile(selectedFile);

        if (selectedFile.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setFilePreview(e.target.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setFilePreview(null);
        }
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            handleFile(droppedFile);
        }
    };

    const removeFile = () => {
        setFile(null);
        setFilePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach((key) => {
                formDataToSend.append(key, formData[key]);
            });
            if (file) {
                formDataToSend.append('design', file);
            }

            const response = await fetch('/api/quote', {
                method: 'POST',
                body: formDataToSend,
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setIsSubmitted(true);
                setTimeout(() => {
                    router.push('/quote-success');
                }, 2000);
            } else {
                throw new Error(data.message || 'Failed to send');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        }
        setIsSubmitting(false);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center px-4">
                <div className="text-center">
                    <div className="text-6xl mb-6">✓</div>
                    <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                        Quote Request Sent!
                    </h1>
                    <p className="text-gray-medium mb-2">
                        Thank you, {formData.fullName}!
                    </p>
                    <p className="text-gray-medium mb-8">
                        We'll review your request and get back to you within 24
                        hours.
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-white text-black px-8 py-3 font-semibold hover:bg-gray-light transition-colors"
                    >
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Header with back button */}
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-gray-medium hover:text-white transition-colors mb-4"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back to Home
                    </Link>
                    <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                        Get a Quote
                    </h1>
                    <p className="text-gray-medium text-lg">
                        Fill out the form below and we'll provide a custom quote
                        for your project.
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-2 border-gray-dark focus:border-white outline-none px-4 py-3 text-white transition-colors"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-2 border-gray-dark focus:border-white outline-none px-4 py-3 text-white transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-2 border-gray-dark focus:border-white outline-none px-4 py-3 text-white transition-colors"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full bg-transparent border-2 border-gray-dark focus:border-white outline-none px-4 py-3 text-white transition-colors"
                                placeholder="Your delivery address"
                            />
                        </div>
                    </div>

                    {/* Product Details */}
                    <div>
                        <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
                            Product Type *
                        </label>
                        <select
                            name="productType"
                            value={formData.productType}
                            onChange={handleChange}
                            required
                            className="w-full bg-black border-2 border-gray-dark focus:border-white outline-none px-4 py-3 text-white transition-colors"
                        >
                            <option value="">Select a product...</option>
                            <option value="business-cards">
                                Business Cards
                            </option>
                            <option value="flyers">Flyers & Brochures</option>
                            <option value="booklets">
                                Booklets & Catalogs
                            </option>
                            <option value="stickers">Stickers & Labels</option>
                            <option value="large-format">
                                Large Format Printing
                            </option>
                            <option value="packaging">Packaging Design</option>
                            <option value="other">Other / Custom</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                Quantity *
                            </label>
                            <input
                                type="text"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-2 border-gray-dark focus:border-white outline-none px-4 py-3 text-white transition-colors"
                                placeholder="e.g., 500, 1,000, 5,000"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
                                Needed By *
                            </label>
                            <input
                                type="date"
                                name="deadline"
                                value={formData.deadline}
                                onChange={handleChange}
                                required
                                className="w-full bg-transparent border-2 border-gray-dark focus:border-white outline-none px-4 py-3 text-white transition-colors [color-scheme:dark]"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
                            Project Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            className="w-full bg-transparent border-2 border-gray-dark focus:border-white outline-none px-4 py-3 text-white transition-colors resize-none"
                            placeholder="Tell us about your project, including any specific requirements, colors, dimensions, etc."
                        ></textarea>
                    </div>

                    {/* File Upload Section */}
                    <div>
                        <label className="block text-sm font-medium mb-2 uppercase tracking-wider">
                            Upload Design or Sample (Optional)
                        </label>
                        <p className="text-gray-medium text-sm mb-3">
                            Accepted formats: PDF, JPG, PNG, GIF, WebP, SVG (Max
                            10MB)
                        </p>

                        {!file ? (
                            <div
                                className={`border-2 border-dashed p-8 text-center transition-all duration-300 cursor-pointer ${
                                    dragActive
                                        ? 'border-white bg-white/5'
                                        : 'border-gray-dark hover:border-gray-medium'
                                }`}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <div className="text-4xl mb-3">📁</div>
                                <p className="text-gray-medium mb-2">
                                    Drag & drop your file here, or click to
                                    browse
                                </p>
                                <p className="text-gray-medium text-sm">
                                    PDF or Image files only
                                </p>
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    name="design"
                                    accept=".pdf,.jpg,.jpeg,.png,.gif,.webp,.svg"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                            </div>
                        ) : (
                            <div className="border-2 border-white p-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center space-x-4">
                                        {filePreview ? (
                                            <div className="w-16 h-16 border border-gray-dark overflow-hidden flex-shrink-0">
                                                <img
                                                    src={filePreview}
                                                    alt="Preview"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-16 h-16 border border-gray-dark flex items-center justify-center flex-shrink-0">
                                                <span className="text-2xl">
                                                    📄
                                                </span>
                                            </div>
                                        )}
                                        <div>
                                            <p className="text-white font-medium text-sm truncate max-w-[200px] sm:max-w-[300px]">
                                                {file.name}
                                            </p>
                                            <p className="text-gray-medium text-xs mt-1">
                                                {(
                                                    file.size /
                                                    (1024 * 1024)
                                                ).toFixed(2)}{' '}
                                                MB
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={removeFile}
                                        className="text-gray-medium hover:text-white transition-colors ml-2 flex-shrink-0"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white text-black py-4 font-semibold text-base uppercase tracking-wider hover:bg-gray-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Sending...' : 'Submit Quote Request'}
                    </button>
                </form>
            </div>
        </div>
    );
}
