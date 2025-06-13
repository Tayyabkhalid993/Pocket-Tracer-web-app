// app/not-found.tsx

export const metadata = {
  title : "Not Found"
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 flex flex-col justify-center items-center px-4 sm:px-0">
      <h1>Not Found | 404</h1>
    </div>
  );
}