const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Error 404</h2>
        <p className="text-gray-800 mb-4">Sorry!! Not found.</p>
        <p className="text-gray-600">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <button
          onClick={() => window.history.back()}
          className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md focus:outline-none"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
