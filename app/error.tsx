"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Next.js Router Navigation Failed:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Something went wrong loading this content!
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        We encountered a network issue trying to fetch this section. This can
        sometimes happen on slower connections or if the content was just
        updated.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          // Attempt to recover by trying to re-render the segment
          onClick={() => reset()}
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-6 py-2 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
