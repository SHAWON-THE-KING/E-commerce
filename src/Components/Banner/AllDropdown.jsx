import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const AllDropdown = ({ button, item01, item02, item03, item04, item05, item06, viewAll, className }) => {
    return (
        <div>
            {/* Woman’s Fashion Dropdown */}
            <div>
                <Menu as="div" className="relative inline-block pt-2">
                    <MenuButton className="inline-flex text-2xl w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 font-semibold text-gray-600 inset-ring-1 inset-ring-white/5 hover:bg-white/20 cursor-pointer">
                        {button}
                        <ChevronDownIcon aria-hidden="true" className={`-mr-1 size-10 text-gray-600 items-center ${className || ""}`} />
                    </MenuButton>

                    <MenuItems
                        transition
                        className="absolute left-20 z-10 w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                        <div className="py-1">
                            <MenuItem>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                >
                                    {item01}
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                >
                                    {item02}
                                </a>
                            </MenuItem>
                        </div>
                        <div className="py-1">
                            <MenuItem>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                >
                                    {item03}
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                >
                                    {item04}
                                </a>
                            </MenuItem>
                        </div>
                        <div className="py-1">
                            <MenuItem>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                >
                                    {item05}
                                </a>
                            </MenuItem>
                            <MenuItem>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                >
                                    {item06}
                                </a>
                            </MenuItem>
                        </div>
                        <div className="py-1">

                            <MenuItem>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:text-white data-focus:outline-hidden"
                                >
                                    {viewAll}
                                </a>
                            </MenuItem>
                        </div>

                    </MenuItems>
                </Menu>
            </div>


        </div>
    )
}

export default AllDropdown