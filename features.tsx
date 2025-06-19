import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "Voucher Based Accounting",
      content: (
        <div>
            <span className="md:text-3xl font-medium lg:4xl"> Real world accounting with ease</span>
          <ul className="mb-8 p-4 text-gray-700 md:text-2xl dark:text-neutral-200 list-disc list-inside">
            <li className="py-2 md:py-3">Supports 5 voucher types: CPV, CRV, BPV, BRV, JV</li>
            <li className="py-2 md:py-3">Organized voucher entry: Quickly add and review transaction records</li>
            <li className="py-2 md:py-3">Date-wise filtering: Find any voucher in seconds</li>
            <li className="py-2 md:py-3">Voucher print/export: Downloadable for your own records</li>
          </ul>
          {/* <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "Visual Dashboards",
      content: (
        <div>
            <span className="md:text-3xl font-medium lg:4xl">Understand your finances at a glance.</span>
          <ul className="mb-8 p-4 text-gray-700 md:text-2xl dark:text-neutral-200 list-disc list-inside">
            <li className="py-2 md:py-3">Income vs Expense graphs: Clear comparisons</li>
            <li className="py-2 md:py-3">Pie charts for category insights: Where is your money going?</li>
            <li className="py-2 md:py-3">Trends over time: See how spending evolves</li>
            <li className="py-2 md:py-3">Responsive layout: Works smoothly on desktop and mobile</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Detailed Reporting",
      content: (
        <div>
            <span className="md:text-3xl font-medium lg:4xl">Get professional insights instantly.</span>
          <ul className="mb-8 p-4 text-gray-700 md:text-2xl dark:text-neutral-200 list-disc list-inside">
            <li className="py-2 md:py-3">Custom date range reports: View by month, quarter, or year</li>
            <li className="py-2 md:py-3">Separate income & expense reports</li>
            <li className="py-2 md:py-3">Category-wise breakdown: Food, travel, bills, etc.</li>
            <li className="py-2 md:py-3">Export options: PDF, Excel</li>
          </ul>
        </div>
      ),
    },
    {
      title: "100% Free, Forever",
      content: (
        <div>
            <span className="md:text-3xl font-medium lg:4xl">No hidden fees — just value.</span>
          <ul className="mb-8 p-4 text-gray-700 md:text-2xl dark:text-neutral-200 list-disc list-inside">
            <li className="py-2 md:py-3">Unlimited entries</li>
            <li className="py-2 md:py-3">Full feature access — nothing locked</li>
            <li className="py-2 md:py-3">No payment info required</li>
            <li className="py-2 md:py-3">Built with community in mind</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Privacy-Focused",
      content: (
        <div>
            <span className="md:text-3xl font-medium lg:4xl">Your data, your control.</span>
          <ul className="mb-8 p-4 text-gray-700 md:text-2xl dark:text-neutral-200 list-disc list-inside">
            <li className="py-2 md:py-3">No selling of user data</li>
            <li className="py-2 md:py-3">Secured</li>
            <li className="py-2 md:py-3">Login-protected dashboard</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Simple & User-Friendly",
      content: (
        <div>
            <span className="md:text-3xl font-medium lg:4xl">Built for real people — not accountants only.</span>
          <ul className="mb-8 p-4 text-gray-700 md:text-2xl dark:text-neutral-200 list-disc list-inside">
            <li className="py-2 md:py-3">Clean, minimal interface</li>
            <li className="py-2 md:py-3">Mobile-first responsive design</li>
            <li className="py-2 md:py-3">No complex settings or jargon</li>
            <li className="py-2 md:py-3">Tooltips & guides</li>
          </ul>
        </div>
      ),
    },
  
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
