
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Get more opportunities</h1>
        </div>

        <Button variant="outline" className="w-full py-6 text-indigo-700 border-indigo-100 hover:bg-indigo-50 font-semibold text-lg">
          <span className="mr-2 text-2xl font-bold">+</span>
          Sign Up with Google
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200"></span>
          </div>

          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Or sign up with email</span>
          </div>
        </div>

        {/* Form nhập liệu */}
        <form className="space-y-4">

          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" placeholder="Enter your full name" className="py-5" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter email address" className="py-5" />
          </div>

          <div className="space-2">
            <Label htmlFor="password">Passwork</Label>
            <Input id="password" type="password" placeholder="Enter your passwork" className="py-5" />
          </div>

          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-6 text-lg font-bold mt-2">
            Continue
          </Button>
        </form>

        <div className="text-center text-sm text-gray-500">
          <p>Already have an account? <Link href="#" className="text-indigo-600 font-bold">Login</Link></p>
        </div>
      </div>
    </div>
  )
}