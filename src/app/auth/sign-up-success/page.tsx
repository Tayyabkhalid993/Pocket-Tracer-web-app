// app/signup/success/page.tsx
import { CheckCircle2} from "lucide-react";

export default function SignupSuccess() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Branding Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-600">
            <span className="bg-blue-100 px-2 py-1 rounded-lg">Pocket Tracer</span>
          </h1>
          <p className="mt-1 text-sm text-gray-500">Track every penny, effortlessly</p>
        </div>

        {/* Success Card */}
        <div className="mt-8 bg-white p-8 shadow-lg rounded-xl border border-blue-100">
          <div className="flex flex-col items-center">
            <CheckCircle2 className="h-14 w-14 text-green-500 mb-4 stroke-[1.5]" />
            
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Your expense journey begins!
            </h2>
            
            <p className="mt-3 text-gray-600 text-center">
              We've sent a confirmation link to your email. 
              <span className="block font-medium text-blue-600 mt-1">
                Verify to unlock full access.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}