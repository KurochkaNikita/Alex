import {CheckIcon} from '@heroicons/react/20/solid'
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import {MinusSmallIcon, PlusSmallIcon} from '@heroicons/react/24/outline'
import {courses} from "@/constants/courses";
import {faqs} from "@/constants/fags";

function Courses() {
    return (
        <>
            <div className="isolate overflow-hidden bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 pt-24 pb-96 text-center sm:pt-32 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-base/7 font-semibold text-indigo-400">Pricing</h2>
                        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
                            Choose the right plan for you
                        </p>
                    </div>
                    <div className="relative mt-6">
                        <p className="mx-auto max-w-2xl text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                            Choose an affordable plan that’s packed with the best features for engaging your audience,
                            creating customer
                            loyalty, and driving sales.
                        </p>
                        <svg
                            viewBox="0 0 1208 1024"
                            className="absolute -top-10 left-1/2 -z-10 h-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
                        >
                            <ellipse cx={604} cy={512} rx={604} ry={512}
                                     fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"/>
                            <defs>
                                <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                                    <stop stopColor="#7775D6"/>
                                    <stop offset={1} stopColor="#E935C1"/>
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="flow-root bg-white pb-24 sm:pb-32">
                    <div className="-mt-80">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                                {courses.map((tier) => (
                                    <div
                                        key={tier.id}
                                        className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10"
                                    >
                                        <div>
                                            <h3 id={tier.id} className="text-base/7 font-semibold text-indigo-600">
                                                {tier.name}
                                            </h3>
                                            <div className="mt-4 flex items-baseline gap-x-2">
                                                <span
                                                    className="text-5xl font-semibold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                                                <span className="text-base/7 font-semibold text-gray-600">/month</span>
                                            </div>
                                            <p className="mt-6 text-base/7 text-gray-600">{tier.description}</p>
                                            <ul role="list" className="mt-10 space-y-4 text-sm/6 text-gray-600">
                                                {tier.features.map((feature) => (
                                                    <li key={feature} className="flex gap-x-3">
                                                        <CheckIcon aria-hidden="true"
                                                                   className="h-6 w-5 flex-none text-indigo-600"/>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <a
                                            href={tier.href}
                                            aria-describedby={tier.id}
                                            className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Get started today
                                        </a>
                                    </div>
                                ))}
                                <div
                                    className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                                    <div className="lg:min-w-0 lg:flex-1">
                                        <h3 className="text-base/7 font-semibold text-indigo-600">Discounted</h3>
                                        <p className="mt-1 text-base/7 text-gray-600">
                                            Dolor dolores repudiandae doloribus. Rerum sunt aut eum. Odit omnis non
                                            voluptatem sunt eos nostrum.
                                        </p>
                                    </div>
                                    <a
                                        href="#"
                                        className="rounded-md px-3.5 py-2 text-sm/6 font-semibold text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Buy discounted license <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mx-auto max-w-4xl">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Frequently asked questions
                </h2>
                <dl className="mt-16 divide-y divide-gray-900/10">
                    {faqs.map((faq) => (
                        <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                            <dt>
                                <DisclosureButton
                                    className="group flex w-full items-start justify-between text-left text-gray-900">
                                    <span className="text-base/7 font-semibold">{faq.question}</span>
                                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden"/>
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden"/>
                    </span>
                                </DisclosureButton>
                            </dt>
                            <DisclosurePanel as="dd" className="mt-2 pr-12">
                                <p className="text-base/7 text-gray-600">{faq.answer}</p>
                            </DisclosurePanel>
                        </Disclosure>
                    ))}
                </dl>
            </div>
        </>
    )
}

export default Courses;