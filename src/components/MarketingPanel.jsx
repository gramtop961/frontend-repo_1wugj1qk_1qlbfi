import { ShieldCheck, Truck, Warehouse } from 'lucide-react'

function MarketingPanel() {
  const items = [
    {
      icon: <Warehouse className="h-5 w-5 text-blue-600" />,
      title: 'Centralized inventory',
      desc: 'Track stock across suppliers, projects, and locations in real-time.'
    },
    {
      icon: <Truck className="h-5 w-5 text-blue-600" />,
      title: 'Purchase automation',
      desc: 'Generate POs from low-stock alerts and streamline approvals.'
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-blue-600" />,
      title: 'Role-based access',
      desc: 'Granular permissions for admins, buyers, and warehouse staff.'
    }
  ]

  return (
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <div className="mt-1">{item.icon}</div>
          <div>
            <p className="font-medium text-gray-900">{item.title}</p>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default MarketingPanel
