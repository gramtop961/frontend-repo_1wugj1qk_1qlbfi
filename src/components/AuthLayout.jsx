import BrandHeader from './BrandHeader'
import MarketingPanel from './MarketingPanel'

function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/70 backdrop-blur rounded-2xl p-8 shadow-lg border border-white/60">
          <BrandHeader />
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome back</h2>
            <p className="text-sm text-gray-600 mb-6">Sign in to manage your materials, suppliers, and purchase orders.</p>
            {children}
          </div>
        </div>

        <div className="hidden md:block">
          <div className="h-full rounded-2xl bg-white/60 backdrop-blur p-8 shadow-lg border border-white/60">
            <div className="mb-6">
              <p className="text-sm font-medium tracking-wide text-blue-700 uppercase">Why MaterialFlow</p>
              <h3 className="mt-1 text-2xl font-bold text-gray-900">Built for operations teams</h3>
            </div>
            <MarketingPanel />

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-lg bg-blue-50 p-4">
                <p className="text-2xl font-bold text-blue-700">5k+</p>
                <p className="text-xs text-blue-700/80">SKUs tracked</p>
              </div>
              <div className="rounded-lg bg-indigo-50 p-4">
                <p className="text-2xl font-bold text-indigo-700">99.9%</p>
                <p className="text-xs text-indigo-700/80">Accuracy</p>
              </div>
              <div className="rounded-lg bg-cyan-50 p-4">
                <p className="text-2xl font-bold text-cyan-700">24/7</p>
                <p className="text-xs text-cyan-700/80">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
