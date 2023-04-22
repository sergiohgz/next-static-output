'use client';

import { SWRConfig } from "swr"

const Providers = ({ children }: {children: React.ReactNode}) => {
    return (<SWRConfig value={{revalidateOnFocus: false}}>{children}</SWRConfig>)
}

export default Providers;
