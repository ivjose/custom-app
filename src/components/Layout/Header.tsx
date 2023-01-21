import { Menu, Transition } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'

import { classNames } from '@utils/helpers'

const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Settings', href: '/settings' },
  { name: 'Logout', href: '#' },
]

function Header({ url }: { url: string }) {
  const [breadcrumbs, setBreadcrumbs] = useState<
    {
      name: string
      href: string
    }[]
  >([])

  useEffect(() => {
    const pathWithoutQuery = url.split('?')[0]
    let pathArray = pathWithoutQuery.split('/')
    pathArray.shift()

    pathArray = pathArray.filter((path) => path !== '')

    const currentBreadcrumbs = pathArray.map((path, index) => {
      const href = '/' + pathArray.slice(0, index + 1).join('/')
      return {
        href,
        name: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
      }
    })

    setBreadcrumbs(currentBreadcrumbs)
  }, [url])

  return (
    <div className="flex flex-1 justify-between px-8">
      <div className="flex flex-1 items-center">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-2">
            <li>
              <div>
                <Link href="/" className="text-gray-400 hover:text-gray-500">
                  Home
                </Link>
              </div>
            </li>
            {!!breadcrumbs.length &&
              breadcrumbs.map((page) => (
                <li key={page.name}>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                    <Link
                      href={page.href}
                      className="ml-2 text-sm font-medium capitalize text-gray-500 hover:text-gray-700"
                      aria-current={url === page.href ? 'page' : undefined}
                    >
                      {page.name}
                    </Link>
                  </div>
                </li>
              ))}
          </ol>
        </nav>
      </div>
      <div className="ml-4 flex items-center md:ml-6">
        <button
          type="button"
          className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Profile dropdown */}
        <Menu as="div" className="relative ml-3">
          <div>
            <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span className="sr-only">Open user menu</span>
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Your Profile"
                className="inline-block h-9 w-9 rounded-full"
                width={36}
                height={36}
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {userNavigation.map((item) => (
                <Menu.Item key={item.name}>
                  <Link
                    href={item.href}
                    className={classNames(
                      url === item.href ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    {item.name}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}

export default Header
