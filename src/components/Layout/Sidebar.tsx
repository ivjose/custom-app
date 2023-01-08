import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { classNames } from '@utils/helpers'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// type HeroIcon = (
//   props: React.ComponentProps<'svg'> & {
//     title?: string
//     titleId?: string
//   }
// ) => JSX.Element

type InitialProps = {
  name: string
  href: string
}

interface NavigationProps extends InitialProps {
  children?: InitialProps[]
}

function Sidebar({
  navigation,
  subNavigation,
}: {
  navigation: NavigationProps[]
  subNavigation: InitialProps[]
}) {
  const router = useRouter()

  return (
    <>
      <div className="flex flex-shrink-0 items-center px-4">
        {/* Company Logo */}
        <Link href="/">
          <span className="sr-only">Company Logo</span>
          <Image
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
            className="h-8 w-auto"
            width={32}
            height={32}
          />
        </Link>
      </div>
      <div className="mt-5 h-0 flex-1 overflow-y-auto">
        <nav className="flex- space-y-1 bg-white ">
          {navigation.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className={classNames(
                    router.asPath === item.href
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center border-l-4 px-5 py-2 text-sm font-medium'
                  )}
                >
                  {item.name}
                </Link>
              </div>
            ) : (
              <Disclosure
                as="div"
                key={item.name}
                className="space-y-1"
                defaultOpen={router.asPath.includes(item.href)}
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={classNames(
                        router.asPath.includes(item.href)
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        // 'group flex items-center border-l-4 px-3 py-2 text-sm font-medium',
                        'group flex w-full items-center border-l-4 px-5 py-2 text-left text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500'
                      )}
                    >
                      <span className="flex-1">{item.name}</span>

                      <ChevronUpIcon
                        className={classNames(
                          open
                            ? 'rotate-180 transform text-gray-400'
                            : 'text-gray-300',
                          'ml-3 h-5 w-5 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
                        )}
                      />
                    </Disclosure.Button>

                    <Disclosure.Panel className="space-y-1" unmount>
                      {!!item.children
                        ? item.children.map((subItem) => (
                            <Link
                              href={`${item.href}${subItem.href}`}
                              key={subItem.name}
                              className="group flex w-full items-center rounded-md py-2 pl-11 pr-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            >
                              {subItem.name}
                            </Link>
                          ))
                        : ''}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            )
          )}
        </nav>
      </div>
      <div>
        <hr className="mx-5 mb-2 border-t border-gray-200" />
        {subNavigation.map((item) => (
          <div key={item.name}>
            <Link
              href={item.href}
              className={classNames(
                router.asPath === item.href
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center border-l-4 px-5 py-2 text-sm font-medium leading-6'
              )}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="flex flex-shrink-0 p-4">
        <Link href="/profile" className="group block w-full flex-shrink-0">
          <div className="flex items-center">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Your Profile"
                className="inline-block h-9 w-9 rounded-full"
                width={36}
                height={36}
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                Tom Cook
              </p>
              <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                View profile
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Sidebar
