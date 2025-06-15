import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FunctionComponent } from 'react'
import GoogleButton from './google-button'

const SignUpPage: FunctionComponent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-md">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <CardTitle className="text-2xl font-bold text-white">
              Welcome to AI Presenter
            </CardTitle>
            <CardDescription className="text-gray-300 text-base">
              Create stunning presentations with the power of AI. Sign in to get started in seconds.
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <GoogleButton />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-gray-400">Secure & Private</span>
              </div>
            </div>

            {/* Privacy disclaimer */}
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center space-x-2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm font-medium">Privacy Protected</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed max-w-sm mx-auto">
                We {"don't"} store your private data. We only use Google for secure authentication
                and to personalize your AI presentation experience.
              </p>
              <p className='text-xs text-gray-400 leading-relaxed max-w-sm mx-auto'>Your privacy is our priority.</p>
            </div>

            {/* Terms */}
            <p className="text-xs text-center text-gray-500">
              By continuing, you agree to our
              <button className="mx-0.5 text-purple-400 hover:text-purple-300 underline transition-colors">
                Terms of Service
              </button>
              and
              <button className="mx-0.5 text-purple-400 hover:text-purple-300 underline transition-colors">
                Privacy Policy
              </button>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default SignUpPage
