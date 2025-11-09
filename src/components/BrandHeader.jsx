import { Package } from 'lucide-react'

function BrandHeader() {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-blue-600 text-white">
        <Package className="h-6 w-6" />
      </div>
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">MaterialFlow</h1>
        <p className="text-sm text-gray-500">Inventory & purchasing management</p>
      </div>
    </div>
  )
}

export default BrandHeader
